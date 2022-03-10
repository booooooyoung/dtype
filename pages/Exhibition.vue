<template>
    <section class="grid">
        <div class="nav_bar"><NavBar/></div>
        <div class="cont"><ContExhibition/></div>
    </section>
</template>
<script>
import NavBar from '../components/NavBar.vue'
import ContExhibition from '../components/ContExhibition.vue'

export default {
  name: 'Account',
  components: {
    NavBar,
    ContExhibition,
  },
  data() {
    return {
     
    }
  },
}
</script>
<style scoped>
    
</style>