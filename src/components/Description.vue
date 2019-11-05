<template>
  <article class='article-content'>
    <h2 class='page-heading'>Know More About : {{title}}</h2>
    <section class="card" style="width:20rem">
      <strong class="card-title">{{title }}</strong>
      <div class="card-body">
        {{desc}}
        <p><a :href="link">Visit Site</a></p>
      </div>
    </section>
    <hr>
    <h5 class='page-heading'>Relevant Items</h5>
    <section v-if="this.errors">
      <p class='page-heading'>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>
    <section v-else class="row top-buffer" v-for="i in Math.ceil(posts.length / 3)" v-bind:key="i" style="width:80%">
      <section class="col-sm-4" v-for="(post) in posts.slice((i - 1) * 3, i * 3)" v-bind:key="post.API">
        <a :href="post.Link">
        <section class="card">
          <p class="card-title">{{post.API}}</p>
          <div class="card-text">
            <small class="text-muted">{{post.Description}}</small>
          </div>
       </section>
       </a>
      </section>
    </section>
  </article>
</template>

<style scoped>
.top-buffer{
  margin-top:10px
}
.card{
  height:12rem;
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
  .card-text{
    display: none;
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
