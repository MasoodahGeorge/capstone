<template>
  <div>
    <NavComp/>
    <SpinnerComp v-if="isLoading"/>
    <router-view v-else/>
    <FooterComp/>
  </div>
</template>

<script>
import NavComp from './components/NavComp.vue'
import FooterComp from './components/FooterComp.vue'
import SpinnerComp from './components/SpinnerComp.vue'

  export default{
    components: {
      NavComp,
      FooterComp,
      SpinnerComp
    }
  }
</script>

<style>
#app {
  font-family:Georgia, 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
