import React from 'react'
import { createTodo } from '../../../../configs'
import { API } from '../../../../configs/Api'
import UseLogin from '../../../Auth/pages/Login/hooks/UseLogin'

export const useCards = () => {

  const { users } = UseLogin()

  const [isLoading, setLoading] = React.useState(false)

  const post = React.useCallback(data => {

    setLoading(true)

    createTodo(data, users?.id)
      .finally(() => setLoading(false))

  }, [users?.id])

  return {
    isLoading,
    actions: {
      post,
    }
  }

}


