import { Request, Response } from 'express'
import Middleware from '../../../middleware'
import WorkspaceService from '../service/workspaceService'

async function createWorkspace (req: Request, res: Response): Promise<void> {
  try {
    if (Middleware.isValidRequest(req, res)) {
      const userId: String = req.body.userId as String
      const workspaceName: String = req.body.workspaceName as String
      
      WorkspaceService.createWorkspace(userId, workspaceName)
    }
  }
}

async function getWorkspace (req: Request, res: Response): Promise<void> {
  try {
    if (Middleware.isValidRequest(req, res)) {
      const userId: String = req.body.userId as String
      const authToken: String = req.body.authToken as String

      const result: any = await WorkspaceService.getWorkspace(email, pwd, nickName)
    }
  }
}

async function deleteWorkSpace (req: Request, res: Response): Promise<void> {
  try {
    if (Middleware.isValidRequest(req, res)) {
      const userId: String = req.body.userId as String
      const result: any = await Work
    }
  }
}

export default {
  createWorkspace,
  getWorkspace
}