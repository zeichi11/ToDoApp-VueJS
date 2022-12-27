import express, { Router, Request, Response } from 'express'
import { info, checkIn, create, open } from './todos'
import { isValidRequest } from '../middleware/authorization'

const router: Router = express.Router()

router.post('/info', isValidRequest, info)
router.post('checkIn', isValidRequest, checkIn)
router.post('/create', isValidRequest, create)
router.get('/open', isValidRequest, open)

export default router;