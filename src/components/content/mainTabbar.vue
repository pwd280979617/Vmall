<template>
  <div id="mainTabbar">
    <tabbar>
      <tabbarItem path='/home'>
        <img slot="tabbarIcon" src="../../assets/img/tabbar/home/home.svg" alt="">
        <img slot="tabbarIconAct" src="../../assets/img/tabbar/home/home1.svg" alt="">
        <div slot="tabbarText">首页</div>
      </tabbarItem>
      <tabbarItem path='/category'>
        <img slot="tabbarIcon" src="../../assets/img/tabbar/category/category.svg" alt="">
        <img slot="tabbarIconAct" src="../../assets/img/tabbar/category/category1.svg" alt="">
        <div slot="tabbarText">品类</div></tabbarItem>
      <tabbarItem path='/cart'>
        <img slot="tabbarIcon" src="../../assets/img/tabbar/cart/cart.svg" alt="">
        <img slot="tabbarIconAct" src="../../assets/img/tabbar/cart/cart1.svg" alt="">
        <div slot="tabbarText">购物车</div></tabbarItem>
      <tabbarItem path='/profile'>
        <img slot="tabbarIcon" src="../../assets/img/tabbar/profile/profile.svg" alt="">
        <img slot="tabbarIconAct" src="../../assets/img/tabbar/profile/profile1.svg" alt="">
        <div slot="tabbarText">我的</div></tabbarItem>
    </tabbar>
  </div>
</template>

<script>

import tabbar from '../common/tabbar/tabbar.vue'
import tabbarItem from '../common/tabbar/tabbarItem.vue'

export default {
  name: 'mainTabbar',
  components: {
    tabbar,
    tabbarItem
  }
}
</script>

<style>
  @import url('../../assets/css/base.css');
</style>
