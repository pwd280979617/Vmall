<template>
  <div id="app">
    <keep-alive include="Detail"><router-view></router-view></keep-alive>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>

import mainTabbar from './components/content/mainTabbar.vue'

export default {
  name: 'app',
  components: {
    mainTabbar
  }
}
</script>

<style>
  @import url('./assets/css/base.css');
</style>
