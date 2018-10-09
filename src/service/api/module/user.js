import {http} from '../base/fly'

const post = http.post
export const user = {
  test(params) {
    return post('mptest/index/test', params)
  }
}
