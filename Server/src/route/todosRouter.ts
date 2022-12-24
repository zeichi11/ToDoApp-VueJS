import express, { Router, Request, Response } from 'express'
import { create, open } from './todos'
import auth from '../middleware/authorization'

const router: Router = express.Router()

router.post('/create', auth, create)
router.get('/open', auth, create)

export default router;