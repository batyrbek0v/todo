import axios from "axios";
import { API, instance } from "./Api";



export const createTodo = (data, uID) => API.post(`todos/${uID}`, data)

export const getTodos = uID => API.get(`todos/${uID}`)

export const deleteTodo = (uID ,id) => API.deleteTodo(`todos/${uID}/${id}`)

export const removeTodo = (uID ,id) => instance.delete(`/todos/${uID}/${id}.json`)

// export const getResume = userId => instance.get(`todos/${userId}.json`)