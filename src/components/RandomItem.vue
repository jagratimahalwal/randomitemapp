<template>
  <article class='article-content'>
    <h2 class='page-heading'><strong>It's Fun !!!! </strong></h2>
    <section v-if="errors">
      <p class='page-heading'>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>
    <div id="card-container" v-if="randomPost">
      <p>
        Click on Randomize button on bottom-right of card to get a new information
      </p>
      <section class="card" style="width:20rem"  >
        <img class="card-img-top" src="@/assets/2.jpg" alt="Card image cap">
        <h5 class="card-title"><a :href="randomPost.Link">{{ randomPost.API }}</a></h5>
        <a :href="randomPost.Link">
          <div class="card-body">
            {{randomPost.Description}}
          </div>
        </a>
        <a href='#' class='is--random text-right' @click="randomRefresh" title="Randomize">&#128472;</a>
      </section>
    </div>
  </article>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      randomPost: {},
      errors: false
    }
  },
  methods: {
    // API call to get random Item
    randomRefresh () {
      this.randomPost = {} // Setting randomPost blank on load.
      axios.get('https://api.publicapis.org/random?auth=null')
        .then(response => {
          this.randomPost = response.data.entries[0]
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
#card-container{
  width:90%;
  margin-top: 25px;
}
.is--random{
  font-size: 24px;
}

.card{
  margin: 0 auto; /* Added to make the card at center position */
  float: none;
}

</style>
