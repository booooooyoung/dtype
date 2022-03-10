<template>
  <div>
    <p class="info_title">EDIT</p>
    <ul class="info_cont_box">
        <li>
          <b-navbar-dropdown label="#01 ~">
              <b-navbar-item href="#00">
                    #00
                </b-navbar-item>
              <b-navbar-item href="#01">
                    #01
                </b-navbar-item>
                <b-navbar-item href="#02">
                    #02
                </b-navbar-item>
                <b-navbar-item href="#03">
                    #03
                </b-navbar-item>
                <b-navbar-item href="#04">
                    #04
                </b-navbar-item>
                <b-navbar-item href="#05">
                    #05
                </b-navbar-item>
                <b-navbar-item href="#06">
                    #06
                </b-navbar-item>
                <b-navbar-item href="#07">
                    #07
                </b-navbar-item>
                <b-navbar-item href="#08">
                    #08
                </b-navbar-item>
                <b-navbar-item href="#09">
                    #09
                </b-navbar-item>
                <b-navbar-item href="#10">
                    #10
                </b-navbar-item>
          </b-navbar-dropdown>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'InfoEdit',
  
}
</script>
<style scoped>
  div{
    padding: 30px;
    box-sizing: border-box;
  }
  .count{
    background: var(--green);
    width: 15px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    color: white !important;
    font-weight: 900;
  }
  .count.dis{
    background: var(--light-gray);
  }
  .ex_tit.dis{
    color: var(--light-gray) !important;
  }
</style>