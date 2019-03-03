<template lang="html">
    <div class="salarie-listing container">
        <Title title="Listing salaries"/>
        <SalariesListComponent/>
    </div>
</template>

<script>
import SalariesListComponent from '@/components/SalariesListComponent.vue'
import Title from '@/utils/Title.vue'
export default {

  components: {
    SalariesListComponent,
    Title
  }
}
</script>

<style lang="css" scoped>
</style>
