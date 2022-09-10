import React from 'react'
import cls from "../../../../Styles/AuthLogin.module.scss"
import { FcGoogle } from "react-icons/fc"
import { FaChevronDown } from "react-icons/fa"
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../../../firebase'


const Login = () => {

  const provider = new GoogleAuthProvider()

  const handleLoginWithGoogle = () => signInWithPopup(auth, provider)

  return (
    <React.Fragment>
      <div className={cls.container}>
        <div className={cls.icon}>
          <div className={cls.title}>
            <h2>Click on the icon to register</h2>
            <FaChevronDown className={cls.downIcon} />
          </div>
          <FcGoogle
            onClick={handleLoginWithGoogle}
            className={cls.googleIcon} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login
