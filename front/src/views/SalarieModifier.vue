<template lang="html">
    <div class="container">
        <div class="text-center">
            <Title title="Modifier un salarié"/>            
        </div>
        <EditSalarieForm/>
    </div>
</template>

<script>
import EditSalarieForm from '@/components/EditSalarieForm.vue'
import Title from '@/utils/Title.vue'

export default {
  components: {
    EditSalarieForm,
    Title
  }
}
</script>

<style lang="css" scoped>
</style>
