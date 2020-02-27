<template>
    <Swiper v-if="topImage.length"  class="detailSwp">
        <SwiperItem v-for="(item,index) in topImage" :key="index">
            <img :src="item" alt="">
        </SwiperItem>
    </Swiper>
</template>

<script>

import {Swiper,SwiperItem} from '../../../components/common/swiper'

export default {
    name: 'detailSwiper',
    components: {
        Swiper,
        SwiperItem,
    },
    props: {
        topImage: {
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    .detailSwp {
        height: 300px;
    }
</style>