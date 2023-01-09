<!--
 * @Author: Nic
 * @Date: 2022-12-28 21:51:46
 * @LastEditTime: 2023-01-07 22:00:26
 * @LastEditors: Nic
 * @Description: 
 * @FilePath: /uni-vue3-ts/src/App.vue
-->
<script setup lang="ts">
onLaunch(() => {
  console.log('App Launch222')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss">
@import 'vk-uview-ui/index.scss';
</style>
