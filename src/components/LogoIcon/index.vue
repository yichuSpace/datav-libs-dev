<template>
  <div class="icon-wrapper">
    <svg t="1596872665926" class="logo-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2994">
      <path :stroke="stroke" :stroke-width="strokeWidth" d="M31.29344 880.64v7.33184c0 5.69344 4.62848 10.32192 10.32192 10.32192h940.81024a10.32192 10.32192 0 0 0 10.32192-10.32192V880.64a10.32192 10.32192 0 0 0-10.32192-10.32192H41.61536a10.32192 10.32192 0 0 0-10.32192 10.32192z" class="logo-icon-path" fill="#4B7AB5" p-id="2995"></path>
      <path :stroke="stroke" :stroke-width="strokeWidth" d="M41.61536 898.2528h7.33184a10.32192 10.32192 0 0 0 10.32192-10.32192V136.06912a10.32192 10.32192 0 0 0-10.32192-10.32192h-7.33184a10.32192 10.32192 0 0 0-10.32192 10.32192v751.86176c0 5.69344 4.62848 10.32192 10.32192 10.32192z" class="logo-icon-path" fill="#4B7AB5" p-id="2996"></path>
      <path :stroke="stroke" :stroke-width="strokeWidth" d="M95.92832 755.42528a16.384 16.384 0 0 1-7.08608-31.17056l282.66496-134.92224 238.96064-406.89664a16.42496 16.42496 0 0 1 25.96864-2.99008l261.07904 274.14528a16.384 16.384 0 0 1-23.71584 22.56896l-246.08768-258.41664-230.48192 392.47872a16.30208 16.30208 0 0 1-7.04512 6.47168l-287.21152 137.09312a15.68768 15.68768 0 0 1-7.04512 1.6384z" class="logo-icon-path" fill="#346BAA" p-id="2997"></path>
      <path :stroke="stroke" :stroke-width="strokeWidth" d="M890.88 725.48352a16.1792 16.1792 0 0 1-11.14112-4.38272l-240.80384-223.8464-326.94272 43.78624a16.09728 16.09728 0 0 1-15.9744-7.41376L82.08384 199.63904a16.384 16.384 0 0 1 27.60704-17.69472l208.24064 325.2224 324.28032-43.4176a16.09728 16.09728 0 0 1 13.35296 4.25984l246.49728 229.13024a16.384 16.384 0 0 1-11.18208 28.34432z" class="logo-icon-path" fill="#64B064" p-id="2998"></path>
      <path :stroke="stroke" :stroke-width="strokeWidth" d="M392.92928 811.25376a16.34304 16.34304 0 0 1-13.27104-6.79936L84.7872 396.20608a16.42496 16.42496 0 0 1 26.58304-19.21024l289.30048 400.54784 246.04672-26.37824 277.504-251.98592a16.384 16.384 0 0 1 22.03648 24.24832L664.7808 779.0592a16.71168 16.71168 0 0 1-9.29792 4.17792l-260.83328 27.97568-1.72032 0.04096z" class="logo-icon-path" fill="#43A3D4" p-id="2999"></path>
      <path :stroke="stroke" :stroke-width="strokeWidth" d="M624.59904 190.79168m-19.78368 0a19.78368 19.78368 0 1 0 39.56736 0 19.78368 19.78368 0 1 0-39.56736 0Z" class="logo-icon-path" fill="#336297" p-id="3000"></path>
      <path :stroke="stroke" :stroke-width="strokeWidth" d="M624.59904 214.67136a23.92064 23.92064 0 1 1 0.04096-47.80032 23.92064 23.92064 0 0 1-0.04096 47.80032z m0-39.60832a15.72864 15.72864 0 1 0 0.08192 31.45728 15.72864 15.72864 0 0 0-0.08192-31.45728z" class="logo-icon-path" fill="#6A99C5" p-id="3001"></path>
      <path :stroke="stroke" :stroke-width="strokeWidth" d="M392.92928 794.86976m-19.78368 0a19.78368 19.78368 0 1 0 39.56736 0 19.78368 19.78368 0 1 0-39.56736 0Z" class="logo-icon-path" fill="#336297" p-id="3002"></path>
      <path :stroke="stroke" :stroke-width="strokeWidth" d="M392.92928 818.74944a23.92064 23.92064 0 1 1 0.04096-47.80032 23.92064 23.92064 0 0 1-0.04096 47.80032z m0-39.60832a15.72864 15.72864 0 1 0 0.08192 31.45728 15.72864 15.72864 0 0 0-0.08192-31.45728z" class="logo-icon-path" fill="#6A99C5" p-id="3003"></path>
    </svg>
  </div>
</template>
<script>
import {onMounted} from "vue"
  export default {
    name: 'LogoIcon',
    props: {
      strokeWidth: {
        type: [String, Number],
        default: 1
      },
      stroke: {
        type: String,
        default: '#000'
      }
    },
    setup() {
    onMounted(() => {
      const logoPath = document.getElementsByClassName('logo-icon-path')
      // logoPath.forEach(ele=>{
      //       //  console.log(ele.getTotalLength())

      // })
    })
  }
  }
</script>
<style lang="scss" scoped>
.logo-icon {
  width: 100%;
  height: 100%;
}
.logo-icon-path {
  fill: none;
  animation: logo-animation 2s linear infinite forwards;
}

@keyframes logo-animation {
  0% {
    stroke-dasharray: 2436;
    stroke-dashoffset: 2436;
  }
  50% {
    stroke-dasharray: 2436;
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dasharray: 2436;
    stroke-dashoffset: 0;
  }
}
</style>