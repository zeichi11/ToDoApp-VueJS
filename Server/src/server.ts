import express, { Express } from 'express'
import Router from './router'
import { RouteTableType } from './routes/interface'
import { configType } from './interfaces/'

let _server: Express;

const _initialize = function (routeTable: RouteTableType) {
  _server = express()
  Router.set(_server, routeTable)
}

const start = function (config: configType, routeTable: RouteTableType) {
  !_server && _initialize(routeTable)

  _server.listen(config.port, () => {
    console.log(`The Express server is listening at port: ${config.port}`)
  })
}

export default {
  start
}