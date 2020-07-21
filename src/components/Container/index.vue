<template>
  <div id="container" :ref="refName">
    <slot></slot>
  </div>
</template>
<script>
import { ref, getCurrentInstance, onMounted, onUnmounted, nextTick } from 'vue'

export default {
  name:'Container',
  props: {
    options: Object
  },
  setup(ctx){
    const refName = 'container'
    const width=ref(0)
    const height=ref(0)
    const originalWidth = ref(0)
    const originalHeight = ref(0)
    const ready = ref(false)
    let context, dom, observer
    
    // 初始化数据
    const initSize=()=>{
      return new Promise((resolve) => {
        nextTick(() => {
          dom = context.$refs[refName]
          console.log(dom);
          // 获取大屏的真实尺寸
          if (ctx.options && ctx.options.width && ctx.options.height) {
            width.value = ctx.options.width
            height.value = ctx.options.height
          } else {
            width.value = dom.clientWidth
            height.value = dom.clientHeight
          }
          // 获取画布尺寸
          if (!originalWidth.value || !originalHeight.value) {
            originalWidth.value = window.screen.width
            originalHeight.value = window.screen.height
          }
          console.log(width.value, height.value, originalWidth.value, originalHeight.value)
          resolve()
        })
      })
    }

    // 获取屏幕的实际像素
    const updateSize = () => {
     return new Promise(resolve=>{
      if (width.value && height.value) {
        dom.style.width = `${width.value}px`
        dom.style.height = `${height.value}px`
      } else {
        dom.style.width = `${originalWidth.value}px`
        dom.style.height = `${originalHeight.value}px`
      }
      resolve()
     })
    }

    const updateScale = () => {
      // 获取真实的视口尺寸
      const currentWidth = document.body.clientWidth
      const currentHeight = document.body.clientHeight
      // 获取大屏最终的宽高
      const realWidth = width.value || originalWidth.value
      const realHeight = height.value || originalHeight.value
      const widthScale = currentWidth / realWidth //像素比
      const heightScale = currentHeight / realHeight //像素比
      dom && (dom.style.transform = `scale(${widthScale}, ${heightScale})`)
    }

    const onResize = async (e) => {
      await initSize()
      updateScale()
    }

    onMounted(async()=>{
      ready.value = false
      context = getCurrentInstance().ctx
      await initSize()
      await updateSize()
      window.addEventListener('resize', onResize())
    })

    return {
      refName,
      ready
    }
  }
}
</script>
<style lang="scss" scoped>
#container {
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  transform-origin: left top;
  background: pink;
  z-index: 999;
}
</style>