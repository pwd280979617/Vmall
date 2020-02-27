<template>
    <div id="cart">
        <navBar class="cartNav">
            <div slot="center">购物车({{cartListLength}})</div>
        </navBar>
        <Bscroll class="bscroll">
            <cartList class="cartList"></cartList>
        </Bscroll>
        <cartComputed class="cartComputed"></cartComputed>
    </div>
</template>

<script>

import navBar from '../../components/common/navbar/navbar'
import cartList from './childcomps/cartLIst'
import cartComputed from './childcomps/cartComputed'

import Bscroll from '../../components/common/Bscroll/BScroll'

export default {
    name: 'cart',
    components: {
        navBar,
        cartList,
        cartComputed,
        Bscroll
    },
    computed: {
        cartListLength(){
           return this.$store.state.cartList.length
           
        }
    },
}
</script>

<style scoped>
    #cart {
        height: 100vh;
        
        position: relative;
    }

    .cartNav {
        background-color: var(--color-tint);
        color: white;
        text-align: center;
        font-size: 18px;
    }


    .bscroll {
        overflow:hidden;
        position: absolute;
        top: 44px;
        bottom: 89px;
        left: 0;
        right: 0; 
    }

    .cartComputed {
        position: absolute;
        display: flex;
        height: 40px;
        bottom: 50px;
        right: 0px;
        left: 0px;
        background-color: #eeeeee;

    }
</style>