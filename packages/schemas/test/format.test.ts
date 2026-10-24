import { describe, expect, it } from "vitest";
import { financialYear, formatINR, formatINRShort, percentOf, rupeesToPaise } from "../src";

describe("money", () => {
  it("formats with Indian digit grouping", () => {
    expect(formatINR(rupeesToPaise(125000))).toBe("₹1,25,000");
    expect(formatINR(rupeesToPaise(1250.5))).toBe("₹1,250.50");
  });

  it("shortens lakhs and crores", () => {
    expect(formatINRShort(rupeesToPaise(125000))).toBe("₹1.25L");
    expect(formatINRShort(rupeesToPaise(24000000))).toBe("₹2.4Cr");
    expect(formatINRShort(rupeesToPaise(45000))).toBe("₹45K");
  });

  it("rounds percentages to the paisa", () => {
    expect(percentOf(rupeesToPaise(1000), 18)).toBe(18000);
  });
});

describe("financial year", () => {
  it("starts on 1 April in India time", () => {
    expect(financialYear("2026-03-31T19:00:00Z")).toBe("2026-27"); // 1 Apr 2026, 00:30 IST
    expect(financialYear("2026-03-31T18:00:00Z")).toBe("2025-26"); // 31 Mar 2026, 23:30 IST
    expect(financialYear("2026-10-24T06:00:00Z")).toBe("2026-27");
  });
});
