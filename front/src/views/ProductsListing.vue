<template lang="html">
    <div class="product-listing container">
        <Title title="Listing produit"/>
        <ProductsListComponent/>
    </div>
</template>

<script>
import ProductsListComponent from '@/components/ProductsListComponent.vue'
import Title from '@/utils/Title.vue'
export default {

  components: {
    ProductsListComponent,
    Title
  }
}
</script>

<style lang="css" scoped>
</style>
