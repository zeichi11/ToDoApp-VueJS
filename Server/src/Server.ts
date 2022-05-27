import express from 'express'
import Router from './router'

let _server: express = null;

const _initialize = function (routeMap: ) {
  _server = express()
  Router.set(_server, routeMap);
}

const start = function (config, routeMap) {
  !_server && _initialize(routeMap);

  _server.listen(config.port, () => {
    console.log(`The Express server is listening at port: ${config.port}`)
  })
}

export default {
  start
}