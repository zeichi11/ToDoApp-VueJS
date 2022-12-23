import Workspace from '../../workspace/controller/workspace'
import Board from './board'

export default class Worker {
  _boardId: string = ""
  _board: Board | null = null

  constructor(boardId: string) {
    this._boardId = boardId
  }

  /**
   * open
   */
  open () {
    try {
      this._board = new Board(this._boardId)
      console.log('open')
    } catch (e: any) {
      console.error(e.message)
    }
  }

  /**
   * save
   */
  save(): boolean {
    // db data export(save) 처리
  }

  /**
   * do command
   */
  doCommand (commandStr: string): boolean {
    
    return this._board && this._board.executeCommand(commandStr)
  }

  /**
   * close
   */
  close() {
    this._board && this._board.close()
  }



  
}