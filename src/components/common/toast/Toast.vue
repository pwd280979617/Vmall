<template>
  <div v-show="isShow" class="toast">
      <div class="message">{{message}}</div>
  </div>
</template>

<script>
export default {
    name: 'toast',
    data() {
        return {
            message: '',
            isShow: false
        }
    },
    methods: {
        show(message,delay){
            this.isShow = true
            this.message = message
            setTimeout(() => {
                this.isShow = false
                this.message = ''
            },delay)
        }
    },
}
</script>
    
<style>
    .toast {
        position: fixed;
        padding: 8px 10px;
        top: 50%;
        right: 50%;
        transform: translate(50%,-50%);
        color: white;
        background-color: rgba(0,0,0,0.8);
        font-size: 20px;
        z-index: 99;
    }
</style>