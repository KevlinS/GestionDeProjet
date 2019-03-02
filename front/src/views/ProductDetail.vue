<template lang="html">
    <div class="product-detail">
        <p>{{projet.nomProjet}}</p>
        <p>{{projet.descriptionProjet}}</p>
        <p>{{projet.statut}}</p>
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
    ProjetsService.getProjet(paramsId)
      .then((data) => {
        this.product = data
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
