<template>
<div>
  <div id="mySidenav" class="sidenav" v-if="hidden">
  <a href="javascript:void(0)" class="closebtn" v-on:click="hidden=false">&times;</a>
  <a href="#" v-on:click="hidden=false"><router-link exact :to="{ name: 'home' }" >Home</router-link></a>
  <a href="#" v-on:click="hidden=false"><router-link exact :to="{name:'Categories'}" >Category</router-link></a>
  <a href="#" v-on:click="hidden=false"><router-link exact :to="{ name: 'randomize' }" >Randomize</router-link></a>
  </div>

  <aside id="main">
  <span style="font-size:30px;cursor:pointer"><button class="btn-circle" v-on:click="hidden=!hidden" title="Menu">&#9776;</button></span>
  </aside>
</div>
</template>

<style scoped>
.sidenav {
  height: 100%;
  width: 18%;
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  background-color: lavender;
  overflow-x: hidden;
  transition: background 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 5px;
  text-decoration: none;
  font-size: 20px;
  color: black;
  display: block;
  transition: 0.5s ease-in-out;
}

.sidenav a:hover {
  text-decoration: underline;
}

.sidenav .closebtn {
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 40px;
  margin-left: 50px;
  color: #070707;
}

#main {
  transition: margin-left .5s;
  padding: 16px;
  max-width: 15%;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
 @media screen and (max-width:600px){
   .sidenav{
     width: 100%;
   }
  .sidenav a{
    padding: 8px 30px 8px 50px;
    text-decoration: none;
    font-size: 30px;
    display: block;
    transition: 0.3s;
  }
}
@media screen and (min-width: 600px) and (max-width: 767px){
  .sidenav{
     width: 100%;
   }
  .sidenav a{
    padding: 8px 30px 8px 50px;
    text-decoration: none;
    font-size: 20px;
    display: block;
    transition: 0.3s;
  }
}

@media screen and (min-width: 768px) {
  .sidenav a{
    padding: 8px 30px 8px 10px;
    text-decoration: none;
    font-size: 20px;
    display: block;
    transition: 0.3s;
  }
}
</style>

<script>
export default {
  name: 'Sidenav',
  data () {
    return {
      hidden: false
    }
  }
}
</script>
