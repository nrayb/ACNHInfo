type Month = "JAN" | "FEB" | "MAR" | "APR" | "MAY" | "JUN" | "JUL" | "AUG" | "SEP" | "OCT" | "NOV" | "DEC";

const MONTH_INDEX_MAP: {[index: number]: Month} = {
  0: "JAN",
  1: "FEB",
  2: "MAR",
  3: "APR",
  4: "MAY",
  5: "JUN",
  6: "JUL",
  7: "AUG",
  8: "SEP",
  9: "OCT",
  10: "NOV",
  11: "DEC",
}

// Throws if an invalid month data is provided
const validateMonthData = (monthData: boolean[]) => {
  if (!monthData) {
    throw(new Error("validateMonthData: monthData was undefined"));
  }

  if (monthData.length !== 12) {
    throw(new Error("validateMonthData: monthData had a number of entries not equalling to 12"));
  }

  // We can do more stuff like validating if the proper keys are present, but I think that may be overkill for now
};

export const getDisplayName = (monthData: boolean[]): string => {
  validateMonthData(monthData);

  // Handle all special cases
  if (!monthData.includes(true)) { return "Unknown"; }
  if (!monthData.includes(false)) { return "All Year"; }

  const validMonthSpans: Array<string | [string, string]> = [];
  let activeMonth: Month | undefined;
  monthData.forEach((bool, index) => {
    if (bool) {
      if (index === monthData.length - 1) {
        validMonthSpans.push(activeMonth === undefined ? MONTH_INDEX_MAP[index] : [activeMonth, MONTH_INDEX_MAP[index]]);
      }
      if (activeMonth === undefined) {
        activeMonth = MONTH_INDEX_MAP[index];
      }
    }
    if (!bool && activeMonth !== undefined) {
      const nextActiveMonth = MONTH_INDEX_MAP[index - 1];
      if (activeMonth === nextActiveMonth) {
        validMonthSpans.push(activeMonth);
      } else {
        validMonthSpans.push([activeMonth, nextActiveMonth]);
      }
      activeMonth = undefined;
    }
  });

  return validMonthSpans.reduce<string>((accum, spanOrMonth): string => {
    accum = accum !== "" ? `${accum}, ` : accum;
    const newString = typeof spanOrMonth === typeof "" ? spanOrMonth : `${spanOrMonth[0]} - ${spanOrMonth[1]}`
    return accum + newString;
  }, "");
};
