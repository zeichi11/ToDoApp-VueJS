import axios from 'axios'

async function get (url) {
  try {
    const { data } = await axios.get(url)
    return data
  } catch (e) {
    console.log(e)
  }
}

async function post (url, payload) {
  try {
    let data
    if (payload) {
      data = await axios.post(url, payload)
    }
    return data
  } catch (e) {
    console.log(e)
  }
}

export default {
  get,
  post
}
