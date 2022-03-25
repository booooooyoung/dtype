<template>
  <section>
    <div class="info"><InfoEdit/></div>
    <h2 class="cont_title">Edit</h2>
    <div class="thumb">
      <ul>
        <li id="00">
          <h3>전시 타이틀 편집</h3>
          <div class="box_wrap">
              <div class="img_box">
                <img id="preview-image" src="../assets/dtype_editor_default_image.png">
                <input type="file" id="input-image" @change="readImage" accept="image/*"/>
              </div>
              <div class="input_box">
                  <label for="title">Title</label>
                  <input class="info_input" type="text" id="title" placeholder="전시 제목을 입력해주세요">
                  <label for="info">Info</label>
                  <textarea class="info_input" type="text" id="info" placeholder="전시 소개를 입력해주세요"></textarea>
                  <label for="Homepage">Homepage</label>
                  <input class="info_input" type="text" id="Homepage" placeholder="전시 관련 홈페이지 주소를 입력해주세요">
                  <div class="btn_box">
                    <button class="btn_n">Save</button>
                  </div>
              </div>
          </div>
        </li>
        <li id="01">
          <h3>#01</h3>
          <div class="box_wrap">
              <div class="img_box">
                <img id="preview-image" src="../assets/dtype_editor_default_image.png">
                <input type="file" id="input-image" @change="readImage" accept="image/*"/>
              </div>
              <div class="input_box">
                  <label for="title">Title</label>
                  <input class="info_input" type="text" id="title" placeholder="작품명을 입력해주세요">
                  <label for="info">Info</label>
                  <textarea class="info_input" type="text" id="info" placeholder="작품 소개를 입력해주세요"></textarea>
                  <label for="Homepage">Artist</label>
                  <input class="info_input" type="text" id="Homepage" placeholder="작가명을 입력해주세요">
                  <div class="btn_box">
                    <button class="btn_n">Save</button>
                  </div>
              </div>
          </div>
        </li>
        <li id="02">
          <h3>#02</h3>
          <div class="box_wrap">
              <div class="img_box">
                <img id="preview-image" src="../assets/dtype_editor_default_image.png">
                <input type="file" id="input-image" @change="readImage" accept="image/*"/>
              </div>
              <div class="input_box">
                  <label for="title">Title</label>
                  <input class="info_input" type="text" id="title" placeholder="작품명을 입력해주세요">
                  <label for="info">Info</label>
                  <textarea class="info_input" type="text" id="info" placeholder="작품 소개를 입력해주세요"></textarea>
                  <label for="Homepage">Artist</label>
                  <input class="info_input" type="text" id="Homepage" placeholder="작가명을 입력해주세요">
                  <div class="btn_box">
                    <button class="btn_n">Save</button>
                  </div>
              </div>
          </div>
        </li>
        <li id="03">
          <h3>#03</h3>
          <div class="box_wrap">
              <div class="img_box">
                <img id="preview-image" src="../assets/dtype_editor_default_image.png">
                <input type="file" id="input-image" @change="readImage" accept="image/*"/>
              </div>
              <div class="input_box">
                  <label for="title">Title</label>
                  <input class="info_input" type="text" id="title" placeholder="작품명을 입력해주세요">
                  <label for="info">Info</label>
                  <textarea class="info_input" type="text" id="info" placeholder="작품 소개를 입력해주세요"></textarea>
                  <label for="Homepage">Artist</label>
                  <input class="info_input" type="text" id="Homepage" placeholder="작가명을 입력해주세요">
                  <div class="btn_box">
                    <button class="btn_n">Save</button>
                  </div>
              </div>
          </div>
        </li>
        <li id="04">
          <h3>#04</h3>
          <div class="box_wrap">
              <div class="img_box">
                <img id="preview-image" src="../assets/dtype_editor_default_image.png">
                <input type="file" id="input-image" @change="readImage" accept="image/*"/>
              </div>
              <div class="input_box">
                  <label for="title">Title</label>
                  <input class="info_input" type="text" id="title" placeholder="작품명을 입력해주세요">
                  <label for="info">Info</label>
                  <textarea class="info_input" type="text" id="info" placeholder="작품 소개를 입력해주세요"></textarea>
                  <label for="Homepage">Artist</label>
                  <input class="info_input" type="text" id="Homepage" placeholder="작가명을 입력해주세요">
                  <div class="btn_box">
                    <button class="btn_n">Save</button>
                  </div>
              </div>
          </div>
        </li>
        <li id="05">
          <h3>#05</h3>
          <div class="box_wrap">
              <div class="img_box">
                <img id="preview-image" src="../assets/dtype_editor_default_image.png">
                <input type="file" id="input-image" @change="readImage" accept="image/*"/>
              </div>
              <div class="input_box">
                  <label for="title">Title</label>
                  <input class="info_input" type="text" id="title" placeholder="작품명을 입력해주세요">
                  <label for="info">Info</label>
                  <textarea class="info_input" type="text" id="info" placeholder="작품 소개를 입력해주세요"></textarea>
                  <label for="Homepage">Artist</label>
                  <input class="info_input" type="text" id="Homepage" placeholder="작가명을 입력해주세요">
                  <div class="btn_box">
                    <button class="btn_n">Save</button>
                  </div>
              </div>
          </div>
        </li>
        <li id="06">
          <h3>#06</h3>
          <div class="box_wrap">
              <div class="img_box">
                <img id="preview-image" src="../assets/dtype_editor_default_image.png">
                <input type="file" id="input-image" @change="readImage" accept="image/*"/>
              </div>
              <div class="input_box">
                  <label for="title">Title</label>
                  <input class="info_input" type="text" id="title" placeholder="작품명을 입력해주세요">
                  <label for="info">Info</label>
                  <textarea class="info_input" type="text" id="info" placeholder="작품 소개를 입력해주세요"></textarea>
                  <label for="Homepage">Artist</label>
                  <input class="info_input" type="text" id="Homepage" placeholder="작가명을 입력해주세요">
                  <div class="btn_box">
                    <button class="btn_n">Save</button>
                  </div>
              </div>
          </div>
        </li>
        <li id="07">
          <h3>#07</h3>
          <div class="box_wrap">
              <div class="img_box">
                <img id="preview-image" src="../assets/dtype_editor_default_image.png">
                <input type="file" id="input-image" @change="readImage" accept="image/*"/>
              </div>
              <div class="input_box">
                  <label for="title">Title</label>
                  <input class="info_input" type="text" id="title" placeholder="작품명을 입력해주세요">
                  <label for="info">Info</label>
                  <textarea class="info_input" type="text" id="info" placeholder="작품 소개를 입력해주세요"></textarea>
                  <label for="Homepage">Artist</label>
                  <input class="info_input" type="text" id="Homepage" placeholder="작가명을 입력해주세요">
                  <div class="btn_box">
                    <button class="btn_n">Save</button>
                  </div>
              </div>
          </div>
        </li>
        <li id="08">
          <h3>#08</h3>
          <div class="box_wrap">
              <div class="img_box">
                <img id="preview-image" src="../assets/dtype_editor_default_image.png">
                <input type="file" id="input-image" @change="readImage" accept="image/*"/>
              </div>
              <div class="input_box">
                  <label for="title">Title</label>
                  <input class="info_input" type="text" id="title" placeholder="작품명을 입력해주세요">
                  <label for="info">Info</label>
                  <textarea class="info_input" type="text" id="info" placeholder="작품 소개를 입력해주세요"></textarea>
                  <label for="Homepage">Artist</label>
                  <input class="info_input" type="text" id="Homepage" placeholder="작가명을 입력해주세요">
                  <div class="btn_box">
                    <button class="btn_n">Save</button>
                  </div>
              </div>
          </div>
        </li>
        <li id="09">
          <h3>#09</h3>
          <div class="box_wrap">
              <div class="img_box">
                <img id="preview-image" src="../assets/dtype_editor_default_image.png">
                <input type="file" id="input-image" @change="readImage" accept="image/*"/>
              </div>
              <div class="input_box">
                  <label for="title">Title</label>
                  <input class="info_input" type="text" id="title" placeholder="작품명을 입력해주세요">
                  <label for="info">Info</label>
                  <textarea class="info_input" type="text" id="info" placeholder="작품 소개를 입력해주세요"></textarea>
                  <label for="Homepage">Artist</label>
                  <input class="info_input" type="text" id="Homepage" placeholder="작가명을 입력해주세요">
                  <div class="btn_box">
                    <button class="btn_n">Save</button>
                  </div>
              </div>
          </div>
        </li>
        <li id="10">
          <h3>#10</h3>
          <div class="box_wrap">
              <div class="img_box">
                <img id="preview-image" src="../assets/dtype_editor_default_image.png">
                <input type="file" id="input-image" @change="readImage" accept="image/*"/>
              </div>
              <div class="input_box">
                  <label for="title">Title</label>
                  <input class="info_input" type="text" id="title" placeholder="작품명을 입력해주세요">
                  <label for="info">Info</label>
                  <textarea class="info_input" type="text" id="info" placeholder="작품 소개를 입력해주세요"></textarea>
                  <label for="Homepage">Artist</label>
                  <input class="info_input" type="text" id="Homepage" placeholder="작가명을 입력해주세요">
                  <div class="btn_box">
                    <button class="btn_n">Save</button>
                  </div>
              </div>
          </div>
        </li>
      </ul>
    </div>
    
  </section>
</template>

<script>
import InfoEdit from './InfoEdit.vue'

export default {
  name: 'ContEdit',
  data() {
            return {
               
              }
        },
  components:{
    InfoEdit
  },
   methods: {
            readImage: function (event) {   
              console.log("change");
              var input = event.target;
              if(input.files && input.files[0]) {
                 console.log("file : " + input.files[0]);
                  // FileReader 인스턴스 생성
                  const reader = new FileReader()
                  // 이미지가 로드가 된 경우
                  reader.onload = e => {
                    console.log("e.target.result : " + e.target.result);
                      const previewImage =  input.parentNode.firstChild;
                      previewImage.src = e.target.result
                      
                  }
                  // reader가 이미지 읽도록 하기
                  reader.readAsDataURL(input.files[0])
                  
              }
            },
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
    position: relative;
  }
  h3{
     padding: 0 0 10px;
     font-weight: 900;
  }
  label{
    font-size: 0.8rem;
    margin-bottom: 5px;
  }
  input.info_input{
    background: white;
    height: 34px;
  }
  input.info_input::placeholder{
    font-size: 0.7rem;
}
textarea{
  width: 100%;
  padding: 10px;
  border: none;
  min-height: 34px;
  height: 80px;
  max-height: 100px;
  resize: vertical;
}
textarea::placeholder{
  font-size: 0.7rem;
}
  .thumb ul{
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .thumb ul li{
    width: 100%;
    padding: 14px;
    box-sizing: border-box;
    background: white;
    border-radius: 8px;
    margin: 50px 0 0;
    position: relative;
  }
  .thumb .box_wrap{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .thumb .img_box, .input_box{
    background: var(--blue-02);
    padding: 15px;
    box-sizing: border-box;
    border-radius: 6px;
    text-align: center;
  }
  .thumb .input_box{
    width: 68.5%;
  }
  .thumb .img_box{
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  #preview-image{
    width: 200px;
  }
  .btn_box{
    text-align: right;
    margin-bottom: 0;
  }
</style>
