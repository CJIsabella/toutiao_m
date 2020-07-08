<template>
  <div class="my-container">
    <div class="header">
      <div class="no-login">
        <img src="~@/assets/mobile.png" class="img" />
        <div class="header-text">登录/注册</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.my-container {
  .header {
    width: 100%;
    height: 350px;
    background: url('~@/assets/banner.png');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .no-login {
      width: 180px;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .img {
        width: 136px;
        height: 136px;
      }
      .header-text {
        margin-top: 15px;
        font-size: 30px;
        color: #fff;
      }
    }
  }
}
</style>
