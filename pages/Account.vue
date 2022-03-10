<template>
    <section class="grid">
        <div class="nav_bar"><NavBar/></div>
        <div class="info"><InfoAccount/></div>
        <div class="cont"><ContAccount/></div>
    </section>
</template>
<script>
import NavBar from '../components/NavBar.vue'
import InfoAccount from '../components/InfoAccount.vue'
import ContAccount from '../components/ContAccount.vue'

export default {
  name: 'Account',
  components: {
    NavBar,
    InfoAccount,
    ContAccount,
  },
  data() {
    return {
     
    }
  },
}
</script>
<style scoped>
    
</style>