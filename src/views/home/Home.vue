<template>
    <div id="home">
        <navbar class="navbar"><div slot="center" class="center">购物街</div></navbar>
        <tabControl :tabCtr="['流行','新品','热卖']" 
                        @tabClick="tabClick"
                        ref="tabControl1" 
                        class="tab-control"
                        v-show="isTabCtrTop"></tabControl>
        <Bscroll class="bscroll" 
                ref="Bscroll" 
                :probeNum='3'
                :pullUpLoad= true
                @scroll='scrollPosition'
                @pullingUp='loadMore' >
            <homeSwiper :banner='banner' class="homeSwiper"></homeSwiper>
            <recommendView :recommend='recommend'></recommendView>
            <featureView></featureView>
            <tabControl :tabCtr="['流行','新品','热卖']" 
                        @tabClick="tabClick"
                        ref="tabControl2"></tabControl>
            <goodsList :goods="goods[currIndex].list"></goodsList>
        </Bscroll>
        <backTop @click.native="topClick" v-show="isBackTopShow"></backTop>
    </div>
</template>

<script>

import homeSwiper from './childcomps/homeSwiper'
import recommendView from './childcomps/recommendView'
import featureView from './childcomps/featureView'

import navbar from '../../components/common/navbar/navbar'
import tabControl from '../../components/content/tabControl/tabControl'
import goodsList from '../../components/content/goods/goodsList'
import Bscroll from '../../components/common/Bscroll/BScroll'
import backTop from '../../components/content/backTop/backTop'


import {getHomeMultidata, getHomeGoods} from '../../network/home'

export default {
    name: 'home',
    components: {
        navbar,
        Bscroll,
        homeSwiper,
        recommendView,
        featureView,
        tabControl,
        goodsList,
        backTop
    },
    data(){
        return{
            banner: [],
            recommend: [],
            goods: {
                'pop': {page: 0, list: []},
                'new': {page: 0, list: []},
                'sell': {page: 0, list: []},
            },
            currIndex: 'pop',
            isBackTopShow: false,
            tabOffsetTop: 0,
            isTabCtrTop: false,
        }
    },
    created() {
        this.getHomeMultidata(),
        this.getHomeGoods('pop'),
        this.getHomeGoods('new'),
        this.getHomeGoods('sell')

       
    },
    mounted() {
        this.$bus.$on('itemImgLoad',() => {
            this.$refs.Bscroll.scroll.refresh()
        })
        //  const refresh = this.debounce(this.$refs.Bscroll.scroll.refresh,50)
        //  this.$bus.$on('itemImgLoad', () => { 
        //     refresh()
        // })
    },
    updated() {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
        
    },
    methods: {
        //节流函数
        // debounce(func, delay) {
        //     let timer = null;
        //     return function (...arg) {
        //         if (timer) clearTimeout(timer);
        //         timer = setTimeout(() => {
        //             func.apply(this, arg)
        //         }, delay);
        //     }
        // },
        //事件监听方法
        tabClick(index){
            switch(index){
                case 0:
                    this.currIndex = 'pop'
                    break
                case 1:
                    this.currIndex = 'new'
                    break
                case 2:
                    this.currIndex = 'sell'
                    break
            }     
            this.$refs.tabControl1.curIndex = index
            this.$refs.tabControl2.curIndex = index
        },

        topClick(){
            this.$refs.Bscroll.scroll.scrollTo(0,0,300)
        },

        scrollPosition(position){
            this.isBackTopShow = -position.y > 1000;
            this.isTabCtrTop = -position.y > this.tabOffsetTop
        },

        loadMore(){
            this.getHomeGoods(this.currIndex)
            
        },
        //网络请求方法
        getHomeMultidata(){
            getHomeMultidata().then(res => {
                this.banner = res.data.banner.list
                this.recommend = res.data.recommend.list
            })
        },
        getHomeGoods(type) {
            const page = this.goods[type].page + 1
             getHomeGoods(type,page).then(res => {
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page += 1

                this.$refs.Bscroll.scroll.finishPullUp()
            })
        }
    },

}
</script>

<style scoped>
    #home {
        height: 100vh;
        position: relative;
        
    }

    .navbar {
        background-color: var(--color-tint);
        
        /* position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9; */
    }

    .bscroll {
        overflow:hidden;

        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0; 
    }

    .tab-control {
        position: relative;
        z-index: 9;
        background-color: white;
    }

    .tabCtrTop{
        position: fixed;
        top: 44px;
        left: 0;
        right: 0;
    }

    .center {
        color: white;
        text-align: center;
    }

</style>