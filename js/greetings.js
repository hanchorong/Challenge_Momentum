const login_form = document.querySelector("#greeting form");
const login_input = login_form.querySelector("input:first-child");
const login_submit = login_form.querySelector("input:last-child");
const printName = document.querySelector("#printName");

const CLASS_HIDDEN = "hidden";
const USERNAME = "userName";

function onSubmit(e) {
  e.preventDefault();
  const inputValue = login_input.value;
  localStorage.setItem(USERNAME, inputValue);
  login_form.classList.add(CLASS_HIDDEN);
  setGreeting(inputValue);
}

function setGreeting(inputValue) {
  printName.classList.remove(CLASS_HIDDEN);
  printName.innerHTML = `<i class="fa-solid fa-user"></i><span>${inputValue}</span>`;
}

const getUserName = localStorage.getItem(USERNAME);

if (getUserName === null) {
  login_form.classList.remove(CLASS_HIDDEN);
  login_form.addEventListener("submit", onSubmit);
} else {
  setGreeting(getUserName);
}
