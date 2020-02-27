<template>
    <div id="detail">
        <detailNavBar class="detailNavbar" @titleClick='titleClick' ref="detailNavBar"></detailNavBar>
        <Bscroll class="bscroll" 
                ref="Bscroll" 
                :probeNum='3'
                @scroll='scrollPosition'>
            <detailSwiper :top-image='topImage'></detailSwiper>
            <detailGoods :goods='goods' ref="detailGoods"></detailGoods>
            <detailShopInfo :shopInfo='shopInfo' ref="detailShopInfo"></detailShopInfo>
            <goodsList :goods="recommend" ref="goodsList"></goodsList>
        </Bscroll>
        <backTop @click.native="topClick" v-show="isBackTopShow"></backTop>
        <detailBottomBar @addCart='addToCart'></detailBottomBar>
    </div>
</template>

<script>

import detailNavBar from './childcomps/detailNavBar'
import detailSwiper from './childcomps/detailSwiper'
import detailGoods from './childcomps/detailGoods'
import detailShopInfo from './childcomps/detailShopInfo'
import detailBottomBar from './childcomps/detailBottomBar';

import {getDetail,getRecommend,Goods,shopInfo} from '../../network/detail'
import Bscroll from '../../components/common/Bscroll/BScroll'
import goodsList from '../../components/content/goods/goodsList'
import backTop from '../../components/content/backTop/backTop'


export default {
    name: 'Detail',
    components: {
        detailNavBar,
        detailSwiper,
        detailGoods,
        detailShopInfo,
        Bscroll,
        goodsList,
        detailBottomBar,
        backTop,
    },
    data() {
        return {
            iid: null,
            topImage: [],
            goods: {},
            shopInfo: {},
            recommend: [],
            titleTopY: [],
            currIndex: 0,
            isBackTopShow: false,
        }
    },
    methods: {
        titleClick(index){
            this.$refs.Bscroll.scroll.scrollTo(0,-this.titleTopY[index],300)
        },
        scrollPosition(position){
            this.isBackTopShow = -position.y > 1000;
            // console.log(position);
            const positionY = -position.y
            const length = this.titleTopY.length
            for(let i = 0; i < length; i++ ){
                if( this.currIndex !== i && ((i < length-1 && positionY >= this.titleTopY[i] && positionY < this.titleTopY[i+1])||(i == length-1 && positionY >= this.titleTopY[length-1]))){
                    this.currIndex = i
                    this.$refs.detailNavBar.currIndex = this.currIndex
                }
            }
        },
        topClick(){
            this.$refs.Bscroll.scroll.scrollTo(0,0,300)
        },
        addToCart(){
            const product = {}
                product.image = this.topImage[0];
                product.title = this.goods.title;
                product.desc = this.goods.discountDesc;
                product.price = this.goods.lowNowPrice;
                product.iid = this.iid;
            this.$store.dispatch('addToList',product).then(res =>{
                console.log(res);
                this.$toast.show(res,2000)
            })
        }
    },
    created() {
        getRecommend().then(res => {
            console.log(res);
            this.recommend = res.data.list
        })
    },
    activated() {
        this.iid = this.$route.params.iid

        getDetail(this.iid).then(res => {
            const data = res.result
            console.log(res)
            this.topImage = res.result.itemInfo.topImages
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo)
            this.shopInfo = new shopInfo(data.shopInfo)
        })

    },
    updated() {
        this.titleTopY = []
        this.titleTopY.push(0)
        this.titleTopY.push(this.$refs.detailGoods.$el.offsetTop)
        this.titleTopY.push(this.$refs.detailShopInfo.$el.offsetTop)
        this.titleTopY.push(this.$refs.goodsList.$el.offsetTop)
    },
}
</script>

<style scoped>
    #detail {
        height: 100vh;
        position: relative;
    }


    .bscroll {
        overflow:hidden;
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0; 
    }
</style>