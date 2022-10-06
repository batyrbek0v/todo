import axios from "axios";
import { API, instance } from "./Api";
const baseURL = 'https://todo-app-erlan-default-rtdb.asia-southeast1.firebasedatabase.app/'

// ==================================================================================================


// FETCH REQUEST ↓↓↓

// export const createTodo = (data, uID) => API.post(`todos/${uID}`, data)

export const getTodos = uID => API.get(`todos/${uID}`)

// export const deleteTodo = (uID, id) => API.deleteTodo(`todos/${uID}/${id}`)

// export const completeTodo = (data, uID, id) => API.patch(`todos/${uID}/${id}`, data)
// ==================================================================================================
// ==================================================================================================
// ==================================================================================================


// AXIOS REQUEST ↓↓↓

export const createTodo = (data, uID) => instance.post(`/todos/${uID}.json`, data)

// export const getTodos = uID => instance.get(`/todos/${uID}.json`)

export const removeTodo = (uID, id) => instance.delete(`/todos/${uID}/${id}.json`)

export const removeAllTodo = (uID) => instance.delete(`/todos/${uID}.json`)

export const editTodos = (data, uId, id) => instance.patch(`/todos/${uId}/${id}.json`, data)

export const completeTodo = (data, uID, id) => instance.patch(`/todos/${uID}/${id}.json`, data)
// ==================================================================================================
