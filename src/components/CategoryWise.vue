<template>
  <article class='article-content'>
    <h2 class='page-heading'>Category : {{this.category}} </h2>
      <section v-if="errors">
        <p class='page-heading'>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
      </section>
      <section id="diplay-items" v-else class="row top-buffer" v-for="i in Math.ceil(categoryArray.length / 2)" v-bind:key="i">
        <section class="col-sm-4" v-for="(item, index) in categoryArray.slice((i - 1) * 2, i * 2)" v-bind:key="index">
          <section class="card">
            <img class="card-img-top" src="@/assets/5.jpg" alt="Card image cap">
            <p class="card-title">{{item.API}}</p>
              <div class="card-body">
              <p class='text-center'>
                <router-link exact :to="{ name: 'Description', params:{ link : item.Link}, query: { title: item.API , desc: item.Description , category:item.Category } }">
                  Read More
                </router-link>
              </p>
              </div>
          </section>
        </section>
      </section>
  </article>
</template>

<style scoped>
.top-buffer{
  margin-top:20px;
}
#diplay-items{
  width: 90%;
  margin-left: 20%;
  margin-right: 20%
}

@media screen and (max-width:600px){
  /* For Small Screens */
  [class*="col-"] {
    width: 100%;
    border: 1px ;
    margin-bottom: 8px;
    margin-right: 15%;
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
    margin-right: 15%;;
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
