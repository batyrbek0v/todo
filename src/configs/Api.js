import axios from "axios"

const BASE_URL = 'https://todo-app-erlan-default-rtdb.asia-southeast1.firebasedatabase.app/'
// const BASE_URL = 'https://todo2-5dc7c-default-rtdb.asia-southeast1.firebasedatabase.app/'

// const base2 = 'https://todo-app-erlan-default-rtdb.asia-southeast1.firebasedatabase.app/'

// export const instance = axios.create({base2})

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
  // deleteTodo: url => {
  //   return fetch(`${BASE_URL}${url}.json`),({
  //     method: 'DELETE',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //   })
  // }
  
}

const baseURL = 'https://todo-app-erlan-default-rtdb.asia-southeast1.firebasedatabase.app/'
export const instance = axios.create({ baseURL })

