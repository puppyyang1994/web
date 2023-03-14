
import request from '@/utils/request'

// 搜索列表
export const hotSearch = params => request({
    url:'/search/hot'
})

export const searchResult = params => request({
    url:'/cloudsearch',
    params
})