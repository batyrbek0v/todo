import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../../../../../firebase'

const UseLogin = () => {

  const [users, setUsers] = useState(null)
  const [loading , setLoading] = useState(true) 

  useEffect(() => {
    const Listen = onAuthStateChanged(auth, user => {
      if (user) {
        setLoading(false)
        setUsers({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        })
      }else{
        setLoading(false)
      }
    })

    return () => Listen()
  }, [])

  return {
    users,
    loading
  }
}

export default UseLogin
