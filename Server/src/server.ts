import express, { Express } from 'express'
import Router from './router'
import SocketChannel from './channel/socketChannel'
import Database from './database'
import Config from './util/config'
import { RouteTableType } from './route/routeTable.type'

let _server: Express;

function _initialize (routeTable: RouteTableType) {
  _server = express()
  Router.set(_server, routeTable)
}

function start (routeTable: RouteTableType) {
  !_server && _initialize(routeTable)

  Database.initDB()
  SocketChannel.initialize(_server)

  _server.listen(Config.PORT, () => {
    console.log(`The Express server is listening at port: ${Config.PORT}`)
  })
}

export default {
  start
}