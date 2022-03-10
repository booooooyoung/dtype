<template>
  <div>
    <p class="info_title">EXHIBITIONS</p>
    <ul class="info_cont_box">
        <li><span>열린 전시</span><span class="count">{{openCount}}</span></li>
        <li style="margin-bottom: 30px;" v-show="openCount == 1"><span class="ex_tit"><b-icon icon="menu-right"></b-icon>전시 타이틀을 등록해주세요</span></li>
        <li><span>지난 전시</span><span class="count dis">4</span></li>
        <li><span class="ex_tit dis"><b-icon icon="menu-right"></b-icon>VINCENT VAN COGH</span></li>
        <li><span class="ex_tit dis"><b-icon icon="menu-right"></b-icon>Piet Mondrian</span></li>
        <li><span class="ex_tit dis"><b-icon icon="menu-right"></b-icon>Salvador Dalí</span></li>
        <li><span class="ex_tit dis"><b-icon icon="menu-right"></b-icon>René Magritte</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'InfoExhibition',
  props:{
    openCount : String
  }
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