<template>
    <div>
        <div class="shopLogoName">
            <img :src="shopInfo.logo" alt="" class="shopLogo">
            <div class='shopName'>{{shopInfo.name}}</div>
        </div>
        <div class="sellScore">
            <div class="sellGoods">
                <p class="sellNum">{{numberFormat(shopInfo.sell)}}万</p>
                <p class="sellNum">总销量</p>
            </div>
            <div class="sellGoods">
                <div class="sellNum">{{shopInfo.cGoods}}</div>
                <div class="sellNum">全部宝贝</div>
            </div>
            <div class="score">
                <tr v-for="(item,index) in shopInfo.score" :key="index">
                    <td class="scoreName">{{item.name}}</td>
                    <td class="scoreNum" :class="{highNum:item.isBetter}">{{item.score}}</td>
                    <td><span class="scoreWord" :class="{highWord:item.isBetter}">{{item.isBetter?'高':'低'}}</span></td>
                </tr>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'detailShopInfo',
    props: {
        shopInfo: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    methods: {
        numberFormat(value) {
            var param = {};
            var k = 10000,
                sizes = ['', '万', '亿', '万亿'],
                i;
                if(value < k){
                    param.value =value
                    param.unit=''
                }else{
                    i = Math.floor(Math.log(value) / Math.log(k)); 
              
                    param.value = ((value / Math.pow(k, i))).toFixed(2);
                    param.unit = sizes[i];
                    }
            return param.value;
        }
    },
}
</script>

<style scoped>
    .shopLogoName {
        margin-top: 20px;
        height: 60px;
        display: flex;
        align-items: center;
    }

    .shopLogo {
        height: 50px;
        width: 50px;
        margin: 0 10px;
    }

    .shopName {
        margin: auto 0;
    }

    .sellScore {
        display: flex;
        margin: 20px 5px 0px 5px;
        height: 80px;
        width: 100%;
        font-size: 14px;
    }

    .sellGoods {
        width: 28%;
        padding: auto auto;
    }

    .sellNum {
        margin-top: 10px;
        margin-bottom: 10px;
        width: 100%;
        text-align: center;
    }

    .scoreName {
        padding: 5px 5px;
    }

    .scoreNum {
        padding: 5px 5px;
        color: green;
    }

    .scoreWord {
        background-color: green;
        color: white;
    }

    .highNum {
        color: red;
    }

    .highWord {
        background-color: red;
    }
</style>