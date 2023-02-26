<template>
  <div class="home">
    <section class="hero is-medium is-primary mb-6">
      <div class="hero-body has-text-centered">
        <p class="title mb-10">
          Welcome to StyleSwap
        </p>
        <p class="subtitle">
          The best clothes store online
        </p>
      </div>
    </section>
    <div class="columns is-multiline">
      <div class="column is-12">
        <h2 class="is-size-2 has-text-centered">Latest products</h2>
      </div>

      <ProductBox
          v-for="product in latestProducts"
          v-bind:key="product.id"
          v-bind:product="product"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ProductBox from "@/components/ProductBox.vue";

export default {
  name: 'HomeView',
  data() {
    return {
      latestProducts: []
    }
  },
  components: {
    ProductBox
  },
  mounted() {
    this.getLatestProducts()

    document.title = 'Home | StyleSwap'
  },
  methods: {
    async getLatestProducts() {
      this.$store.commit('setIsLoading', true)
      await axios.get('/api/v1/latest-products/')
          .then(response => {
            this.latestProducts = response.data
          })
          .catch(error => {
            console.log(error)
          })
      this.$store.commit('setIsLoading', false)
    }
  }

}
</script>

<style scoped>
.image {
  margin-top: -1.25rem;
  margin-left: -1.25rem;
  margin-right: -1.25rem;
}
</style>