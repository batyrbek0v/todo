import React from 'react'
import Todo from '../../../../components/Todo/Todo'
import { createTodo } from '../../../../configs'
import { API } from '../../../../configs/Api'
import UseLogin from '../../../Auth/pages/Login/hooks/UseLogin'
import { useCards } from '../Hooks/useCards'

const Main = () => {

  const { users } = UseLogin()
  
  const {actions, isLoading} = useCards()

  const [todo, setTodo] = React.useState('')


  const handleSubmit = e => {
    e.preventDefault()

    actions.post({
      todo: todo,
      comleted: false,
    })

  }


  return (
    <div style={{ "textAlign": "center", "marginTop": "50px" }}>
      <Todo
        todo={todo}
        setTodo={setTodo}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default Main
