import React from 'react'
import { completeTodo, createTodo, editTodos, getTodos, removeAllTodo, removeTodo } from '../../../../configs'
import { API } from '../../../../configs/Api'
import UseLogin from '../../../Auth/pages/Login/hooks/UseLogin'

export const useCards = () => {

  const { users } = UseLogin()

  const [isLoading, setLoading] = React.useState(false)

  const [todos, setTodos] = React.useState(null)


  const get = React.useCallback(uID => {
    setLoading(true)

    getTodos(uID)
      .then(r => {
        if (r) {
          const newBase = Object.entries(r)
            .map(([id, item]) => {
              return {
                id,
                ...item
              }
            })
          setTodos(newBase)
        }
      })
      .finally(() => setLoading(false))
  }, [])

  // CREATE TODOS FUNCTION  
  const post = React.useCallback(data => {

    setLoading(true)

    createTodo(data, users?.id)
      .finally(() => setLoading(false))
      .then(() => get(users?.id))

  }, [get, users?.id])

  // DELETE FUNCTION  
  const deleteTodo = React.useCallback(id => {
    setLoading(true)

    removeTodo(users?.id, id)
      .then(() => get(users?.id))
      .finally(() => setLoading(false))
  }, [get, users?.id])


  // DELETE ALL FUNCTION  
  const deleteAllTodos = React.useCallback(() => {

    setLoading(true)

    removeAllTodo(users?.id)
      .then(() => get(users?.id))
      .finally(() => setLoading(false))
  }, [users?.id])

  // EDIT FUNCTION  

  const editTodoshka = React.useCallback((data, id) => {
    setLoading(true)
    
    editTodos(data, users?.id, id)
    .then(() => get(users?.id))
    .finally(() => setLoading(false))
    
  },[get, users?.id])



  // COMPLETE FUNCTION  
  const complete = React.useCallback((data, id) => {
    setLoading(true)

    completeTodo(data, users?.id, id)
      .then(() => get(users?.id))
      .finally(() => setLoading(false))

  }, [get, users?.id])


  React.useEffect(() => {
    get(users?.id)
  }, [get, users?.id])

  return {
    isLoading,
    todos,
    actions: {
      post,
      complete,
      deleteTodo,
      deleteAllTodos,
      editTodoshka,
      get,
    }
  }

}

