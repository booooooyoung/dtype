<template>
    <section id="signIn_signUp">
    <div class="signIn_signUp_visual">
      <div>
        <img src="../assets/360hexastudio_logo_bg_circle.png" alt="360hexastudio_logo">
        <h2>오직 당신만을 위한 공간<br>지금 시작하세요</h2>
      </div>
      <div class="visual_img"></div>
    </div>
    <div class="signIn_signUp_cont">
        <div class="signIn" v-if="signIn_show == 1">
          <h2>Welcome to<img src="../assets/360xcon_logo.png" alt="360xcon_logo"></h2>
          <form>
            <label for="email">Email</label>
            <input type="text" id="email">
            <label for="password">Password</label>
            <input type="password" id="password">
            <div class="btn_box">
              <NuxtLink class="btn_n" :to="{ name: 'Account' }">login
            </NuxtLink>
              <button class="btn_p" @click="signIn_show=0,signUp_show=1">Sign Up</button>
            </div>
          </form>
        </div>
        <div class="signUp" v-if="signIn_show == 0">
          <h2>Sign Up</h2>
          <p class="sub_txt">Enter your details to create your account</p>
          <form>
            <label for="fullName">Full name</label>
            <input type="text" id="fullName" placeholder="Full name">
            <label for="email">Email</label>
            <input type="text" id="email" placeholder="Email">
            <label for="phoneNumber">Phone number</label>
            <input type="text" id="phoneNumber" placeholder="Phone number">
            <label for="companyName">Company name</label>
            <input type="text" id="companyName" placeholder="Company name">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Password">
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" placeholder="Confirm Password">
            <div class="chb_box">
              <input type="checkbox" id="checkBox">
              <label for="checkBox">이용약관 동의</label>
            </div>
            <div class="btn_box">
              <button class="btn_n">Save</button>
              <button class="btn_p">Cancel</button>
            </div>
          </form>
        </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'logIn',
   data() {
    return {
      signIn_show: 1,
      signUp_show: 0,
    }
  },
}
</script>
<style>
  #signIn_signUp{
    width: 100%;
  }
  .signIn_signUp_visual{
    width: 400px;
    height: 100vh;
    background-color: var(--orange-02);
    position: fixed;
    z-index: -99999;
    display: flex;
    flex-direction: column;
  }
  .signIn_signUp_visual>div{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .signIn_signUp_visual img{
    width: 70px;
    height: 70px;
    margin: 20px;
  }
  .signIn_signUp_visual h2{
    color: white;
    text-align: center;
  }
  .signIn_signUp_visual .visual_img{
    width: 100%;
    height: 400px;
    background-image: url(../assets/login_image.png);
    background-size: cover;
  }
  .signIn_signUp_cont{
    width: calc(100vw - 400px);
    height: 100vh;
    position: absolute;
    right: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .signIn{
    width: 100%;
    max-width: 280px;
    padding: 20px;
    box-sizing: border-box;
  }
  .signIn h2{
    font-size: 1.3rem;
    font-weight: 600;
    display: flex;
    justify-content:left;
    margin: 0 0 14px;
  }
  .signIn h2 img{
    height: 20px;
    margin: 2px 0 0 5px;
  }
  .signIn .btn_box{
    display: flex;
    justify-content: left;
  }
  .signUp{
    text-align: left;margin-top: 50px;
  }
  .signUp .sub_txt{
    color: var(--light-gray);
  }
  .signUp form{
    margin-top: 50px;
  }
</style>
