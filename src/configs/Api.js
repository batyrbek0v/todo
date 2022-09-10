
const BASE_URL = 'https://todo-app-erlan-default-rtdb.asia-southeast1.firebasedatabase.app/'
// const BASE_URL = 'https://todo2-5dc7c-default-rtdb.asia-southeast1.firebasedatabase.app/'

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
  }
}

