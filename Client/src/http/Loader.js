import Requester from './Requester'
import Utils from '../common/Utils'

// TODO path 관리 모듈 추가 필요
export default {
  async loadBoard (boardId) {
    const url = `${Utils.getBaseUrl()}/board`
    const data = await Requester.post(url, { boardId })
    return data
  }
}
