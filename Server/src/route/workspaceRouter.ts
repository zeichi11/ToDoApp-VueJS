import express, { Router } from 'express'
import workspaceRouteHandler from './workspace'
import auth from '../middleware/authorization'

const router: Router = express.Router()

router.post('/', auth, workspaceRouteHandler.getWorkspace);

export default router;