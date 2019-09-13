<template>
  <div id="app">
    <TopNav />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer'
import Sidenav from './components/Sidenav'
import TopNav from './components/TopNav'

export default {
  name: 'App',
  components: {
    Sidenav,
    TopNav,
    Footer
  }
}
</script>

<style>
#app {
  text-align: left;
  font-family: serif;
  color: #2c3e50;
  margin-top: 0px;
  background-color: lavender;
  overflow: auto;
  height:100vh;
}
</style>
