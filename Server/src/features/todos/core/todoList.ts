import ListModel from ''


export default class TodoList {
  _listIndex: number = -1
  _listModel: ListModel | null = null

  constructor(listIndex: number) {
    this._listIndex = listIndex
  }
  
  async insert(id, title, createdAt) {
    const list = new List({
      _id: id,
      title,
      createdAt
    })
    await list.save().catch(() => {
      console.log('add list to db error')
    })
  }

  delete () {
  
  }

  rename () {

  }

  move (boardId, listIndex, toIndex) {

  }
}