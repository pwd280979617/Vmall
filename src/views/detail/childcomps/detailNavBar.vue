<template>
    <div>
        <navbar class="navbar">
            <div slot="left" class="back" @click="leftBack">
                <img src="../../../assets/img/common/back.svg" alt="">
            </div>
            <div slot="center" class="title">
                <div v-for="(item,index) in title" 
                    :key="index"
                    class="titleItem"
                    @click="titleClick(index)"
                    :class="{clickTitle:currIndex == index}">{{item}}</div>
            </div>
        </navbar>
    </div>
</template>

<script>

import navbar from '../../../components/common/navbar/navbar'

export default {
    name: 'detailNavBar',
    components: {
        navbar,
    },
    data() {
        return {
            title: ['商品','参数','评价','推荐'],
            currIndex: 0,
        }
    },
    methods: {
        titleClick(index){
            this.currIndex = index
            this.$emit('titleClick',index)
        },
        leftBack(){
            this.$router.back()
        }
    },
}
</script>

<style scoped>
    .navbar {
        background-color: white;
    }

    .title {
        display: flex;
        text-align: center;
    }

    .titleItem {
        flex: 1;
        font-size: 13px;
        color: gray;
    }

    .clickTitle {
        color: var(--color-high-text)
    }

    .back {
        text-align: center;
        margin-top: 5px;
    }
</style>