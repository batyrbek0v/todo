import { API } from "./Api";

export const createTodo = (data, uID) => API.post(`todos/${uID}`, data)

export const getTodos = uID => API.get(`todos/${uID}`)