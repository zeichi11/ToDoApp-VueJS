import { Request, Response } from 'express'
import { isValidRequest } from '../../middleware/authorization'
import BoardController from '../../features/todos/controller/boardController'

/**
 * crate todo board
 * @param req 
 * @param res 
 */
function uploadImage (req: Request, res: Response) {
  
}

/**
 * open todo board
 * @param req 
 * @param res 
 */
function getImage (req: Request, res: Response) {
  
}

export { uploadImage, getImage }