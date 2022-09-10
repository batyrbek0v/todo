import React from 'react'
import { createTodo, getTodos } from '../../../../configs'
import { API } from '../../../../configs/Api'
import UseLogin from '../../../Auth/pages/Login/hooks/UseLogin'

export const useCards = () => {

  const { users } = UseLogin()

  const [isLoading, setLoading] = React.useState(false)

  const [allTodos, setAllTodos] = React.useState(null)


  const post = React.useCallback(data => {

    setLoading(true)

    createTodo(data, users?.id)
      .finally(() => setLoading(false))

  }, [users?.id])


  const get = React.useCallback(uID => {
    getTodos(uID)
      .then(r => {
        const newData = Object.entries(r).map(([id, item]) => {
          return {
            id,
            ...item
          }
        })
        setAllTodos(newData)
      })
  }, [])

  React.useEffect(() => {
    get(users?.id)
  }, [get(users?.id)])

  return {
    isLoading,
    actions: {
      post
    }
  }

}


