<template lang="html">
    <div class="container">
        <div class="text-center">
            <Title title="Modifier un projet"/>            
        </div>
        <EditProjetForm/>
    </div>
</template>

<script>
import EditProjetForm from '@/components/EditProjetForm.vue'
import Title from '@/utils/Title.vue'

export default {
  components: {
    EditProjetForm,
    Title
  }
}
</script>

<style lang="css" scoped>
</style>
