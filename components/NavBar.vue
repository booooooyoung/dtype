<template>
  <ul>
    <li>
      <router-link class="nav_btn_n" to="/Account">
        <b-icon icon="account"></b-icon>
      </router-link>
    </li>
    <li>
      <router-link class="nav_btn_n" to="/Exhibition">
        <b-icon icon="view-dashboard"></b-icon>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>
<style scoped>
  li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    cursor: pointer;
  }
  li:hover{
    background: rgba(255, 255, 255, 0.1);
    transition: 0.5s;
  }
  li>a{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  li:hover a{
    color: white;
  }
</style>
