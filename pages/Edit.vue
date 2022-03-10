<template>
    <section class="grid">
        <div class="nav_bar"><NavBar/></div>
        <div class="cont"><ContEdit/></div>
    </section>
</template>
<script>
import NavBar from '../components/NavBar.vue'
import ContEdit from '../components/ContEdit.vue'

export default {
  name: 'Edit',
  components: {
    NavBar,
    ContEdit
  },
  data() {
    return {
     
    }
  },
}
</script>
<style scoped>
    
</style>