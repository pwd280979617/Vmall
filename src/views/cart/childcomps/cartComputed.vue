<template>
  <div class="cartComputed">
      <div class="allButton">
        <checkButton :checked="isChecked" @click.native="allCheck()"></checkButton>
        <span>全部</span>
      </div>
      <div class="totalPrice">
        总金额:￥{{totalPrice}}
      </div>
      <div class="pay">
        去结算（{{itemLength}}）
      </div>
  </div>
</template>

<script>

import checkButton from './checkButton'

export default {
    name: 'cartComputed',
    components: {
        checkButton,
    },
    computed: {
        totalPrice(){
            return this.$store.state.cartList.filter(item => {
                return item.checked
            }).reduce((preValue,item) => {
                return preValue + item.price*item.count
            },0)
        },
        itemLength(){
            return this.$store.state.cartList.filter(item => item.checked).length
        },
        isChecked(){
            if(this.$store.state.cartList.length == 0){return false}
            return this.$store.state.cartList.filter(item => item.checked).length == this.$store.state.cartList.length
        }
    },
    methods: {
        allCheck(){
            if(this.$store.state.cartList.filter(item => item.checked).length == this.$store.state.cartList.length){
                this.$store.commit('allNoCheck')
            }else{
                this.$store.commit('allCheck')
            }
        }
    },
}
</script>

<style>
    .cartComputed {
        position: relative;
        display: flex;
        height: 40px;
        bottom: 49px;
        right: 0px;
        left: 0px;
        background-color: #eeeeee;

    }

    .allButton {
        display: flex;
        width: 80px;
        line-height: 20px;
        align-items: center;
    }

    .totalPrice {
        flex: 1;
        line-height: 40px;
    }

    .pay {
        width: 120px;
        line-height: 40px;
        text-align: center;
        background-color: var(--color-tint);
        color: #eeeeee
    }
</style>