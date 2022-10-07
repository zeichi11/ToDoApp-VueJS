import { Express } from 'express'
import Route from './route'

function _setRouter (server: Express) {
  server.post('/auth/get', Route.get)
  server.post('/auth/info', Route.info)
  server.post('/auth/signUp', Route.signUp)
  server.post('/auth/signIn', Route.signIn)
}

export default {
  setRouter: _setRouter
}