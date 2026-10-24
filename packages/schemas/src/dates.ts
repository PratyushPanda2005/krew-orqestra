/** Dates are shown in India time, as "24 Oct 2026". */
const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "Asia/Kolkata",
});

const dateTimeFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "short",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
  timeZone: "Asia/Kolkata",
});

export const formatDate = (d: Date | string): string => dateFormatter.format(new Date(d));
export const formatDateTime = (d: Date | string): string => dateTimeFormatter.format(new Date(d));

/** Year and month of a date in India time. */
function istParts(d: Date): { year: number; month: number } {
  const parts = new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "numeric",
    timeZone: "Asia/Kolkata",
  }).formatToParts(d);
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value);
  return { year: get("year"), month: get("month") };
}

/**
 * Indian financial year (1 April – 31 March), e.g. "2026-27".
 * Invoice, credit note and receipt series reset at the start of each one.
 */
export function financialYear(d: Date | string = new Date()): string {
  const { year, month } = istParts(new Date(d));
  const start = month >= 4 ? year : year - 1;
  const end = (start + 1) % 100;
  return `${start}-${end.toString().padStart(2, "0")}`;
}
