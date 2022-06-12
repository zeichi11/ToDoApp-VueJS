import List from '../database/schema/todo/listSchema'

async function addList(id, title, createdAt) {
  const list = new List({
    _id: id,
    title,
    createdAt
  })
  await list.save().catch(() => {
    console.log('add list to db error')
  })
}

function deleteList () {
  


}

function renameList () {

}

function addItem () {

}

function deleteItem () {

}

function modifyItem () {

}

function changeItemState () {

}

export default {
    addList,
    deleteList,
    renameList,
    addItem,
    deleteItem,
    modifyItem,
    changeItemState
}