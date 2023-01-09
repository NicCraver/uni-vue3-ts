/*
 * @Author: Nic
 * @Date: 2022-12-28 21:51:46
 * @LastEditTime: 2023-01-07 21:47:40
 * @LastEditors: Nic
 * @Description:
 * @FilePath: /uni-vue3-ts/vite.config.ts
 */
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path from 'path'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    // https://github.com/antfu/unocss
    Unocss(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/ // .vue
      ],
      imports: ['vue', 'uni-app'],
      dts: 'typings/auto-imports.d.ts'
    })
  ],
  server: {
    // port: 8080,
    host: '0.0.0.0',
    proxy: {
      '/api/': {
        target:
          'https://service-rbji0bev-1256505457.cd.apigw.tencentcs.com/release',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, '')
      },
      '/api-prod/': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api-prod/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components')
    }
  },
  css: {
    // 配置`scss`和`less`全局变量
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/vars/_base.scss";'
      },
      less: {
        additionalData: '@import "@/styles/vars/_base.less";'
      }
    }
  }
})
