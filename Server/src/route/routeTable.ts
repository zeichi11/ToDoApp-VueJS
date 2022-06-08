import UserRouter from './userRouter'
import WorkspaceRouter from './workspaceRouter'
import TodosRouter from './todosRouter'

export default {
  '/user': UserRouter,
  '/workspace': WorkspaceRouter,
  '/todos': TodosRouter
}