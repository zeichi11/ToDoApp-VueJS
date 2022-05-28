import { Express } from 'express'
import { RouteTableType } from './routes/interface';

export default {
  set (app: Express, routerTable: RouteTableType) {
    for (let prop in routerTable) {
      if (routerTable.hasOwnProperty(prop)) {
        app.use(prop, routerTable[prop]);
      }
    }
  }
}