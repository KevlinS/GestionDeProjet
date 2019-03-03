<template lang="html">

   <form class="w-50 mx-auto">
     
          <div class="form-group">
              <label>Nom du projet</label>
              <input class="form-control" type="text" v-model="nomProjet">
          </div>
          <div class="form-group">
              <label>Description du projet</label>
              <input class="form-control" type="text" v-model="descriptionProjet" >
          </div>
          <div class="form-group">
              <label>Date début</label>
              <input class="form-control" type="date" v-model="dateDebut">
          </div>
          <div class="form-group">
              <label>Date fin</label>
              <input class="form-control" type="date" v-model="dateFin">
          </div>
          <div class="form-group">
              <label>Montant total du projet</label>
              <input class="form-control" type="number" v-model="montantTotalProjet">
          </div>
          <div class="form-group">
              <label>Statut</label>
              <input class="form-control" type="text" v-model="statut">
          </div>
          <button class="btn btn-primary" type="button" name="button" v-on:click="formData(nomProjet, descriptionProjet, dateDebut, dateFin, montantTotalProjet, statut)">Modifier</button>
      </form>

</template>

<script>
import ProjetsService from '../services/ProjetsService.vue'

export default {
  data () {
    return {
      projet: [],
      nomProjet: '',
      descriptionProjet: '',
      dateDebut: '',
      dateFin: '',
      montantTotalProjet: '',
      statut: ''
    }
  },
  created () {
    let paramsId = this.$route.params.id
    ProjetsService.getProjet(paramsId)
  },
  methods: {
    formData: function (nomProjet, descriptionProjet, dateDebut, dateFin, montantTotalProjet, statut) {
      ProjetsService.editProjet(this.$route.params.id, nomProjet, descriptionProjet, dateDebut, dateFin, montantTotalProjet, statut)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
