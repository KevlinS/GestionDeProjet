<template lang="html">
    <div class="projet-supprimer">
        <h1 align="center">{{projet.nomProjet}} à été supprimer</h1>
    </div>
</template>

<script>
import ProjetsService from '../services/ProjetsService.vue'

export default {

  data () {
    return {
      projet: []
    }
  },

  created () {
    let paramsId = this.$route.params.id
    console.log(paramsId)
    ProjetsService.deleteProjet(paramsId)
      .then((data) => {
        this.projet = data
        console.log(this.projet)
      })
      .catch(error => {
        console.log(error)
      })
  }

}
</script>

<style lang="css" scoped>

</style>
