<template lang="html">
    <div class="projet-listing container">
        <Title title="LISTES DES PROJETS"/>
        <ProjetsListComponent/>
    </div>
</template>

<script>
import ProjetsListComponent from '@/components/ProjetsListComponent.vue'
import Title from '@/utils/Title.vue'
export default {

  components: {
    ProjetsListComponent,
    Title
  }
}
</script>

<style lang="css" scoped>
</style>
