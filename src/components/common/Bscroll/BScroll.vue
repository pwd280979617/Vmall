<template>
      <div class="wrapper" ref="wrap">
          <div class="content">
              <slot></slot>
          </div>
  </div>
</template>

<script>

import Bscroll from 'better-scroll'

export default {
    name: 'BScroll',
    data() {
        return {
            scroll: null
        }
    },
    props: {
        probeNum: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        this.scroll = new Bscroll (this.$refs.wrap,{
            click: true,
            probeType: this.probeNum,
            pullUpLoad: this.pullUpLoad,
        })

        this.scroll.on('scroll',(position) => {
            this.$emit('scroll',position)
            // console.log(position);
        })

        this.scroll.on('pullingUp',() => {
            this.$emit('pullingUp')
        })
    },
    
}
</script>

<style scope>

</style>