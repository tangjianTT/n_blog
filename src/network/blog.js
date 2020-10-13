import {
  request
} from './request'

export function getInfo() {

  return request({
    url: "/blog/getInfo",
    method: "post"
  })
}
