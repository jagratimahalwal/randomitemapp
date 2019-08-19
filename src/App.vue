<template>
  <div id="app">
    <Sidebar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

export default {
  name: 'App',
  components:{
  Sidebar,
  Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
