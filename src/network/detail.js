import {request} from './request'

export function getDetail(iid){
    return request({
        url: '/detail',
        params: {iid}
    })
}

export function getRecommend(){
    return request({
    url: '/recommend'
})
}

export class Goods{
    constructor(itemInfo,columns,services){
        this.title = itemInfo.title
        this.price = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.lowNowPrice = itemInfo.lowNowPrice
        this.discountDesc = itemInfo.discountDesc
        this.columns = columns
        this.services = services
    }
}

export class shopInfo{
    constructor(shopInfo){
        this.logo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.sell = shopInfo.cSells
        this.cGoods = shopInfo.cGoods
        this.score = shopInfo.score
    }
}
