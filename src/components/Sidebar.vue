<template>
<div>
  
  <svg style="display:none;">
  <defs>

    <g id="home">
      <path fill="#90A4AE" d="M42,48H6c-3.3,0-6-2.7-6-6V6c0-3.3,2.7-6,6-6h36c3.3,0,6,2.7,6,6v36C48,45.3,45.3,48,42,48z"/>
      <path fill="#212121" d="M20.8,35.5v-9.6h6.4v9.6h8V22.7H40L24,8.3L8,22.7h4.8v12.8H20.8z"/>
    </g>

    <g id="category">
      <path fill="#90A4AE" d="M28.4,3.6h-1.8V0h-3.6v3.6H8.9V0H5.3v3.6H3.6C1.6,3.6,0,5.1,0,7.1L0,32c0,2,1.6,3.6,3.6,3.6h24.9c2,0,3.6-1.6,3.6-3.6V7.1C32,5.1,30.4,3.6,28.4,3.6z M28.4,32H3.6V12.4h24.9V32z M7.1,16H16v8.9H7.1V16z"/>
      
    </g>

    <g id="map">
      <path fill="#90A4AE" d="M16,14.2c-1,0-1.8,0.8-1.8,1.8s0.8,1.8,1.8,1.8c1,0,1.8-0.8,1.8-1.8S17,14.2,16,14.2z M16,0
	    C7.2,0,0,7.2,0,16c0,8.8,7.2,16,16,16s16-7.2,16-16C32,7.2,24.8,0,16,0z M19.5,19.5L6.4,25.6l6.1-13.1l13.1-6.1L19.5,19.5z"/>
    </g>

    <g id="planner">
      
    </g>

  </defs>
</svg>


  <nav class="nav__cont">
  <ul class="nav">
    <li class="nav__items ">
      <svg  viewBox="0 0 48 48">
        <use xlink:href="#home"></use>
      </svg>
       <router-link exact :to="{ name: 'home' }" >Home</router-link>
    </li>
    
    <li class="nav__items ">
      <svg  viewBox="0 0 48 48">
        <use xlink:href="#category"></use>
      </svg>
      <router-link exact :to="{name:'Categories'}" >Category</router-link>
    </li>
    
      
    <li class="nav__items ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 35.6">
        <use xlink:href="#map"></use></svg>
      <router-link exact :to="{ name: 'randomize' }" >Randomize</router-link>
    </li>
        
  </ul>
</nav>


  
</div>
</template>

<style scoped>

div{
  margin-left: 0px;
}
.nav__cont {
  position: fixed;
  width: 60px;
  top: 0;
  height: 100vh;
  z-index: 100;
  background-color: #202020;
  overflow: hidden;
  transition: width 0.3s ease;
  cursor: pointer;
}
.nav__cont:hover {
  width: 180px;
}
@media screen and (min-width: 600px) {
  .nav__cont {
    width: 70px;
  }
}
.nav {
  list-style-type: none;
  color: white;
}
.nav:first-child {
  padding-top: 1.5rem;
}
.nav__items {
  padding-bottom: 4rem;
  font-family: 'roboto';
}
.nav__items a {
  position: relative;
  display: block;
  top: -35px;
  padding-left: 25px;
  padding-right: 15px;
  transition: all 0.3s ease;
  margin-left: 45px;
  margin-right: 10px;
  text-decoration: none;
  color: white;
  font-family: 'roboto';
  font-weight: 100;
  font-size: 1.35em;
}
.nav__items a:after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 2px;
  background: radial-gradient(circle at 94.02% 88.03%, transparent 100%);
  opacity: 0;
  transition: all 0.5s ease;
  z-index: -10;
}
.nav__items:hover a:after {
  opacity: 1;
}
.nav__items svg {
  width: 26px;
  height: 26px;
  margin-left: 30px;
  position: relative;
  left: -25px;
  cursor: pointer;
}
@media screen and (min-width: 600px) {
  .nav__items svg {
    width: 32px;
    height: 32px;
    left: -15px;
  }
}

</style>

<script>

export default {
    name : 'Sidebar'
}
</script>