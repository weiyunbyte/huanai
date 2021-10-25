/* 接口*/
import request from '@/utils/request'
/**
 * 测试test
 */
function test(data) {
  return request({
    url: `test`,
    method: 'post',
    data
  })
}
export default {
  test
}
