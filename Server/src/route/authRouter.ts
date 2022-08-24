import express, { Router, Request, Response } from 'express'
import AuthRouteHandler from './auth'

const router: Router = express.Router()

router.get('./get', AuthRouteHandler.get)
router.post('/info', AuthRouteHandler.info)
router.post('/SignIn', AuthRouteHandler.signIn)
router.post('/SignUp', AuthRouteHandler.signUp)

export default router;