import React from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import UseLogin from '../../Apps/Auth/pages/Login/hooks/UseLogin'
import * as LayoutPages from "../../Apps/Layout/pages"
const LayoutRoutes = () => {

  const { users } = UseLogin()

  const navigate = useNavigate()

  React.useEffect(() => {
    users && navigate('/')

  }, [users])

  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<LayoutPages.Main />} />
      </Routes>
    </React.Fragment>
  )
}

export default LayoutRoutes
