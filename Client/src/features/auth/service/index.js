import axios from 'axios'

const REQUEST_MAP: RequestMapType = {
  SIGN_UP: './signUp/complete',
  SIGN_IN_LOGIN: './signIn/login',
  SIGN_IN_INFO: './signIn/info'
}

async function post (url, data, opt,successCb, errorCb) {
  try {
    const result = await axios.post(url, data, opt)
    console.log(result)

    // await axios
    //   .post(url, data, opt)
    //   .then((response) => {
    //     successCb(response)
    //   })
    //   .catch((error) => {
    //     errorCb(error)
    //   })
  } catch (e) { 
    console.error(e)
  }
}

async function get (url, data, opt,successCb, errorCb) {
  try {
    await axios
      .get(url)
      .then((response) => {
        successCb(response)
      })
      .catch((error) => {
        errorCb(error)
      })
  } catch (e) {
    console.error(e)
  }
}

async function authPost (url, data, successCb, errorCb) {
  const opt = {
    'Content-Type': 'application/json'
  }

  post(url, data, opt, successCb, errorCb)
}

async function authGet (url, data, successCb, errorCb) {
  get(url, data, opt, successCb, errorCb)
}

async function signUp (data, successCb, errorCb) {
  authPost(REQUEST_MAP.SIGN_UP, data, successCb, errorCb)
}

async function login (data, successCb, errorCb) {
  authPost(REQUEST_MAP.SIGN_IN_LOGIN, data, successCb, errorCb)
}

async function info (data, successCb, errorCb) {
  authGet(REQUEST_MAP.SIGN_IN_INFO, data, successCb, errorCb)
}

export default {
  signUp, login, info
}
