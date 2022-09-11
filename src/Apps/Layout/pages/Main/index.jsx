import React from 'react'
import Todo from '../../../../components/FormInput/Form'
import { createTodo, deleteTodo } from '../../../../configs'
import { API } from '../../../../configs/Api'
import UseLogin from '../../../Auth/pages/Login/hooks/UseLogin'
import { useCards } from '../Hooks/useCards'
import Loader from "../../../../components/Loader/Loader"
import Form from '../../../../components/FormInput/Form'
import Todos from '../../../../components/Todos/Todos'
import cls from "../../../../Styles/Todos.module.scss"
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Main = () => {

  const { users } = UseLogin()

  const { actions, isLoading, todos } = useCards()

  const [todo, setTodo] = React.useState('')


  const handleSubmit = e => {
    e.preventDefault()

    actions.post({
      todo: todo,
      comleted: false,
    })

    setTodo('')
  }



  if (!todos) return <Loader />

  return (
    <div style={{ "textAlign": "center", "marginTop": "50px" }}>
      <Form
        todo={todo}
        setTodo={setTodo}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        todos={todos}
      />
      {
        todos.length === 0 && (
          <h1>Нет Задач!</h1>
        )
      }
      <div className={cls.container}>
        <div className={cls.block}>
          <h2>All Todos</h2>
          {
            todos.map(({ id, todo, completed }) => (
              <Todos
                key={id}
                id={id}
                todo={todo}
                comleted={completed}
              />
            )).reverse()
          }
        </div>
      </div>
    </div>
  )
}

export default Main
