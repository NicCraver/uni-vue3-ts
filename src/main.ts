/*
 * @Author: Nic
 * @Date: 2022-12-28 21:51:46
 * @LastEditTime: 2022-12-29 09:23:34
 * @LastEditors: Nic
 * @Description:
 * @FilePath: /uni-vue3-ts/src/main.ts
 */
import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
// @ts-expect-error
import uView from 'vk-uview-ui'

import App from './App.vue'

// unocss
import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia.createPinia())
  app.use(uView)
  return {
    app,
    // uni-app 官方文档示例 https://zh.uniapp.dcloud.io/tutorial/vue3-pinia.html#%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86-pinia
    Pinia // 此处必须将 Pinia 返回
  }
}
