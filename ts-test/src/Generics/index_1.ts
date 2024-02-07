const userNameElement = document.querySelector<HTMLInputElement>("#idFromUI");
console.log(userNameElement.value);
// Type/ArrayType

function getUserId(userId: string): string {
  return userId;
}
function getUserId2(userId: number): number {
  return userId;
}

getUserId("1234");
getUserId2(1234);

function getUserIdGeneric<Type>(userId: Type): Type {
  return userId;
}

const result = getUserIdGeneric("1234");

function getUsers<U>(arg: Array<U>): U {
  const [a, b] = arg;
  return a;
}


