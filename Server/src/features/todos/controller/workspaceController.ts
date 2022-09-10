import { Request, Response } from 'express'
import Middleware from '..//middleware'
import WorkspaceService from '../database/service/workspaceService'

async function createWorkspace (req: Request, res: Response): Promise<void> {
  try {
    if (Middleware.isValidRequest(req, res)) {
      const userId: string = req.body.userId as string
      const workspaceName: string = req.body.workspaceName as string
      
      WorkspaceService.createWorkspace(userId, workspaceName)
    }
  } catch (e: any) {
    console.error(e.message)
  }
}

async function getWorkspace (req: Request, res: Response): Promise<void> {
  try {
    if (Middleware.isValidRequest(req, res)) {
      const userId: string = req.body.userId as string
      const workspaceId: string = req.body.workspaceId as string
      // const authToken: string = req.body.authToken as string

      const result: any = await WorkspaceService.getWorkspace(userId, workspaceId)
    }
  } catch (e: any) {
    console.error(e.message)
  }
}

async function deleteWorkSpace (req: Request, res: Response): Promise<void> {
  try {
    if (Middleware.isValidRequest(req, res)) {
      const userId: String = req.body.userId as String
      // const result: any = await Work()
    }
  } catch (e) {
    console.error(e.message)
  }
}

function execute (action: any) {
  console.log('execute')
}

export default {
  createWorkspace,
  deleteWorkSpace,
  getWorkspace,
  execute
}