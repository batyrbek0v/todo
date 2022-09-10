import React from 'react'
import cls from "../../Styles/Loader.module.scss"
const Loader = () => {
  return (
    <React.Fragment>
      <div className={cls.container}>
        <div className={cls.loader}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Loader
