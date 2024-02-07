function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b?: string): void;
function add(t1, t2) {
  return t1;
}

function compareNumbers(a: number, b: number): boolean;
function compareNumbers(a: number[], b: number[]): boolean;
function compareNumbers(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    if (a === b) {
      return true;
    }
  } else {
    // compareArays
    // const result = compareArrays()
    let result = true;
    return result;
  }
}
