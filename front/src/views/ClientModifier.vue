<template lang="html">
    <div class="container">
        <div class="text-center">
            <Title title="Modifier un client"/>            
        </div>
        <EditClientForm/>
    </div>
</template>

<script>
import EditClientForm from '@/components/EditClientForm.vue'
import Title from '@/utils/Title.vue'

export default {
  components: {
    EditClientForm,
    Title
  }
}
</script>

<style lang="css" scoped>
</style>
