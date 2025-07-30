/* 1) create a new element using create element function
   2) insert req data in that element either by using .innerHTML or .innerText
   3) insert new element in parent container using appendChild or insertBefore
 */

//    let todo = {
//     id: 2310992254,
//     title: "study at 9 pm"
//    }
   let todos = [
    {
        id: 2310992234,
        title: "study at 8 pm"
    },
    {
        id: 2310992245,
        title: "play at 5 pm"
    }
   ]
let todoContainer = document.querySelector(".todocontainer");
function addTodo(todo){
    let li = document.createElement("li");   // ${todo.title} it tells its not sting its a variable
    li.innerHTML = ` <div>
                <input type = "checkbox" name = " " id = " ">
                <h1> ${todo.title} </h1>             
                <div>  
                    <button class="editbtn">Edit</button>
                    <button class="deletebtn">Delete</button>
                </div>
            </div> `
    todoContainer.appendChild(li);

}
function showAllTodos(todos) {
    todos.forEach(todo=>{
        addTodo(todo);
    })
}
showAllTodos(todos);