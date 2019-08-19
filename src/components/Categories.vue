<template>
  <div>
    <h1>Categories</h1>
    <section v-if="errors">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>

    <ul v-if="categories && categories.length">
    <li v-for="(category,id) of categories" :key="category.id">
      <router-link exact :to="{ name: 'CategoryWise',  query: { category:category } }" >{{category}}</router-link>
      
    </li>
  </ul>
  </div>
</template>

<style scoped>
h1 {
  color: rgb(24, 26, 24)
}
div{
  margin-left: 100px
}
</style>

<script>
import axios from 'axios'; 

export default {
  data(){
    return{
      categories:[],
      errors: false
    }
  },
  mounted(){
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