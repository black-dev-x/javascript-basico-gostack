const listElement = document.querySelector('#app ul')
const inputElement = document.querySelector('#app input')
const buttonElement = document.querySelector('#app button')

let todos = []

const renderTodos = () => {
  listElement.innerHTML = ''
  saveToStorage(todos)
  todos.map(transformOnListItem).forEach(insertOnListElement)
}

const transformOnListItem = (todo, index) => {
  const li = document.createElement('li')
  const text = document.createTextNode(todo)
  const removeLink = createRemoveLink(index)
  li.appendChild(text)
  li.appendChild(removeLink)
  return li
}

const createRemoveLink = index => {
  var linkElement = document.createElement('a')
  linkElement.setAttribute('href', '#')
  var linkText = document.createTextNode('Excluir')
  linkElement.appendChild(linkText)
  linkElement.onclick = () => removeTodo(index)
  return linkElement
}

const removeTodo = index => {
  todos.splice(index, 1)
  renderTodos()
}
const insertOnListElement = listItem => {
  listElement.appendChild(listItem)
}

const addNewTodo = () => {
  const todo = inputElement.value
  inputElement.value = ''
  todos.push(todo)
  renderTodos()
}

const saveToStorage = () => {
  localStorage.setItem('todos', JSON.stringify(todos))
}
const recoverFromStorage = () => {
  const todosJSON = localStorage.getItem('todos')
  todos = JSON.parse(todosJSON) || []
}

buttonElement.onclick = addNewTodo
recoverFromStorage()
renderTodos()
