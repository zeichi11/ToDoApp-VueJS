import express, { Router } from 'express'
import { init, open } from './workspace'
import { isValidRequest } from '../middleware/authorization'

const router: Router = express.Router()

router.post('/init', isValidRequest, init)
router.get('/open', isValidRequest, open)

export default router;