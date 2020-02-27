<template>
    <div v-if="Object.keys(goods).length !== 0">
        <div class="goodsTitle">{{goods.title}}</div>
        <div class="priceArea">
            <div class="goodsPrice">{{goods.price}}</div>
            <div class="goodsOldPrice">{{goods.oldPrice}}</div>
            <div class="goodsDiscDesc">{{goods.discountDesc}}</div>
        </div>
        <div class="goodsColums">
            <div v-for="(item,index) in goods.columns" :key="index" class="goodsColumsItem">{{item}}</div>
        </div>
        <!-- <div class="serviceArea" v-if="goods.services.services.length !== 0">
            <div class="serviceItem">
                <div><img :src="goods.services.services[1].icon" alt=""></div>
                <div>{{goods.services.services[1].name}}</div>
            </div>
            <div class="serviceItem">
                <div><img :src="goods.services.services[2].icon" alt=""></div>
                <div>{{goods.services.services[2].name}}</div>
            </div>
            <div class="serviceItem">
                <div><img :src="goods.services.services[3].icon" alt=""></div>
                <div>{{goods.services.services[3].name}}</div>
            </div> -->
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'detailGoods',
    props: {
        goods: {
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
    .goodsTitle {
        margin-top: 20px;
        color: rgb(42,42,42)
    }

    .priceArea {
        display: flex;
    }

    .goodsPrice {
        color: rgb(126, 19, 19);
        margin-top: 20px;
        font-size: 20px;
    }

    .goodsOldPrice {
        text-decoration-line: line-through;
        margin: 25px 5px 0px 5px;
    }

    .goodsDiscDesc {
        margin-top: 20px;
        padding: 2px 4px;
        height: 20px;
        border-radius: 5px;
        background-color: var(--color-tint);
        color: white;
    }

    .goodsColums {
        margin-top: 20px;
        display: flex;
        
        
    }

    .goodsColumsItem {
        flex: 1;
    }

    .serviceArea {
        display: flex;
        margin-top: 20px;
    }

    .serviceArea img {
        flex-shrink: 0;
        height: 15px;
        width: 15px;
    }

    .serviceItem {
        flex: 1;
        display: flex;
    }
</style>