import React from 'react'
import cls from "../../Styles/Todos.module.scss"
import { RiDeleteBin5Fill } from "react-icons/ri"
import { MdModeEditOutline } from "react-icons/md"
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import Skeletons from '../Loader/Skeletons'

const Todos = ({ id, todo, completed, onComplete, onEdit, onDelete, isLoading }) => {

  if (isLoading) return <Skeletons />

  return (
    <React.Fragment>
      <div className={cls.todos}>
        <p className={completed && cls.complete}>{todo}</p>
        <div className={cls.btn_block}>
          <button
            disabled={isLoading}
            onClick={() => onDelete(id)}>
            <RiDeleteBin5Fill
            />
          </button>
          <button
            disabled={isLoading}
            onClick={() => onEdit(id, todo)}
          >
            <MdModeEditOutline />
          </button>
          {
            completed && (
              <button
                disabled={isLoading}
                onClick={() => onComplete(id, completed)}
              >
                <ImCheckboxChecked />
              </button>
            )
          }
          {
            !completed && (
              <button
                disabled={isLoading}
                onClick={() => onComplete(id, completed)}
              >
                <ImCheckboxUnchecked />
              </button>
            )
          }
        </div>
      </div>
    </React.Fragment >
  )
}

export default Todos