<!--
 * @Author: Nic
 * @Date: 2023-01-08 09:38:08
 * @LastEditTime: 2023-01-09 22:34:07
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
  uni.login({
    provider: 'weixin',
    success(loginRes) {
      console.log('loginRes', loginRes)
      const { code } = loginRes
      uniCloud.callFunction({
        name: 'login',
        data: {
          code
        },
        success: (res) => {
          console.log('res22222222', res)
          console.log(
            'uniCloud.getCurrentUserInfo()',
            uniCloud.getCurrentUserInfo()
          )
        },
        secretType: 'none'
      })
    }
  })
}
</script>

<style lang="scss" scoped></style>
