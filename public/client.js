var lightclickableButton = document.getElementById("lButton");
var darkclickableButton = document.getElementById("dButton");
function getButtonTitle() {
    return "Submitted";
}
darkclickableButton === null || darkclickableButton === void 0 ? void 0 : darkclickableButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "#202020";
    darkclickableButton.textContent = getButtonTitle();
});
lightclickableButton === null || lightclickableButton === void 0 ? void 0 : lightclickableButton.addEventListener("click", function () {
    lightclickableButton.textContent = getButtonTitle();
    document.body.style.backgroundColor = "white";
});
