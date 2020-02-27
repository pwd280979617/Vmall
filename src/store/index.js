import vue from 'vue'
import Vuex from 'vuex'

vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cartList: [
            {
              "image": "//s5.mogucdn.com/mlcdn/c45406/180827_1590j44g2bk619i6655ji20ihikfb_640x960.jpg",
              "title": "秋装女2018新款套装时尚晚晚风气质chic港味女神网红两件套装俏皮",
              "desc": "今日特价",
              "price": "109.00",
              "iid": "1m7rp9w",
              "count": 2,
              "checked": true
            },
            {
              "image": "//s11.mogucdn.com/mlcdn/c45406/180825_4figj590flej05g556d6ll8ka09a7_640x902.jpg",
              "title": "套装女春秋2018新款时尚复古气质个性连帽卫衣两件套",
              "desc": "7折",
              "price": "148.00",
              "iid": "1m7jj7a",
              "count": 1,
              "checked": true
            },
            {
              "image": "//s11.mogucdn.com/mlcdn/c45406/180514_31c5j94dicf0h1582cg7j46e7cjfc_640x960.jpg",
              "title": "2018春秋季新款韩版原宿风闺蜜装圆领套头短袖t恤女中长款纯色百搭上衣宽松大码学生半袖体恤",
              "desc": "7折",
              "price": "49.00",
              "iid": "1m1camo",
              "count": 1,
              "checked": true
            },
            {
              "image": "//s11.mogucdn.com/mlcdn/c45406/180411_1202kj87dfe1i11fj2ak04ifeakld_640x960.jpg",
              "title": "2018新款女装春装简约衬衫女长袖雪纺上衣修身清新气质时尚大方个性百搭纯色韩范打底衬衣潮",
              "desc": "7折",
              "price": "56.00",
              "iid": "1lwwv82",
              "count": 1,
              "checked": true
            },
            {
              "image": "//s5.mogucdn.com/mlcdn/c45406/180907_3jkl78l30c0ijib72lk997gh033ed_640x960.jpg",
              "title": "吊带背心女夏2018秋季新款内搭吊带衫短款性感修身针织打底衫上衣显瘦",
              "desc": "女神新衣",
              "price": "29.80",
              "iid": "1m8a710",
              "count": 2,
              "checked": true
            },
            {
              "image": "//s11.mogucdn.com/p2/170301/106341701_4kfgdd3001475k8h1l365al2k5ed6_640x960.jpg",
              "title": "2018 新款女装上衣文艺棉麻短袖t恤 V领衫T恤女短袖女T桖",
              "desc": "火热促销",
              "price": "56.64",
              "iid": "1jw0sr2",
              "count": 2,
              "checked": true
            }
          ]
    },
    mutations: {
        allNoCheck(state){
          this.state.cartList.filter(item => {
            item.checked = false
          })
        },
        allCheck(state){
          this.state.cartList.filter(item => {
            item.checked = true
          })
        }
    },
    actions: {
      addToList(context,payLoad){
        return new Promise((resolve,reject) => {
          let oldProduct = null
          for(let item of context.state.cartList){
              if(item.iid == payLoad.iid){
                  oldProduct = item
              }
          }
          if(oldProduct){
              oldProduct.count = oldProduct.count + 1
             resolve('当前商品数量+1');
          }else {
              payLoad.count = 1
              payLoad.checked = true
              context.state.cartList.push(payLoad)
              resolve('添加到购物车');
              console.log(resolve);
          }
        })
      }
    }
})

export default store