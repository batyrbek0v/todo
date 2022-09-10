import React from 'react'
import cls from "../../Styles/Todo.module.scss"
import { AiOutlineCheck } from "react-icons/ai"

const Todo = ({ todo, setTodo, onSubmit }) => {


  return (
    <React.Fragment>
      <div className={cls.todo_container}>
        <div className={cls.block}>
          <form
            className={cls.form}
            onSubmit={onSubmit}
          >
            <input
              className={cls.todo_input}
              type="text"
              placeholder='todo'
              value={todo}
              onChange={e => setTodo(e.target.value)}
            />
            <button><AiOutlineCheck /></button>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Todo
