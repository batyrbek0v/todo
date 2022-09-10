import React from 'react'
import Todo from '../../../../components/FormInput/Form'
import { createTodo } from '../../../../configs'
import { API } from '../../../../configs/Api'
import UseLogin from '../../../Auth/pages/Login/hooks/UseLogin'
import { useCards } from '../Hooks/useCards'
import Loader from "../../../../components/Loader/Loader"
import Form from '../../../../components/FormInput/Form'
import Todos from '../../../../components/Todos/Todos'
import cls from "../../../../Styles/Todos.module.scss"

const Main = () => {

  const { users } = UseLogin()

  const { actions, isLoading, allTodos } = useCards()

  const [todo, setTodo] = React.useState('')


  const handleSubmit = e => {
    e.preventDefault()

    actions.post({
      todo: todo,
      comleted: false,
    })

    setTodo('')
  }

  if (!allTodos) return <Loader />

  return (
    <div style={{ "textAlign": "center", "marginTop": "50px" }}>
      <Form
        todo={todo}
        setTodo={setTodo}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        todos={allTodos}
      />
      {
        allTodos.length === 0 && (
          <h1>Нет Задач!</h1>
        )
      }
      <div className={cls.container}>
        <div className={cls.block}>
          <h2>All Todos</h2>
          {
            allTodos.map(({ id, todo, completed }) => (
              <Todos
                key={id}
                id={id}
                todo={todo}
                comleted={completed}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Main
