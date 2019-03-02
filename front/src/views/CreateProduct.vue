<template lang="html">
    <div class="container">
        <div class="text-center">
            <Title title="créer un produit"/>            
        </div>
        <CreateProductForm/>
    </div>
</template>

<script>
import CreateProductForm from '@/components/CreateProductForm.vue'
import Title from '@/utils/Title.vue'

export default {
  components: {
    CreateProductForm,
    Title
  }
}
</script>

<style lang="css" scoped>
</style>
