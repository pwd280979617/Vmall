<template>
    <div class="recommend-view">
        <div v-for="item in recommend" :key="item.index" class="recommendItem">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'recommendView',
    props: {
        recommend: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
    .recommend-view {
        display: flex;
        width: 100%;
        text-align: center;
        padding: 10px 0;
        border-bottom: 10px solid #eee
    }

    .recommendItem {
        flex: 1;
        font-size: 12px
    }

    .recommendItem img {
        width: 80px;
        height: 80px;
    }
</style>