type MonthData = {[month: string]: boolean};

// Throws if an invalid month data is provided
const validateMonthData = (monthData: MonthData) => {
  if (!monthData) {
    throw(new Error("validateMonthData: monthData was undefined"));
  }

  const valueArray = Object.values(monthData);
  if (valueArray.length !== 12) {
    throw(new Error("validateMonthData: monthData had a number of entries not equalling to 12"));
  }

  // We can do more stuff like validating if the proper keys are present, but I think that may be overkill for now
};

export const getDisplayName = (monthData: MonthData): string => {
  validateMonthData(monthData);

  const booleanArray = Object.values(monthData);

  // Handle all special cases
  if (!booleanArray.includes(true)) { return "Unknown"; }
  if (!booleanArray.includes(false)) { return "All Year"; }

  const monthsArray = Object.keys(monthData);
  const validMonthSpans: Array<string | [string, string]> = [];
  let activeMonth: string | undefined;
  booleanArray.forEach((bool, index) => {
    if (bool) {
      if (index === booleanArray.length - 1) {
        validMonthSpans.push(activeMonth === undefined ? monthsArray[index] : [activeMonth, monthsArray[index]]);
      }
      if (activeMonth === undefined) {
        activeMonth = monthsArray[index];
      }
    }
    if (!bool && activeMonth !== undefined) {
      const nextActiveMonth = monthsArray[index - 1];
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
    const newString = typeof spanOrMonth === typeof "" ? (spanOrMonth as string).toUpperCase() : `${spanOrMonth[0].toUpperCase()} - ${spanOrMonth[1].toUpperCase()}`
    return accum + newString;
  }, "");
};
