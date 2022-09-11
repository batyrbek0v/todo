import React from 'react'
import cls from "../../Styles/Todos.module.scss"
import { RiDeleteBin5Fill } from "react-icons/ri"
import { MdModeEditOutline } from "react-icons/md"
import { BsCheckLg } from "react-icons/bs"
import { useCards } from '../../Apps/Layout/pages/Hooks/useCards'
import UseLogin from '../../Apps/Auth/pages/Login/hooks/UseLogin'
import { deleteTodo, getTodos, removeTodo } from '../../configs'

const Todos = ({ id, todo, comleted }) => {


  const [base, setBase] = React.useState(null)
  const { users } = UseLogin()

  React.useEffect(() => {
    getDeleteBase()
  }, [])

  const getDeleteBase = () => {
    getTodos(users?.id)
      .then(res => {
        if (res?.data) {
          const baseWithId = Object.entries(res?.data).map(([id, item]) => {
            return {
              id,
              ...item
            }
          })
          setBase(baseWithId)
        }
      })
  }
  const todoDelete = (id) => {
    removeTodo(users?.id, id).then((r) => r && getDeleteBase())
  }



  return (
    <React.Fragment>
      <div className={cls.todos}>
        <p>{todo}</p>
        <div className={cls.btn_block}>
          <button
            onClick={e => {
              e.preventDefault()
              todoDelete(id)
            }}
            // style={{ "backgroundColor": "#F31322" }}
          >
            <RiDeleteBin5Fill />
          </button>
          <button
            // style={{ "backgroundColor": "#5132D9" }}
          >
            <MdModeEditOutline />
          </button>
          <button
            // style={{ "backgroundColor": "#17BC58" }}
          >
            <BsCheckLg />
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Todos
