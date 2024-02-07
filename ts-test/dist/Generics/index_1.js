const userNameElement = document.querySelector("#idFromUI");
console.log(userNameElement.value);
// Type/ArrayType
function getUserId(userId) {
    return userId;
}
function getUserId2(userId) {
    return userId;
}
getUserId("1234");
getUserId2(1234);
function getUserIdGeneric(userId) {
    return userId;
}
const result = getUserIdGeneric("1234");
function getUsers(arg) {
    const [a, b] = arg;
    return a;
}
