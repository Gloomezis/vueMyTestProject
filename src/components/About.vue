<template>
  <div class="about container">
    <h1 class="page-header">About</h1>
    <p>This is a customer manager app built with the Vue.js framework by {{developer}}</p>
    <p>Version 1.0.0</p>
  </div>
</template>

<script>
  export default {
    name: 'about',
    data () {
      return {
        developer:"p.Belski"
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
