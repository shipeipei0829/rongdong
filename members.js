import request from '@/utils/request'
import { getParams } from '@/utils/Utils'

export function memberList(data) {
    data = getParams(data)
    data.delete('token')
    return request({
      url: '/member/select_merch_members',
      method: 'get',
      params: data
    })
}
// //增加会员关注店铺
// export function addMemberMerch(data) {
//   data = getParams(data)
//   return request({
//   url: '/member/add_member_merch',
//   method: 'get',
//   data: data
//   })
//   }
  
//修改会员黑名单
   export function editAgentBlack(data) {
  data = getParams(data)
   return request({
   url: '/member/edit_agentblack',
   method: 'post',
   data: data
   })
   }
  
//   //修改会员详情
//   export function editOneMember(data) {
//   data = getParams(data)
//   return request({
//   url: '/member/edit_one_member',
//   method: 'post',
//   data: data
//   })
//   }