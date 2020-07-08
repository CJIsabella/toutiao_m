<template>
  <div>
    <van-nav-bar title="登录" class="navbar-bgc">
      <van-icon name="cross" slot="left" @click="$router.back()" />
    </van-nav-bar>
    <van-form @submit="onSubmit" ref="loginFormRef">
      <van-field
        type="number"
        maxlength="11"
        v-model="user.mobile"
        name="mobile"
        placeholder="请输入手机号"
        :rules="formRules.mobile"
      >
        <i slot="left-icon" class="toutiao toutiao-shouji login-icon-size"></i>
      </van-field>
      <van-field
        type="number"
        maxlength="6"
        v-model="user.code"
        name="code"
        placeholder="请输入验证码"
        :rules="formRules.code"
      >
        <i slot="left-icon" class="toutiao toutiao-yanzhengma login-icon-size"></i>
        <template #button>
          <van-count-down
            v-if="isCountDownShow"
            :time="1000*5"
            format=" ss s"
            @finish="isCountDownShow=false"
          />
          <van-button v-else size="small" type="primary" class="yzmBtn" @click="sendyzm">发送验证码</van-button>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      },
      formRules: {
        mobile: [
          { required: true, message: '请填写验证码' },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: '请输入正确的手机号'
          }
        ],
        code: [
          { required: true, message: '请填写验证码' },
          { pattern: /^\d{6}$/, message: '请输入正确的手机号' }
        ]
      },
      isCountDownShow: false
    }
  },
  methods: {
    // 登录实现
    async onSubmit() {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true, // 后面背景不可点
        duration: 0 // 为0会持续加载不会停
      })
      try {
        const res = await this.$api.user.login(this.user)
        // 全局引入的toast轻提示会自动挂载在Vue的prototype上
        this.$toast.success('登录成功！')
        console.log('user-----', res)
        this.$store.commit('setUser', res.data.data)
      } catch (err) {
        console.log(err)
        if (err.response.status === 400) {
          this.$toast.fail('手机号和验证码验证错误！')
        } else {
          this.$toast.fail('登录失败！')
        }
      }
    },

    // 获取验证码实现
    async sendyzm() {
      // 1、验证手机号
      try {
        await this.$refs.loginFormRef.validate('mobile')
      } catch (err) {
        this.$toast.fail('手机验证失败！')
      }
      // 2、验证通过显示倒计时
      this.isCountDownShow = true
      // 3、发送获取验证码请求（每个手机号每分钟只能访问一次）
      try {
        await this.$api.user.sendyzm(this.user.mobile)
        this.$toast('发送成功')
      } catch (err) {
        console.log(err)
        // 发送失败后也要将倒计时隐藏
        this.isCountDownShow = false
        if (err.response.status === 429) {
          return this.$toast.fail('发送太频繁了，请稍后再试！')
        }
        return this.$toast('获取验证码失败！')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-icon-size {
  font-size: 50px;
}
.yzmBtn {
  background-color: #ccc;
  border: none;
  border-radius: 10px;
  color: #666;
}
</style>
