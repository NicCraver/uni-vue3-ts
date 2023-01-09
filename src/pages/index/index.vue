<!--
 * @Author: Nic
 * @Date: 2022-12-28 21:51:46
 * @LastEditTime: 2023-01-08 09:38:40
 * @LastEditors: Nic
 * @Description: 
 * @FilePath: /uni-vue3-ts/src/pages/index/index.vue
-->
<template>
  <view class="index-page">
    <Login />
    <Hello />
    <UnoCss />
    <text class="h2"> 查看其它页面示例↓ </text>
    <view>
      <navigator v-for="(v, idx) in pages" :key="idx" :url="v.url">{{
        v.title
      }}</navigator>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Login from '@/pages/login/index.vue'
import Hello from '@/components/hello/index.vue'
import UnoCss from '@/components/unocss/index.vue'

const pages = reactive([
  {
    title: 'Pinia Demo',
    url: '/pages/pinia/index'
  },
  {
    title: 'Axios Demo',
    url: '/pages/axios/index'
  },
  {
    title: 'uView Demo',
    url: '/pages/uview/index'
  },
  {
    title: 'UnoCSS Demo',
    url: '/pages/unocss/index'
  }
])
</script>

<style scoped>
.index-page {
  font-style: normal;
  text-align: center;
}
.h2 {
  color: green;
  font-size: 50rpx;
}
navigator {
  color: #1e80ff;
}
</style>
