import Server from './src/server'
import RouteTable from './src/routes/routeTable'
import Config from './src/util/config'

Server.start(Config.load(), RouteTable)