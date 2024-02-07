interface EmailConvertor {
  (userName: string): string;
  defaultDomain: string;
}

const users = ["Gili", "Yuval", "Lior"];

function RunningSomeCode(fnCallback: EmailConvertor) {
  console.log(
    `domain is: ${fnCallback.defaultDomain} => ${fnCallback("Dudu")}`
  );
}

function extractEmail(userName: string): string {
  return userName + extractEmail.defaultDomain;
}

extractEmail.defaultDomain = "@gmail.com";

RunningSomeCode(extractEmail);
extractEmail.defaultDomain = "@hotmail.com";
RunningSomeCode(extractEmail);
console.log(users.map(extractEmail));

// - Create `SortFunction` interface with sortBy key - `asc` | `desc` and function that can

interface SortFunction {
  (a: number, b: number): number;
  sortKey: string;
}
const numbers = [1, 4, 3, 2, 5, 6, 5, 4, 5, 2, 2, 3, 8, 9];
sortFn.sortKey = "asc";
function sortFn(a: number, b: number) {
  if (sortFn.sortKey === "asc") return a - b;
  else return b - a;
}
runSortMain(sortFn);
sortFn.sortKey = "desc";
runSortMain(sortFn);

function runSortMain(callBackSortFn: SortFunction) {
  console.log(numbers.sort(callBackSortFn));
}

export default 1;
