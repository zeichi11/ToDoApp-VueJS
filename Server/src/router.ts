export default {
  set (app, routerMap) {
    for (let prop in routerMap) {
      if (routerMap.hasOwnProperty(prop)) {
        app.use(prop, routerMap[prop]);
      }
    }
  }
}