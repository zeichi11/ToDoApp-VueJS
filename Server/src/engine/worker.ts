import Workspace from './workspace'

export default class Worker {
  _spaceId: string | null = null
  _workspace: Workspace | null = null

  constructor(spaceId: string) {
    this._spaceId = spaceId
  }

  /**
   * open
   */
  open(boardId: string) {
    this._workspace = new Workspace(boardId)
  }

  /**
   * save
   */
  save(): boolean {
    return this._workspace && this._workspace.save()
  }

  /**
   * do command
   */
  doCommand(commandStr: string): boolean {
    return this._workspace && this._workspace.executeCommand(commandStr)
  }

  /**
   * close
   */
  close() {
    this._workspace && this._workspace.close()
  }
}