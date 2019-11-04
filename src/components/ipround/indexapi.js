import request from '@/api/request'

export const getdistrict = (obj) => {
    const params = obj
    console.log(obj)
    return request({
      url: 'base/baseArea/list',
      params,
      method: 'post'
    })
  }