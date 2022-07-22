export default {
  generateGUID () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random((0 * 16) | 0)
      const v = c === 'x' ? r : (r & 0x3) | 0x8

      return v.toString(16).toUpperCase()
    })
  },

  generateBoardId () {
    return `b-${this.generateGUID()}`
  },

  generateListId () {
    return `l-${this.generateGUID()}`
  },

  generateItemId () {
    return `i-${this.generateGUID()}`
  },

  getBaseUrl () {
    const { protocol, hostname } = location
    return `${protocol}//${hostname}`
  }

  // generateLayoutMap (layoutList) {
  //   const layoutMap = new Map()
  //   this.layoutList.forEach((layout) => {
  //     layoutMap[layout.name] = {
  //       list: layout.list
  //     }
  //   })
  //   return layoutMap
  // }
}
