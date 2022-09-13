let getInput = document.getElementById("AddInput");
let getButton = document.getElementById("Add");


function myFn() {
    document.getElementById("Add").style.border = "thick solid #F5AB00";
    document.getElementById("Add").style.borderRadius = "8px";
    document.getElementById("Add").style.borderWidth = "2px";

}



// let todolistdata = []
// const listTodo = document.getElementById("todo-list")

// const addButton =  document.getElementById("add")
// addButton.addEventListener("click", function (){

//     const newInputText = document.getElementById("new-todo")



//     const newItem = {
//         description : newInputText.value,
//         done        : false
//      }

//      todolistdata.push (newItem) 

//      renderTodo ()
//      setLocal()
//      newInputText.value = ""

// })
// function renderTodo (){
//     listTodo.innerHTML = ""
//     for(let i=0; i<todolistdata.length; i++){

//         const item =todolistdata[i]
//         console.log ("runde:",i,item)
//     }
//     todolistdata.forEach((item,index) => {

//         const li = document.createElement ("li")
//         li.innerHTML = item.description
//         listTodo.appendChild(li)

//         const checkbox   = document.createElement ("input")
//         checkbox.type    = "checkbox"
//         checkbox.checked = item.done
//         li.appendChild(checkbox)
//         checkbox.addEventListener("change", ()=>{
//             todolistdata[index].done = !todolistdata[index].done 

//             renderTodo()

//         } )

//     })
// }
// const deletedButton = document.getElementById("deleted")
// deletedButton.addEventListener("click",function(){
//     todolistdata = todolistdata.filter (item=> {
//         return item.done == false
//     })
//     renderTodo ()
//     setLocal ()

// })

// const setLocal = () => {
//  localStorage.setItem("todos", JSON.stringify(todolistdata))

//  }
 
//  const getLocal = () => {
//  const data = localStorage.getItem("todos")
//  todolistdata=JSON.parse(data)

//  }
//  getLocal()
//  renderTodo()


// let todolistarray = []
// const addButton = document.getElementById("Add");
// const addInput  = document.getElementById('AddInput').value;
// addButton.addEventListener("click", function (){
//     document.getElementById("checkbox-list").innerHTML = addInput;
//     console.log("object");
    
// })

// const deletedButton = document.getElementById("deleted");
// deletedButton.addEventListener("click",function(){
//     todolistarray = todolistarray.filter (item=> {
//         return item.done == false
//     })
