<template lang="html">
    <div class="salarie-supprimer">
        <h1 align="center">Nom salarié : '{{salarie.nomSalarie}}' à été supprimer</h1>
    </div>
</template>

<script>
import SalariesService from '../services/SalariesService.vue'

export default {

  data () {
    return {
      salarie: []
    }
  },

  created () {
    let paramsId = this.$route.params.id
    console.log(paramsId)
    SalariesService.deleteSalarie(paramsId)
      .then((data) => {
        this.salarie = data
        console.log(this.salarie)
      })
      .catch(error => {
        console.log(error)
      })
  }

}
</script>

<style lang="css" scoped>

</style>
