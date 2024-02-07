// someFunction({})
function someFunction(event) {
    return "ss";
}
var componentProps = {
    color: "red",
    onclick: someFunction,
};
var apiResponse = {
    headers: {
        authorization: { headerName: "authorization", value: "token" },
        contentType: { headerName: "content-type", value: "json" },
    },
};
