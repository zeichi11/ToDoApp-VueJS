import Server from './src/server'
import RouteTable from './src/routes/routeTable'
import Config from './src/utils/config'

Server.start(Config.load(), RouteTable)