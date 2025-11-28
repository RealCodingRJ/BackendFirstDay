const lightclickableButton = document.getElementById("lButton");
const darkclickableButton = document.getElementById("dButton");

function getButtonTitle() {
  return "Submitted";
}

darkclickableButton?.addEventListener("click", () => {
  document.body.style.backgroundColor = "#202020";
  darkclickableButton.textContent = getButtonTitle();
});

lightclickableButton?.addEventListener("click", () => {
  lightclickableButton.textContent = getButtonTitle();
  document.body.style.backgroundColor = "white";
});
