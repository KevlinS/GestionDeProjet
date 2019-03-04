<template lang="html">
    <div class="client-listing container">
        <Title title="LISTE DES CLIENTS"/>
        <ClientsListComponen/>
    </div>
</template>

<script>
import ClientsListComponen from '@/components/ClientsListComponen.vue'
import Title from '@/utils/Title.vue'
export default {

  components: {
    ClientsListComponen,
    Title
  }
}
</script>

<style lang="css" scoped>
</style>
