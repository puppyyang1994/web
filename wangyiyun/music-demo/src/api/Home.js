// 文件名--尽量和模块页面文件统一 便于查找
import request from '@/utils/request'

// 首页-- 推荐歌单

export const recommendMusic = params => request({
    url: '/personalized',
    params
    // 将来外面可能传入params的值 {limit: 20}
})

export const newMusic = params => request({
    url:'/personalized/newsong',
    params
})

/* export const recommendMusic = params => request({
    url:'/personalized',
    params  
    // params是简写key he value 同名
    // 我们请求的全部都是get请求  因为我们向服务器请求
}) */