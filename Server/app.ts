import Server from './src/server'
import RouteMap from './src/routes/routeMap'
import Config from './src/utils/config'

Server.start(Config, RouteMap)
