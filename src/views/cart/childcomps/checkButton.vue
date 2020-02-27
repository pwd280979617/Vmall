<template>
    <div>
    <div class="checkButton" :class="{'selector-active': checked}">
        <img src="../../../assets/img/cart/tick.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
    name: 'checkButton',
    props: {
        checked: {
            type: Boolean,
        }
    },
}
</script>

<style scoped>
    .checkButton {
        position: relative;
        margin: 10px;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        border: 2px solid #aaa;
    }

     .selector-active {
        background-color: #ff8198;
        border-color: #ff8198;
    }
</style>