// someFunction({})
function someFunction(event) {
    return "ss";
}
const componentProps = {
    color: "red",
    onclick: someFunction,
};
const apiResponse = {
    headers: {
        authorization: { headerName: "authorization", value: "token" },
        contentType: { headerName: "content-type", value: "json" },
    },
};
