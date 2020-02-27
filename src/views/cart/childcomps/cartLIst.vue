<template>
    <div class="cartlist">
            <cartListItem 
                    v-for="(item,index) in cartLists" 
                    :key="index"
                    :product='item'>
            </cartListItem>
    </div>
</template>

<script>

import cartListItem from './cartListItem'

export default {
    name: 'cartList',
    components: {
        cartListItem
    },
    computed: {
        cartLists(){
            return this.$store.state.cartList
        }
    },
}
</script>

<style scoped>
    
</style>