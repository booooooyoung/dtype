<template>
  <section>
    <div class="info"><InfoExhibition :openCount="openCount"/></div>
    <h2 class="cont_title">Exhibitions List</h2>
  <div class="thumb">
    <ul>
      <li>
        <div class="img_box">
          <img src="../assets/dtype_editor_default_image.png" alt="dtype_editor_default_image">
        </div>
        <h2 class="exhibition_title">전시 타이틀을 등록해주세요</h2>
        <div class="btn_box">
          <button class="btn_p" @click="editGo()">Edit</button>
          <button class="btn_p" @click="onClickRedirect()">View</button>
          <b-field class="ex_switch">
            <b-tooltip label="전시장 열기" type="is-success is-light">
              <b-switch v-model="openCount" type="is-success" true-value="1"
                false-value="0"></b-switch>
            </b-tooltip>
          </b-field>
        </div>
      </li>
      <li>
        <div class="img_box">
          <img class="default" src="../assets/thumb_img_01.jpg" alt="dtype_editor_default_image">
        </div>
        <h2 class="exhibition_title">VINCENT VAN COGH</h2>
         <div class="btn_box">
          <button class="btn_p btn_dis">Edit</button>
          <button class="btn_p btn_dis">View</button>
          <b-field class="ex_switch">
            <b-tooltip label="사용 기간 만료" type="is-danger is-light">
              <b-switch disabled></b-switch>
            </b-tooltip>
          </b-field>
        </div>
      </li>
      <li>
        <div class="img_box">
          <img class="default" src="../assets/thumb_img_02.jpg" alt="dtype_editor_default_image">
        </div>
        <h2 class="exhibition_title">Piet Mondrian</h2>
        <div class="btn_box">
          <button class="btn_p btn_dis">Edit</button>
          <button class="btn_p btn_dis">View</button>
          <b-field class="ex_switch">
            <b-tooltip label="사용 기간 만료" type="is-danger is-light">
              <b-switch disabled></b-switch>
            </b-tooltip>
          </b-field>
        </div>
      </li>
      <li>
        <div class="img_box">
          <img class="default" src="../assets/thumb_img_03.jpg" alt="dtype_editor_default_image">
        </div>
        <h2 class="exhibition_title">Salvador Dalí</h2>
        <div class="btn_box">
          <button class="btn_p btn_dis">Edit</button>
          <button class="btn_p btn_dis">View</button>
          <b-field class="ex_switch">
            <b-tooltip label="사용 기간 만료" type="is-danger is-light">
              <b-switch disabled></b-switch>
            </b-tooltip>
          </b-field>
        </div>
      </li>
      <li>
        <div class="img_box">
          <img class="default" src="../assets/thumb_img_04.jpg" alt="dtype_editor_default_image">
        </div>
        <h2 class="exhibition_title">René Magritte</h2>
        <div class="btn_box">
          <button class="btn_p btn_dis">Edit</button>
          <button class="btn_p btn_dis">View</button>
          <b-field class="ex_switch">
            <b-tooltip label="사용 기간 만료" type="is-danger is-light">
              <b-switch disabled></b-switch>
            </b-tooltip>
          </b-field>
        </div>
      </li>
      <li></li>
    </ul>
  </div>
  </section>
</template>

<script>
import InfoExhibition from '../components/InfoExhibition.vue'

export default {
  name: 'ContExhibition',
  data() {
            return {
                openCount: '1'
            }
        },
  components:{
    InfoExhibition
  },
  methods:{
      onClickRedirect: function () {   
          window.open("https://dtype.360xcon.com/exhibition/test", "_blank");    
      },
      editGo() {
            	     this.$router.push('/Edit');
                }
    }
}
</script>

<style scoped>
  .info{
    top: 0;
    left: 80px;
  }
  .cont_title{
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .thumb ul{
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .thumb ul li{
    width: 32%;
    padding: 14px;
    box-sizing: border-box;
    background: white;
    border-radius: 8px;
    margin: 50px 0 0;
    position: relative;
  }
  .thumb ul li:last-child{
    background: none;
  }
  .thumb .img_box{
    width: 100%;
    background: var(--blue-02);
    padding: 15px 0 ;
    box-sizing: border-box;
    border-radius: 6px;
    text-align: center;
  }
  .thumb .img_box img{
    width: 50%;
    max-width: 120px;
  }
  .thumb .img_box img.default{
    opacity: 0.5;
  }
  .thumb h2.exhibition_title{
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--dark-gray);
    margin: 12px 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .thumb .btn_box{
    margin-bottom: 0;
    position: relative;
  }
  .thumb .btn_p:hover{
    background: var(--orange-01);
    color: white;
    transition: 0.3s;
  }
  .thumb li .ex_switch{
   position: absolute;
   top: 2px;
   right:0;
  }
  .btn_n, .btn_p{
    margin: 0 !important;
  }
</style>
