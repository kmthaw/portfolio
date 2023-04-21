// array for all todo
let todoArray = [];

// rendering the data
function renderTodo(todo) {
  //  store data to local storage
  localStorage.setItem("todoArray", JSON.stringify(todoArray));

  // select query by class
  const list = document.querySelector(".todo-list");
  const item = document.querySelector(`[data-key='${todo.id}']`);

  if (todo.deleted){
    item.remove();
    return;
  }

  // if checked is true add element
  const isChecked = todo.checked ? "done" : "";
  // create new li
  const newlist = document.createElement("li");
  // attribute
  newlist.setAttribute("class", `todo-item ${isChecked}`);
  newlist.setAttribute("data-key", todo.id);
  newlist.innerHTML = `
        <input id="${todo.id}"  type="checkbox"/>
        <label for "${todo.id}"  class="check"></label>
        <span>${todo.todoText}</span>
        <button class="delete-todo">
        <button class="delete-todo">
        <svg fill="var(--svgcolor)" xmlns="" width="24" height="24" viewBox="0 0 24 24">
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
        </svg>
        </button>
        `;
  
// statement if item exists in DOM, replace or append it
  if (item) {
    list.replaceChild(newlist,item);
  }else{
    list.append(newlist);
  }
}

// Adding a todo
function addTodo(todoText, id) {
  const todoobject = {
    todoText: document.querySelector(".inputselect").value,
    checked: false,
    id: Date.now()
  };
  // push object into array to store data
  todoArray.push(todoobject);
  console.log(todoobject);
  renderTodo(todoobject);
}

// function to mark/complete

function toggleDone(b){
    const index= todoArray.findIndex((myitem) => myitem.id === Number(b));
    todoArray[index].checked =! todoArray[index].checked;
    renderTodo(todoArray[index]);
}

// function to delete li

function deleteTodo(c){
    const index = todoArray.findIndex((myitem) => myitem.id === Number(c));
    const deletetodo={
        deleted:true,
        ...todoArray[index],
    };
    todoArray = todoArray.filter((myitem)=> myitem.id !== Number(c));
    renderTodo(deletetodo);
};

// submit to form
const form = document.querySelector(".formselect");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo();
  form.reset();
});

const list = document.querySelector(".todo-list");
list.addEventListener("click",(event)=>{
    if(event.target.classList.contains("check")){
        const itemKey = event.target.parentElement.dataset.key;
        toggleDone(itemKey);
    }

    if (event.target.classList.contains("delete-todo")){
        const itemKey = event.target.parentElement.dataset.key;
        deleteTodo(itemKey);
    }
});

//  load and show the stored data from storage
document.addEventListener("DOMContentLoaded", () => {
    const data = localStorage.getItem("todoArray");
    if (data) {
      todoArray = JSON.parse(data);
      todoArray.forEach((t) => {
        renderTodo(t);
      });
    }
  });






