<template>
  <article>
    <section>
      <h2>Random Facts </h2>
      <aside>
        <button class="btn-circle" @click="sortItem">Sort</button>
      </aside>
    </section>
    <section class="row top-buffer" v-for="i in Math.ceil(posts.length / 3)" v-bind:key="i">
      <section class="col-md-3" v-for="(post) in posts.slice((i - 1) * 3, i * 3)" v-bind:key="post.API">
        <section class="card card-inverse">
          <h5 class="card-title">{{post.API}}</h5>
          <p class="card-body"></p>
          <nav class="overlay">
            <p class="is-title">{{post.API}}</p>
            <span class="is-centered">
              <router-link exact :to="{ name: 'Description', params:{ link : post.Link}, query: { title: post.API , desc: post.Description , category:post.Category } }" >
                Read More
              </router-link>
            </span>
          </nav>
        </section>
      </section>
    </section>
    <ul v-if="errors && errors.length">
      <li v-for="(error) of errors" :key="error">
        {{error.message}}
      </li>
    </ul>
  </article>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      posts: [], // getting all the response
      errors: []// Errors if any while API Call
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    // Sort function to sort the items alphabetically.
    sortItem () {
      this.posts.sort((post1, post2) => {
        if (post1.API.toLowerCase() > post2.API.toLowerCase()) {
          return 1
        }
        if (post1.API.toLowerCase() < post2.API.toLowerCase()) {
          return -1
        }
        return 0
      })
    },
    getData () {
      axios.get('https://api.publicapis.org/entries')
        .then(response => {
          let tempArray = []
          const n = 10
          tempArray = response.data.entries
          // Getting 10 Random entries to show on home page from the response of API.
          this.posts = tempArray
            .map(x => ({ x, r: Math.random() }))
            .sort((a, b) => a.r - b.r)
            .map(a => a.x)
            .slice(0, n)
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>

<style scoped>
h2 {
  color: #06BC9B;
}
section h1{
  text-align: left;
}
section aside{
  position: absolute;
  left: 15px;
  top: 100px;
}
.top-buffer{
  margin-top:25px;
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
