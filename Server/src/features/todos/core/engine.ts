import Worker from './worker'

export default class Engine {
  _boardId: string | null = null
  _actionString: string | null = null

  constructor(boardId: string, actionString: string) {
    this._boardId = boardId
    this._actionString = actionString
  }

  /**
   * do work
   */
  doWork() {
    if (this._boardId !== null && this._actionString !== null) {
      const worker = new Worker(this._boardId)
      if (worker) {
        try {
          worker.open()
          worker.doCommand(this._actionString) && worker.save()
        } catch (e: any) {
          console.error(e.message)
        }
      }
    }
  }
}

