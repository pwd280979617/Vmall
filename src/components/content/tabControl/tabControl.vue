<template>
    <div class="tabControl">
         <div v-for="(item,index) in tabCtr" 
            :key="index" 
            class="tabItem"
            :class="{active:curIndex==index}"
            @click="tabClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tabControl',
    props: {
        tabCtr:{
            type: Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            curIndex: 0
        }
    },
    methods: {
        tabClick(index){
            this.curIndex = index
            this.$emit('tabClick',index)
        }
    },
}
</script>

<style>
    .tabControl {
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
    }

    .tabItem {
        flex: 1;
    }

    .active {
        color: var(--color-high-text);
        border-bottom: 2px solid #1296db
    }
</style>