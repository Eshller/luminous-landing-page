/** Hypothetical scenario assumptions, not market pricing or an offer. USD. */
export const SCENARIO_RATES = { low: 30, high: 80 } as const;
export const DATA_SOURCES = ["Team conversations", "Email & calendars", "Documents & files", "Business systems"] as const;

export function estimateDataValue(employees: number, years: number, sources: number) {
  const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, Number.isFinite(value) ? value : min));
  const team = Math.round(clamp(employees, 20, 300));
  const history = Math.round(clamp(years, 1, 20));
  const coverage = Math.round(clamp(sources, 0, DATA_SOURCES.length)) / DATA_SOURCES.length;
  const units = team * history * coverage;
  return { low: Math.round(units * SCENARIO_RATES.low), high: Math.round(units * SCENARIO_RATES.high) };
}
