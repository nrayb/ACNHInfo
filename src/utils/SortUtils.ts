// I know this sin't the best place for this.
// Just going to keep this here for now until I can find a more appropriate place for it
export enum HeaderType {
  name = "Name",
  price = "Price",
  location = "Location",
  spawnTime = "Time"
}

// Needs TONS of improvemnt. very rough for now.
export const sortData = (data: string[][], index: number, ascending: boolean, headerType: HeaderType) => {
  let comparator: (a: string[], b: string[]) => number;

  switch (headerType) {
    case HeaderType.spawnTime:
      // We need special handling for this, but for now, keep the simple text comparator
    case HeaderType.name:
    case HeaderType.location:
        comparator = (a, b) => {
          const first =  a[index];
          const second =  b[index];

          if (first > second) {
            return ascending ? 1 : -1;
          }
          if (second > first) {
            return ascending ? -1 : 1;
          }
          return 0;
        }
      break;
    case HeaderType.price:
      comparator = (a, b) => {
        const first = parseInt(a[index].replace(",", ""), 10);
        const second = parseInt(b[index].replace(",", ""), 10);

        if (first > second) {
          return ascending ? 1 : -1;
        }
        if (second > first) {
          return ascending ? -1 : 1;
        }
        return 0;
      };
      break;
    default:
      throw(new Error("Attempted to sort table with invalid headerType"));
  }

  return data.sort(comparator);;
};