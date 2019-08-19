<template>
  <div>
    <section class="row top-buffer">
    <h4 class="col-sm-8">Random Facts App </h4>
    <button class="btn btn-secondary col-sm-2" style="float:right" @click="sortItem">Sort</button>
    </section>
  <section class="row top-buffer" v-for="i in Math.ceil(posts.length / 2)" v-bind:key="i"> 
  <section class="col-sm-4" v-for="(post,id) in posts.slice((i - 1) * 2, i * 2)" v-bind:key="post.id">
    <section class="card">
        <h5 class="card-title">{{ post.id}} {{post.API}}</h5>        
        <router-link exact :to="{ name: 'Description', params:{ link : post.Link}, query: { title: post.API , desc: post.Description , category:post.Category } }" >Description</router-link>
    </section>
  </section>
</section>

  <ul v-if="errors && errors.length">
    <li v-for="(error,id) of errors" :key="error.id">
      {{error.message}}
    </li>
  </ul>
  </div>
</template>

<script>
import axios from 'axios'; 

export default {
  name:'Home',
  data(){
      return{
          posts:[],
          errors:[]
      }
  },
  mounted() {
    this.getData();
  },
  methods:{
    sortItem(){
      let sorted = this.posts.sort((post1, post2) => {
        if(post1.API.toLowerCase() > post2.API.toLowerCase()){
          return 1;
        }
        if(post1.API.toLowerCase() < post2.API.toLowerCase()){
          return -1;
        }     
        return 0;
      });
    },
    getData(){
      axios.get('https://api.publicapis.org/entries')
      .then(response => {
      let tempArray = [];
      tempArray = response.data.entries;
        for(let i = 0; i<10; i++){
          let randomIndex = Math.floor(Math.random() *   tempArray.length);
          this.posts.push(tempArray[randomIndex]);
          tempArray.splice(randomIndex,1);
        }
      })
      .catch(e => {
        this.errors.push(e);
      })
    } 
  }
}
</script>

<style scoped>
h1 {
  color: blue
}

div{
  margin-left: 100px
}
.top-buffer{
  margin-top:25px; 
}
</style>
