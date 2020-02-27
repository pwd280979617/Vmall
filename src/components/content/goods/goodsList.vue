<template>
    <div class="goods">
        <goodsItem v-for="item in goods" :key="item.index" :listItem='item'></goodsItem>
    </div>
</template>

<script>

import goodsItem from './goodsItem'

export default {
    name: 'goodsList',
    components: {
        goodsItem,
    },
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
    .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }
</style>