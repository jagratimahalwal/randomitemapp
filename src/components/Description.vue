<template>
  <article>
    <h2>Know More About : {{title}}</h2>
    <section class="card" style="width:20rem">
      <h5 class="card-title">{{title }}</h5>
      <p class="card-body">
        {{desc}}
      </p>
      <nav class="overlay">
        <p class="is-descp">{{desc}} </p>
        <a :href="link" class="btn btn-primary is-centered"><span>Visit Site</span></a>
      </nav>
    </section>
    <hr>
    <h5>Relevant Items</h5>
    <section v-if="this.errors">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>
    <section v-else class="row top-buffer" v-for="i in Math.ceil(posts.length / 3)" v-bind:key="i">
      <section class="col-sm-3" v-for="(post) in posts.slice((i - 1) * 3, i * 3)" v-bind:key="post">
        <section class="card">
          <h5 class="card-title">{{post.API}}</h5>
          <p class="card-body"></p>
          <nav class="overlay">
            <p class="is-descp"> {{post.Description}}</p>
            <a :href="post.Link" class="btn btn-primary is-centered"><span>Visit</span></a>
          </nav>
       </section>
      </section>
    </section>
  </article>
</template>

<style scoped>
h2 {
  color: #06BC9B;
}
.top-buffer{
  margin-top:10px
}
.btn{
  background-color: transparent;
  border-color: #8C43FF;
  color:black;
  margin: 0 auto;
  font-size: 18px;
  padding: .75rem;
  font-weight: 400;
  border-width: 2px;
  border-radius: 290486px;
}
.btn:hover{
  border-color:#efefef;
  background-color: #8C43FF;
  color:#fff;
}
@media screen and (max-width:600px){
  /* For Small Screens */
  [class*="col-"] {
    width: 100%;
    border: 1px ;
    margin-bottom: 8px;
    margin-right: 20px;
  }
  .top-buffer{
    margin-top: 0px;
  }
}
@media screen and (min-width: 600px) and (max-width: 768px){
  [class*="col-"] {
    width: 100%;
    border: 1px;
    margin-bottom: 8px;
    margin-right: 30px;
  }
  .top-buffer{
    margin-top: 0px;
  }
}
</style>

<script>
import axios from 'axios'
//  import { constants } from 'fs'

export default {
  name: 'Description',
  data () {
    return {
      title: '',
      desc: '',
      category: '',
      posts: [],
      errors: false,
      link: ''
    }
  },
  mounted () {
    // Reading from URL to set the Itms value amd Description over the page.
    this.title = this.$route.query.title
    this.desc = this.$route.query.desc
    this.category = encodeURIComponent(this.$route.query.category)
    this.link = this.$route.params.link

    axios.get('https://api.publicapis.org/entries?category=' + this.category)
      .then(response => {
        response.data.entries.forEach(elem => {
          if (this.posts.length < 3) {
            this.posts.push(elem)
          }
        })
      })
      .catch(e => {
        this.errors = true
      })
  }
}
</script>
