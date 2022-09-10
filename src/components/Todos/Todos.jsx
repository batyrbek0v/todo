import React from 'react'
import cls from "../../Styles/Todos.module.scss"
import { RiDeleteBin5Fill } from "react-icons/ri"
import { MdModeEditOutline } from "react-icons/md"
import { BsCheckLg } from "react-icons/bs"

const Todos = ({ id, todo, comleted }) => {
  return (
    <React.Fragment>
      <div className={cls.todos}>
        <p>{todo}</p>
        <div className={cls.btn_block}>
          <button
            style={{ "backgroundColor": "#CD345E" }}
          >
            <RiDeleteBin5Fill />
          </button>
          <button
            style={{ "backgroundColor": "#5132D9" }}
          >
            <MdModeEditOutline />
          </button>
          <button
            style={{ "backgroundColor": "#17BC58" }}
          >
            <BsCheckLg />
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Todos
