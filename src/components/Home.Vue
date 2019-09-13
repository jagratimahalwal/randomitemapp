<template>
  <article class='article-content'>
    <ul v-if="errors && errors.length">
      <li class='page-heading' v-for="(error) of errors" :key="error">
        {{error.message}}
      </li>
    </ul>
    <section  v-else>
      <h6 class='page-heading is--text'>
        <p>Here, you can see various API links in the below slide show, want to sort them alphabettically click on the arrow buttons.</p>
        <p>Want to have more such API links, click on category tab there you will get the links to APIs category wise.</p>
        <p>Don't know what you want, go to Randomize tab, it will give you a different API evey time you click random button.</p>
        <p>Havee fun while exploring them ! </p>
      </h6>
      <a class='is-sort' href='#' @click="sortItem" title='Sort'><strong>&#10234;</strong></a>
      <vueper-slides autoplay class="no-shadow is-slide" slide-multiple :breakpoints="breakpoints" :arrows="false" :visible-slides="3" :slide-ratio="1/6" :dragging-distance="200" style="width:90%">
        <vueper-slide v-for="(post) in posts" v-bind:key="post.API" >
          <div slot="slideContent" >
              <section class="card">
                <img class="card-img-bottom" src="@/assets/1.jpg" :alt="post.API">
                <p class="card-body">
                    <span><router-link exact :to="{ name: 'Description', params:{ link : post.Link}, query: { title: post.API , desc: post.Description , category:post.Category } }" >
                      {{post.API}}
                    </router-link></span>
                  </p>
              </section>
          </div>
        </vueper-slide>
      </vueper-slides>
    </section>
  </article>
</template>

<script>
import axios from 'axios'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'Home',
  components: { VueperSlides, VueperSlide },
  data () {
    return {
      posts: [], // getting all the response
      errors: [], // Errors if any while API Call
      breakpoints: { // Setting breakpoints to show number of slides per screen size
        1200: {
          visibleSlides: 3
        },
        900: {
          visibleSlides: 2,
          slideRatio: 1 / 2
        },
        600: {
          visibleSlides: 1,
          arrows: false,
          slideRatio: 1 / 2,
          bulletsOutside: true
        }
      }
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
            .sort(() => Math.random() - Math.random())
            .slice(0, n)

          /* this.posts = tempArray
            .map(x => ({ x, r: Math.random() }))
            .sort((a, b) => a.r - b.r)
            .map(a => a.x)
            .slice(0, n) */
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>

<style scoped>
.is-sort{
  position: sticky;
  left: 45%;
  font-size: 24px;
}
.is-slide{
  margin-top: 10%;
}
.card-img-bottom{
  height: 30%;
}
.card{
  height: 12rem;
}
.top-buffer{
  margin-top:15px
}
.is--text{
  text-align: center;
}
</style>
