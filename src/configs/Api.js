import axios from "axios"

const BASE_URL = 'https://todo-app-erlan-default-rtdb.asia-southeast1.firebasedatabase.app/'

// TO FETCH REQUEST ↓↓↓
export const API = {

  get: url => {
    return fetch(`${BASE_URL}${url}.json`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      },
    }).then(res => res.json())
  },

  post: (url, data) => {
    return fetch(`${BASE_URL}${url}.json`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      },
    }).then(res => res.json())
  },

  patch: (url, data) => {
    return fetch(`${BASE_URL}${url}.json`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      },
    })
  },
}
// ==================================================================================================


// TO AXIOS REQUEST

const baseURL = 'https://todo-app-erlan-default-rtdb.asia-southeast1.firebasedatabase.app/'

export const instance = axios.create({ baseURL })

