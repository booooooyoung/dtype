<template>
  <section>
    <h2 class="cont_title">Account</h2>
    <div class="thumb">
      <ul class="account_list">
        <li><span>User Name</span><div>360Xcon</div></li>
        <li><span>Email Address</span><div>360@dataking.co.kr</div></li>
        <li><span>Phone</span><div>010-1234-5678</div></li>
        <li><span>Company</span><div>dataking</div></li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContAccount',
}
</script>
<style scoped>
  .thumb{
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    background: white;
    border-radius: 8px;
    margin: 50px 0 0;
  }
  .thumb ul{
    width: 60%;
    margin: 0 auto;
  }
  .thumb ul li{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .thumb ul li span{
    width: 25%;
    font-size: 0.8rem;
    font-weight: 500;
  }
  .thumb ul li div{
    width: 75%;
    background: var(--blue-02);
    padding: 8px 15px;
    border-radius: 8px;
    color: var(--blue-01);
    font-size: 0.8rem;
  }
</style>
