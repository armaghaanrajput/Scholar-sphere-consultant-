/**
 * Academic Session Utility for Scholar Sphere Consultants
 * Automatically calculates and rolls over academic admission sessions:
 *
 * Rule:
 * In any year, after March (i.e. April 1st onwards, when month index >= 3 in JS Date):
 * The session rolls forward to: currentYear / (currentYear + 1) e.g., 2026/2027 (or 2027/2028 after March 2027).
 * Before or during March (Jan 1 - Mar 31):
 * The session remains the ongoing academic cycle: (currentYear - 1) / currentYear e.g. 2025/2026.
 */

export interface AcademicSessionInfo {
  startYear: number;
  endYear: number;
  /** Format: "2026/2027" */
  slash: string;
  /** Format: "2026–2027" (En-dash) */
  dash: string;
  /** Format: "2026-27" (Short dash) */
  short: string;
  /** Full descriptive title e.g. "Admissions Session 2026/2027" */
  label: string;
  /** Next session format for comparison e.g. "2027/2028" */
  nextSlash: string;
}

export function getAcademicSession(currentDate: Date = new Date()): AcademicSessionInfo {
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth(); // 0 = Jan, 1 = Feb, 2 = Mar, 3 = Apr, ...

  // After March (month >= 3, i.e., April through December):
  // The new academic admissions session for startYear/endYear is active.
  const startYear = currentMonth >= 3 ? currentYear : currentYear - 1;
  const endYear = startYear + 1;
  const nextStart = startYear + 1;
  const nextEnd = nextStart + 1;

  return {
    startYear,
    endYear,
    slash: `${startYear}/${endYear}`,
    dash: `${startYear}–${endYear}`,
    short: `${startYear}–${String(endYear).slice(-2)}`,
    label: `Session ${startYear}/${endYear}`,
    nextSlash: `${nextStart}/${nextEnd}`,
  };
}

// Current active session singleton based on live system clock
export const CURRENT_SESSION = getAcademicSession();
