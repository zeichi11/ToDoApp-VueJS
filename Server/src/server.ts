import express, { Express } from 'express'
import type { Server as HTTPSServer } from "https"
import http from 'https'
import Router from './router'
import SocketChannel from './features/todos/channel/socketChannel'
import Database from './features/todos/database'
import { ENV } from './config/config'
import bodyParser from 'body-parser'
import { RouteTableType } from './route/routeTable.type'

let _server: Express
let _httpServer: http.Server

function _initialize (routeTable: RouteTableType) {
  _server = express()
  _server.use(bodyParser.json())
  
  Router.set(_server, routeTable)
  _httpServer = http.createServer(_server)
}

function start (routeTable: RouteTableType) {
  !_server && _initialize(routeTable)

  Database.initDB()
  SocketChannel.initialize(_httpServer)

  _httpServer.listen(ENV.SERVER.PORT, () => {
    console.log(`The Express server is listening at port: ${ENV.SERVER.PORT}`)
  })
}

export default {
  start
}