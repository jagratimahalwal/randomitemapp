<template>
  <section>
    <h1>It's Fun !!!! </h1>

    <section v-if="errors">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>

  <div class="card bg-info"  style="width:20rem"
      v-else
      v-for="(randomPost,id) in randomPost"
      v-bind:key="randomPost.id" >
      <h5 class="card-title">{{ randomPost.API }}</h5>
      <p class="card-body">
        {{randomPost.Description}}
      </p>
      <a :href="randomPost.Link" class="btn btn-secondary">Link</a>
  </div>
  <hr>
  <h5></h5>
  <button class="btn btn-secondary" @click="randomRefresh">Randomize</button>
  </section>
</template>


<script>
import axios from 'axios'; 


export default {
  data(){
    return{
        randomPost:[],
        errors: false
    }
  },
  methods:{
    randomRefresh(){
      this.randomPost.pop();
      axios.get('https://api.publicapis.org/random?auth=null')
        .then(response => {
            this.randomPost.push(response.data.entries[0]);
        })
        .catch(e => {
            this.errors = true
        })
    }
  },
    mounted(){
      this.randomRefresh()
  }
}
</script>

<style scoped>
h1 {
  color: rgb(7, 1, 1)
}
section{
  margin-left: 100px
}
div{
    margin-left: 15px;
    margin-top: 25px;
}

</style>
