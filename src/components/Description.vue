<template>
  <div>
    <h1>Description</h1>
     
    <section class="card bg-secondary text-white" style="width:20rem">
      <h5 class="card-title">{{title }}</h5>
      <p class="card-body">
        {{desc}}
      </p>
      <a :href="link" class="btn btn-primary">Link</a>
    </section>
  <hr>
  <h5>Relevant Items</h5>
  <section v-if="this.errors">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </section>

  <section v-else class="row top-buffer" v-for="i in Math.ceil(posts.length / 2)" v-bind:key="i"> 
    <section class="col-sm-4" v-for="(post,id) in posts.slice((i - 1) * 2, i * 2)" v-bind:key="post.id">
      <section class="card">
        <h5 class="card-title">{{post.API}}</h5>
        <p class="card-text"> {{posts.Description}}</p>
            
        <router-link exact :to="{ name: 'Description',  query: { title: post.API , desc: post.Description , category:post.Category } }" >Description</router-link>
       </section>
    </section>
  </section>
  </div>
</template>

<style scoped>
h1 {
  color: green
}
div{
  margin-left: 100px
}
.top-buffer{
     margin-top:20px; 
}
</style>

<script>
import router from '../router';
import axios from 'axios'; 
import { constants } from 'fs';

export default {
  name:'Description',
  data(){
    return {
      title:'',
      desc:'',
      category:'',
      posts:[],
      errors:false,
      link:''
    }
  },
  created() {
    this.title = this.$route.query.title;
    this.desc = this.$route.query.desc ;
    this.category= encodeURIComponent(this.$route.query.category);
    this.link = this.$route.params.link;

    axios.get('https://api.publicapis.org/entries?category='+this.category)
    .then(response => {
     response.data.entries.forEach(elem => {
      if(this.posts.length < 3){
          this.posts.push(elem);
          console.log("API CALL")
        }
      });
    })
    .catch(e => {
        this.errors = true
        console.log("ERROR"+e);
    })
  }
}
</script>