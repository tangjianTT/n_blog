import {
  request
} from './request'

export function getSideBar() {

  return request({
    url: "/post/getExcellent",
    method: "post"
  })
}
