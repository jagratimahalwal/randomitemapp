<template>
  <div class="topnav">
    <router-link exact :to="{ name: 'Home' }" ><a href="#"> Home </a></router-link>
    <router-link exact :to="{name:'Categories'}" ><a href="#">Categories</a></router-link>
    <router-link exact :to="{ name: 'randomize' }" ><a href="#">Randomize</a></router-link>
  </div>
</template>

<style scoped>
/* Add a black background color to the top navigation */
.topnav {
  background-color: #333;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #3c97d2;
  color: black;
}

/* Add a color to the active/current route link */
.router-link-active a {
  /* background-color: #3C97E7; */
  color: #3c97d2;
}
</style>

<script>
export default {
  name: 'TopNav'
}
</script>
