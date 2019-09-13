<template>
  <article class='article-content'>
    <!-- h2 class='page-heading'><strong>Categories</strong></h2 -->
    <section v-if="errors">
      <p class='page-heading'>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>
    <ul v-if="categories && categories.length" class='display-list'>
    <li v-for="(category) of categories" :key="category">
      <router-link exact :to="{ name: 'CategoryWise',  query: { category:category } }" >{{category}}</router-link>
    </li>
    </ul>
  </article>
</template>

<style scoped>
.display-list{
  margin-top: 2%;
}

</style>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      categories: [],
      errors: false
    }
  },
  mounted () {
    axios.get('https://api.publicapis.org/categories')
      .then(response => {
        this.categories = response.data
      })
      .catch(e => {
        this.errors = true
      })
  }
}
</script>
