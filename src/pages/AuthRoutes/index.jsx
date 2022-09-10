import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import * as AuthPages from "../../Apps/Auth/pages"
import UseLogin from '../../Apps/Auth/pages/Login/hooks/UseLogin'
const Authroutes = () => {

  return (
    <React.Fragment>
      <Routes>
        <Route path='/auth/login' element={<AuthPages.Login />} />
        <Route path='*' element={<Navigate to={'/auth/login'} />} />
      </Routes>
    </React.Fragment>
  )
}

export default Authroutes
