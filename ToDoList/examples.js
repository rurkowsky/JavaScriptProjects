

let todoInput
let errorInfo
let addBtn
let ulList
let newTodo
let liList
let popup
let popupInfo
let todoToEdit
let popupInput
let popupAddBtn
let popupCloseBtn
let deleteBtn

const main = ()=>{
prepareDOMElements()
prepareDOMEvents()
}
const prepareDOMElements= ()=>{
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')
    liList = document.querySelector('li')
    //
    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    todoToEdit = document.querySelector('.popup-body')
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')
    //
    deleteBtn = document.querySelector('.delete')

}
const prepareDOMEvents = ()=>{
    addBtn.addEventListener('click', addNewTodo)
    ulList.addEventListener('click', chceckClick)
    popupCloseBtn.addEventListener('click', cancelEdit)
    popupAddBtn.addEventListener('click', changeTodoText)
    todoInput.addEventListener('keyup' , enterKeyCheck)
}
const addNewTodo = () => {
    if(todoInput.value !== ''){
        newTodo = document.createElement('li')
        newTodo.setAttribute('data-id', 'test')
        newTodo.textContent = todoInput.value
        ulList.append(newTodo)
        todoInput.value=''
        errorInfo.textContent = ''
        createToolsArea()

    }else{
        errorInfo.textContent = 'wpisz tereść zadania!'
    }

}
const createToolsArea = () => {
    toolsArena = document.createElement('div')
    toolsArena.classList.add('tools')
    newTodo.append(toolsArena)
    //
    confirmBtn = document.createElement('button')
    confirmBtn.classList.add('complete')
    insideBtn = document.createElement('i')
    insideBtn.classList.add('fas')
    insideBtn.classList.add('fa-check')
    confirmBtn.append(insideBtn)
    //
    editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent = ' EDIT '
    //
    deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    insideDeleteBtn = document.createElement('i')
    insideDeleteBtn.classList.add('fas')
    insideDeleteBtn.classList.add('fa-times')
    deleteBtn.append(insideDeleteBtn)

    //
    toolsArena.append(confirmBtn, editBtn, deleteBtn)

}


const chceckClick = e => {
    if (e.target.matches('.complete')) {
       e.target.closest('li').classList.toggle('completed')
       e.target.classList.toggle('completed')

    }else if(e.target.matches('.edit')){
        console.log('edit');
        editTodo(e)

    }else if(e.target.matches('.delete')){
        deleteTodo(e)
    }
}

const editTodo = e => {
    todoToEdit = e.target.closest('li')
    popupInput.value = todoToEdit.firstChild.textContent
    console.log(todoToEdit.firstChild);
    popup.style.display = 'flex'
    

}
const cancelEdit = () =>{
    popup.style.display = 'none'
    popupInfo.textContent = ''
}
const changeTodoText = () => {
    if(popupInput.value !== ''){
        todoToEdit.firstChild.textContent= popupInput.value
        popup.style.display = 'none'
        popupInfo.textContent = ''
    }else{
        popupInfo.textContent = 'musisz podać jakąś treść'
    }
}

const deleteTodo = e =>{
    TodoDelete = e.target.closest('li')
    TodoDelete.remove()
  const allTodos = ulList.querySelectorAll('li')
  if(allTodos.length ===0){
    errorInfo.textContent = 'Brak zadań na liście'
  }
}
const enterKeyCheck = e => {
    if(e.key === 'Enter'){
       addNewTodo()
    }
}
document.addEventListener('DOMContentLoaded', main)
