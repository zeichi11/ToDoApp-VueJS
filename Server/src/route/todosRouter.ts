import express, { Router, Request, Response } from 'express'
import TodosRouteHandler from './todos'
import auth from '../middleware/authorization/auth'

const router: Router = express.Router()

router.post('/', auth, TodosRouteHandler.get)

export default router;