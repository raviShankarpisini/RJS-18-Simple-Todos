// Write your code here

import './index.css'

const TodoItem = props => {
  const {eachTodo, deleteTodo} = props
  const {id, title} = eachTodo

  const onClickDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="list-item">
      <p className="list-title-style">{title}</p>
      <button className="button" type="button" onClick={onClickDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
