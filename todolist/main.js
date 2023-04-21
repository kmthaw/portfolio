/* to add todo detail as an object property */

function addTodo(todoText, id){
    const todoobject = {
        todoText: document.querySelector(".inputselect").value,
        checked: false,
        id: Date.now(),
    };
    console.log(todoobject); //demo
}

/* calling add todo function & reset form */
const form = document.querySelector(".formselect");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    addTodo();
    form.reset();
});

/* access todo details from todo object */
function renderTodo(todo){
    const list = document.querySelector(".todo-list");
    const item = document.querySelector(`[data-key='${todo.id}']`); /* selecting the current todo item in the dom */
    const isChecked = todo.checked?"done":""; /* check if true, add done class*/

    /* create element li in todo ui */
    const newlist = document.createElement("li");
    newlist.setAttribute("class", `todo-item${isChecked}`);
    newlist.setAttribute("data-key",todo.id);

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
    //appending a newlist in list
    list.append(newlist);
}

// updating addTodo, calling renderTodo to pass object as argument
function addTodo(todoText, id){
    const todoobject ={
        todoText: document.querySelector(".inputselect").value,
        checked: false,
        id: Date.now(),
    };
    todoArray.push(todoobject);
    console.log(todoobject); //demo
    renderTodo(todoobject);
};

/* saving data in local storage JSON*/

let todoArray= [];

localStorage.setItem("todoArray", JSON.stringify(todoArray));



//get data form localstorage to display

document.addEventListener("DOMContentLoaded",()=>{
    const data = localStorage.getItem("todoArray");
    if (ref){
        todoArray = JSON.parse(ref);
        todoArray.forEach((t) =>{
            renderTodo(t);
        });
    }
});



