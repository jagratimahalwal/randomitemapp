<template>
  <article>
    <h1>It's Fun !!!! </h1>
    <section v-if="errors">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>
    <div v-if="randomPost && randomPost.length">
      <section class="card" style="width:20rem"  >
        <h5 class="card-title">{{ randomPost[0].API }}</h5>
        <p class="card-body">
          {{randomPost[0].Description}}
        </p>
        <nav class="overlay">
          <p class="is-descp">{{randomPost[0].Description}}</p>
          <a :href="randomPost[0].Link" class="btn is-rounded is-centered">Link</a>
        </nav>
      </section>
    </div>
    <hr>
    <span>
      <button class="btn col-md-2 is-random" @click="randomRefresh">Randomize</button>
    </span>
  </article>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      randomPost: [],
      errors: false
    }
  },
  methods: {
    // API call to get random Item
    randomRefresh () {
      this.randomPost.pop()
      axios.get('https://api.publicapis.org/random?auth=null')
        .then(response => {
          this.randomPost.push(response.data.entries[0])
        })
        .catch(e => {
          this.errors = true
        })
    }
  },
  mounted () {
    this.randomRefresh()
  }
}
</script>

<style scoped>
h1 {
  color: #06BC9B;
}
div{
  /* margin-left: 15px; */
  display: inline-block;
  margin-top: 25px;
}
.is-rounded{
  background-color: transparent;
  border-color: #8C43FF;
  color: #000000;
  margin: 0 auto;
  font-size: 18px;
  padding: .75rem;
  font-weight: 400;
  border-width: 2px;
  border-radius: 290486px;
}
.is-rounded:hover{
  border-color:#efefef;
  background-color: #8C43FF;
  color:#fff;
}
.is-random{
  border-width: 2px;
  border-radius: 290732px;
  background-color: #06BC9B;
}
@media screen and (max-width:600px){
  .is-random{
    margin-right: 30px;
  }
  [class*="col-"] {
    width: 50%;
    border: 1px ;
    margin-bottom: 8px;
    margin-right: 20px;
  }
}
@media screen and (min-width: 600px) and (max-width: 768px){
  [class*="col-"] {
    width: 50%;
    border: 1px;
    margin-bottom: 8px;
    margin-right: 30px;
  }
}
</style>
