import {
  request
} from './request'

export function getPosts() {

  return request({
    url: "/post/getExcellent",
    method: "post"
  })
}
