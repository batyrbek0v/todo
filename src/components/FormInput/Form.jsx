import React from 'react'
import cls from "../../Styles/Form.module.scss"
import { BsPlusLg } from "react-icons/bs"

const Form = ({ todo, setTodo, onSubmit, isLoading }) => {


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
              placeholder='New task...'
              value={todo}
              onChange={e => setTodo(e.target.value)}
            />
            <button disabled={isLoading}><BsPlusLg /></button>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Form
