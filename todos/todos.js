const listElement = document.querySelector('#app ul')
const inputElement = document.querySelector('#app input')
const buttonElement = document.querySelector('#app button')

const todos = ['Ensinar Javascript', 'Ensinar React', 'Aprender React Native']

const renderTodos = () => {
  todos.map(transformOnListItem).forEach(insertOnListElement)
}

const transformOnListItem = todo => {
  const li = document.createElement('li')
  const text = document.createTextNode(todo)
  li.appendChild(text)
  return li
}

const insertOnListElement = listItem => {
  listElement.appendChild(listItem)
}

const addNewTodo = () => {}

renderTodos()
