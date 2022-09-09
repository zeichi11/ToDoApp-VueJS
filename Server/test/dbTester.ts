import mongoose, { Connection } from 'mongoose'
import { ENV } from '../src/config/config'
import WorkspaceController from '../src/database/service/workspaceService'
import BoardController from '../src/database/service/boardService'

let _db: Connection;

function getDBUri(): string {
  const PROTOCOL = 'mongodb://'
  // return `${PROTOCOL}${Config.MONGO_HOST}:${Config.MONGO_PORT}/${Config.MONGO_CONTEXT}`
  return `${PROTOCOL}localhost:27018/todoAppTest`
}

function initDB(): void {
  _db = mongoose.connection
  _db.on('error', console.error)
  _db.once('open', () => {
    console.log('Connected to mongoDB Server')
  })

  mongoose.Promise = global.Promise
  mongoose.connect(getDBUri())
}

(function test() {
  initDB()
  WorkspaceController.createWorkspace('zeichi\'s workspace')
}())
