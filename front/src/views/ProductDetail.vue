<template lang="html">
    <div class="product-detail">
        <p>{{product.name}}</p>
        <p>{{product.username}}</p>
        <p>{{product.website}}</p>
    </div>
</template>

<script>
import ProductsService from '../services/ProductsService.vue'

export default {

  data () {
    return {
      product: []
    }
  },

  created () {
    let paramsId = this.$route.params.id
    console.log(paramsId)
    ProductsService.getProduct(paramsId)
      .then((data) => {
        this.product = data
        console.log(this.product)
      })
      .catch(error => {
        console.log(error)
      })
  }

}
</script>

<style lang="css" scoped>
</style>
