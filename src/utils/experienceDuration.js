function parseDate(value) {
  if (value instanceof Date) return value;

  const [year, month, day = 1] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function pluralizeUk(value, forms) {
  const remainder100 = value % 100;
  const remainder10 = value % 10;

  if (remainder100 >= 11 && remainder100 <= 14) return forms[2];
  if (remainder10 === 1) return forms[0];
  if (remainder10 >= 2 && remainder10 <= 4) return forms[1];
  return forms[2];
}

export function getExperienceDuration(startDate, endDate = new Date()) {
  const start = parseDate(startDate);
  const end = parseDate(endDate);
  let totalMonths = (end.getFullYear() - start.getFullYear()) * 12;

  totalMonths += end.getMonth() - start.getMonth();
  if (end.getDate() < start.getDate()) totalMonths -= 1;
  totalMonths = Math.max(0, totalMonths);

  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
  };
}

export function formatExperienceDuration(startDate, endDate, language = "ua") {
  const { years, months } = getExperienceDuration(startDate, endDate || new Date());
  const isUkrainian = language.startsWith("ua") || language.startsWith("uk");
  const parts = [];

  if (years > 0) {
    const label = isUkrainian
      ? pluralizeUk(years, ["рік", "роки", "років"])
      : years === 1 ? "year" : "years";
    parts.push(`${years} ${label}`);
  }

  if (months > 0) {
    const label = isUkrainian
      ? pluralizeUk(months, ["місяць", "місяці", "місяців"])
      : months === 1 ? "month" : "months";
    parts.push(`${months} ${label}`);
  }

  if (parts.length === 0) return isUkrainian ? "менше місяця" : "less than a month";
  return parts.join(" ");
}
