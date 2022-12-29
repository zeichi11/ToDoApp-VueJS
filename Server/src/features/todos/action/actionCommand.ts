export default class ActionCommand {
  _action: any
  
  constructor(actionStr) {
    actionStr.length && this._action = JSON.parse(actionStr)
  }

  getBoardId () {
    return this._action.boardId
  }

  getCmd () {
    return this._action.cmd
  }

  getType () {
    return this._action.type
  }

  getValue () {
    return this._action.value
  }

  // offset : 배열 형태의 card 위치 [listIndex, cardIndex] - ex) [3, 5]
  getOffset () {
    return this._action.offset
  }
}