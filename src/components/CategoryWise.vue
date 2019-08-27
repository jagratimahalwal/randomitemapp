<template>
  <article>
    <h2>Category : {{this.category}} </h2>
      <section v-if="errors">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
      </section>
      <section v-else class="row top-buffer" v-for="i in Math.ceil(categoryArray.length / 2)" v-bind:key="i">
        <section class="col-sm-4" v-for="(item) in categoryArray.slice((i - 1) * 2, i * 2)" v-bind:key="item">
        <section class="card">
          <h5 class="card-title">{{ item.id}} {{item.API}}</h5>
          <nav class="overlay">
            <p class="is-title">{{item.API}}</p>
            <span class="is-centered">
              <router-link exact :to="{ name: 'Description', params:{ link : item.Link}, query: { title: item.API , desc: item.Description , category:item.Category } }">
                Read More
              </router-link>
            </span>
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
  margin-top:20px;
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
export default {
  data () {
    return {
      category: '',
      categoryArray: [],
      errors: false
    }
  },
  mounted () {
    this.category = this.$route.query.category
    axios.get('https://api.publicapis.org/entries?category=' + encodeURIComponent(this.category))
      .then(response => {
        response.data.entries.forEach(elem => {
          this.categoryArray.push(elem)
        })
      })
      .catch(e => {
        this.errors = true
      })
  }
}
</script>
