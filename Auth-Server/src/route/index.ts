import { Request, Response } from 'express'
import AuthController from '../feature/controller/authController';

function get (req: Request, res: response) {
  AuthController.get(req, res)
}

function info (req: Request, res: Response) {
  AuthController.info(req, res)
}

function signIn (req: Request, res: Response) {
  AuthController.signUp(req, res)
}

function signUp (req: Request, res: Response) {
  AuthController.signUp(req, res)
}

function _initialize (server) {
  server.post('/auth/get', get)
  server.post('/auth/info', info)
  server.post('/auth/signUp', signUp)
  server.post('/auth/signIn', signIn)
}

export default {
  initialize: _initialize
}