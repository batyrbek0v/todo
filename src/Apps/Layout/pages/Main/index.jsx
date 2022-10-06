import React from 'react'
import Todo from '../../../../components/FormInput/Form'
import UseLogin from '../../../Auth/pages/Login/hooks/UseLogin'
import { useCards } from '../Hooks/useCards'
import Form from '../../../../components/FormInput/Form'
import Todos from '../../../../components/Todos/Todos'
import cls from "../../../../Styles/Todos.module.scss"
import { ImSpinner11 } from 'react-icons/im'
import { RiDeleteBin3Fill } from 'react-icons/ri'
import Skeletons from '../../../../components/Loader/Skeletons'

const Main = () => {

  const { users } = UseLogin()

  const { actions, isLoading, todos } = useCards()

  const [todo, setTodo] = React.useState('')

  // =======================================================
  const handleSubmit = e => {
    e.preventDefault()

    actions.post({
      todo: todo,
      completed: false,
    })

    setTodo('')
  }
  // =======================================================

  const handleDelete = id => actions.deleteTodo(id)

  // =======================================================

  const handleEdit = (id, todo) => {

    const newTodo = prompt('New Task', todo)

    actions.editTodoshka({ todo: newTodo }, id)

  }

  // =======================================================
  const handleComplete = (id, completed) => actions.complete({ completed: !completed }, id)

  // =======================================================

  const updateTodos = () => actions.get(users?.id)

  // =======================================================

  const removeTodos = () => actions.deleteAllTodos(users?.id)

  return (
    <div style={{ "textAlign": "center", "marginTop": "50px" }}>
      <Form
        todo={todo}
        setTodo={setTodo}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        todos={todos}
      />

      <div className={cls.container}>
        <div className={cls.block}>
          <h2>All Todos</h2>
          <div className={cls.updateTodos}>
            <button
              disabled={isLoading}
              onClick={updateTodos}
              className={cls.update}
            >
              <ImSpinner11 color='white' size="18px" />
            </button>
            <button onClick={removeTodos}>
              <RiDeleteBin3Fill color='white' size="18px" />
            </button>
          </div>
          {!todos && <h1 className={cls.error}>No tasks !</h1>}
          
          {
            todos?.map(({ id, todo, completed }) => (
              <Todos
                key={id}
                id={id}
                todo={todo}
                completed={completed}
                onComplete={handleComplete}
                isLoading={isLoading}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            )).reverse()
          }
        </div>
      </div>
    </div>
  )
}

export default Main
