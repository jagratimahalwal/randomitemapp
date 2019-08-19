<template>
    <div>
        <h2>Category Wise Card </h2>
        <section v-if="errors">
            <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </section>
        <section v-else class="row top-buffer" v-for="i in Math.ceil(categoryArray.length / 2)" v-bind:key="i"> 
          <section class="col-sm-4" v-for="(item,id) in categoryArray.slice((i - 1) * 2, i * 2)" v-bind:key="item.id">
          <section class="card">
          <h5 class="card-title">{{ item.id}} {{item.API}}</h5>
          <router-link exact :to="{ name: 'Description', params:{ link : item.Link}, query: { title: item.API , desc: item.Description , category:item.Category } }" >Description</router-link>
    </section>
  </section>
</section>

    </div>
</template>

<style scoped>
div{
    margin-left: 100px
}
.top-buffer{
  margin-top:20px; 
}
</style>

<script>
import axios from 'axios'; 

export default {
   data(){
       return {
       category:'',
       categoryArray:[],
       errors: false
       }
   },
  mounted(){
    this.category= encodeURIComponent(this.$route.query.category);
    axios.get('https://api.publicapis.org/entries?category='+this.category)
    .then(response => {
     response.data.entries.forEach(elem => {
          this.categoryArray.push(elem);
      });
    })
    .catch(e => {
        this.errors = true
    })
  }
}
</script>