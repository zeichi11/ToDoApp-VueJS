import express, { Express } from 'express'
import type { Server as HTTPSServer } from 'https'
import http from 'https'
import Router from './router'
import { ENV } from './config/config'
import bodyParser from 'body-parser'

let _server: Express
let _httpServer: http.Server

function _initialize() {
  _server = express()
  _server.use(bodyParser.json())

  Router.setRouter(_server)
  _httpServer = http.createServer(_server)
}

function _start() {
  !_server && _initialize(routeTable)

  // Database.initDB()
  _httpServer.listen(ENV.SERVER.PORT, () => {
    console.log(`The Express server is listening at port: ${ENV.SERVER.PORT}`)
  })
}

export default {
  start: _start
}