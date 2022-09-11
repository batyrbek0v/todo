import React from 'react'
import { createTodo, deleteTodo, getTodos, removeTodo } from '../../../../configs'
import { API } from '../../../../configs/Api'
import UseLogin from '../../../Auth/pages/Login/hooks/UseLogin'

export const useCards = () => {

  const { users } = UseLogin()

  const [isLoading, setLoading] = React.useState(false)

  const [todos, setTodos] = React.useState(null)


  const post = React.useCallback(data => {

    setLoading(true)

    createTodo(data, users?.id)
      .finally(() => setLoading(false))

  }, [users?.id])



  const get = React.useCallback(uID => {
    getTodos(uID)
      .then(r => {
        const newBase = Object.entries(r).map(([id, item]) => {
          return {
            id,
            ...item
          }
        })
        setTodos(newBase)
      })
  }, [])

  React.useEffect(() => {
    get(users?.id)
  }, [get(users?.id)])





  return {
    isLoading,
    todos,
    actions: {
      post,
    }
  }

}


