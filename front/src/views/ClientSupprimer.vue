<template lang="html">
    <div class="client-supprimer">
        <h1 align="center">Nom de l'entreprise : '{{client.nomEntreprise}}' à été supprimer</h1>
    </div>
</template>

<script>
import ClientsService from '../services/ClientsService.vue'

export default {

  data () {
    return {
      client: []
    }
  },

  created () {
    let paramsId = this.$route.params.id
    console.log(paramsId)
    ClientsService.deleteClient(paramsId)
      .then((data) => {
        this.client = data
        console.log(this.client)
      })
      .catch(error => {
        console.log(error)
      })
  }

}
</script>

<style lang="css" scoped>

</style>
