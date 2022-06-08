import { Router, Request, Response } from 'express'
import TodosRouteHandler from './todos'

const router: Router = express.Router()

router.post('/', auth, TodosRouteHandler.get)

export default router;