import {
  formatExperienceDuration,
  getExperienceDuration,
  pluralizeUk,
} from "./experienceDuration";

test("calculates full years and months across calendar years", () => {
  expect(getExperienceDuration("2025-02-01", new Date(2026, 8, 1))).toEqual({
    years: 1,
    months: 7,
  });
});

test("formats Ukrainian duration without zero-value parts", () => {
  expect(formatExperienceDuration("2025-01-01", new Date(2026, 0, 1), "ua")).toBe("1 рік");
  expect(formatExperienceDuration("2025-01-01", new Date(2025, 8, 1), "ua")).toBe("8 місяців");
});

test("uses correct Ukrainian plural forms", () => {
  const forms = ["рік", "роки", "років"];
  expect([1, 2, 5, 11, 21, 22, 25].map((value) => pluralizeUk(value, forms))).toEqual([
    "рік",
    "роки",
    "років",
    "років",
    "рік",
    "роки",
    "років",
  ]);
});

test("formats English duration independently from Ukrainian", () => {
  expect(formatExperienceDuration("2025-02-01", new Date(2026, 8, 1), "en")).toBe(
    "1 year 7 months"
  );
});
