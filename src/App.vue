<template>
  <div id="app">
    <Sidenav />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer'
import Sidenav from './components/Sidenav'

export default {
  name: 'App',
  components: {
    Sidenav,
    Footer
  }
}
</script>

<style>
#app {
  text-align: left;
  color: #2c3e50;
  margin-top: 0px;
  background-color: #EEEEEE;
   max-height: 100vh;
  overflow: auto;
}
</style>
