<!--
 * @Author: Nic
 * @Date: 2023-01-08 09:38:08
 * @LastEditTime: 2023-01-08 16:37:48
 * @LastEditors: Nic
 * @Description: 
 * @FilePath: /uni-vue3-ts/src/pages/login/index.vue
-->
<template>
  <div>
    <u-button type="primary" @click="onLogin">Login</u-button>
    <button open-type="getUserInfo" @getuserinfo="login">登录</button>
    {{ userInfo }}
    <unicloud-db
      v-slot="{ data, loading, error, options }"
      collection="pro-user"
    >
      {{ data }}
    </unicloud-db>
  </div>
</template>

<script lang="ts" setup>
const userInfo = ref({})
const onLogin = async () => {
  const co1 = uniCloud.importObject('co1')
  const res = await co1.say()
  console.log('res', res)
}
const login = () => {
  uni.showModal({
    title: '温馨提示',
    content: '亲，授权微信登录后才能正常使用小程序功能',
    success(res) {
      if (res.confirm) {
        uni.getUserProfile({
          desc: '注册用户信息使用',
          lang: 'zh_CN',
          success: (res) => {
            console.log('res', res)
            uni.login({
              provider: 'weixin',
              success(loginRes) {
                console.log('loginRes.authResult', loginRes)
                // 在这个地方普通开发中就应该去调用后端给的api进行登录操作了
                // 现在这个地方我们需要换成云函数进行相关操作
              }
            })
          }
        })
      } else {
        uni.showToast({
          title: '您取消了授权',
          duration: 2000
        })
      }
    }
  })
}
</script>

<style lang="scss" scoped></style>
