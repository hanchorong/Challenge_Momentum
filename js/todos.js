const todosForm = document.querySelector("#todos form");
const todoInput = todosForm.querySelector("input:first-child");
const todoSubmit = todosForm.querySelector("input:last-child");
const todosList = document.querySelector("#todos ul");

const TODOS_KEY = "todos";

let todosArr = [];

function onSaveList() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todosArr));
}

function onTodoDelete(e) {
  const li = e.target.parentElement;
  // console.log(li);
  li.remove();
  todosArr = todosArr.filter((item) => item.id !== parseInt(li.id));
  onSaveList();
}

function printTodo(todoOBJ) {
  const li = document.createElement("li");
  li.id = todoOBJ.id;
  const span = document.createElement("span");
  span.innerText = todoOBJ.text;
  const button = document.createElement("button");
  button.classList = "fa-solid fa-delete-left fa-lg";
  todosList.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
  button.addEventListener("click", onTodoDelete);
}

function onSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  if (newTodo !== "") {
    todoInput.value = "";
    const todoOBJ = { id: Date.now(), text: newTodo };
    todosArr.push(todoOBJ);
    printTodo(todoOBJ);
    onSaveList();
  }
}

todosForm.addEventListener("submit", onSubmit);

const getTodoList = localStorage.getItem(TODOS_KEY);

if (getTodoList !== null) {
  const parseTodoOBJ = JSON.parse(getTodoList);
  todosArr = parseTodoOBJ;
  parseTodoOBJ.forEach(printTodo);
}
