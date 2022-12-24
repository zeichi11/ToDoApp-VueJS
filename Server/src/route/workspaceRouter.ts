import express, { Router } from 'express'
import { init, open } from './workspace'
import auth from '../middleware/authorization'

const router: Router = express.Router()

router.post('/init', auth, init)
router.get('/open', auth, open)

export default router;