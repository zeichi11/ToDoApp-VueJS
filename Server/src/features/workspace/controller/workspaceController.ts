import { Request, Response } from 'express'
import { resourceLimits } from 'worker_threads'
import WorkspaceService from '../database/service/workspaceService'

async function createWorkspace (userId: string, workspaceName: string): Promise<void> {
  let result: Promise<void>
  try {
    result = await WorkspaceService.createWorkspace(userId, workspaceName)
  } catch (e: any) {
    console.error(e.message)
    result = null
  }
  return result
}

async function getWorkspace (userId: string, workspaceId: string): Promise<void> {
  let result: Promise<void>
  try {
    result = await WorkspaceService.getWorkspace(userId, workspaceId)
  } catch (e: any) {
    console.error(e.message)
  }
  return result
}

async function deleteWorkSpace (userId: string, workspaceId: string): Promise<void> {
  let result: Promise<void>
  try {
    result = await WorkspaceService.deleteWorkspace(userId, workspaceId)
  } catch (e) {
    console.error(e.message)
  }
  return result
}

export default {
  createWorkspace,
  deleteWorkSpace,
  getWorkspace
}