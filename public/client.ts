const clickableButton = document.getElementById("button");

function getButtonTitle() {
  return "Submitted";
}

clickableButton?.addEventListener("click", () => {
  clickableButton.textContent = getButtonTitle();
  getDataBackClient();
});

function getDataBackClient() {
  alert("WEB Dev is AMAZING...");
}
