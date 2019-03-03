<template lang="html">

   <form @submit.prevent="validateBeforeSubmit" novalidate >
      <div :class="{'form-group': true, 'has-error': errors.has('nomProjet') }">
              <label>Nom du projet</label>
              <input type="text" v-validate="'required'"  :class="{ 'input form-control': true }" v-model="nomProjet" name="nomProjet"/>
              <p class="text-danger" v-if="errors.has('nomProjet')">{{ errors.first('nomProjet') }}</p>
            </div>
     <div :class="{'form-group': true, 'has-error': errors.has('descriptionProjet') }">
              <label>Network Description</label>
              <input type="text" v-validate="'required'" :class="{'input form-control': true }" v-model="descriptionProjet" name="descriptionProjet"/>
              <p class="text-danger" v-if="errors.has('descriptionProjet')">{{ errors.first('descriptionProjet') }}</p>
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
        
          <button :disabled="errors.any()" class="btn btn-primary" v-on:click="formData(nomProjet, descriptionProjet, dateDebut, dateFin, montantTotalProjet, statut)">Modifier</button>
         
      </form>

</template>

<script>
import ProjetsService from '../services/ProjetsService.vue';


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
  computed: {
  isComplete() {
      return this.nomProjet && this.descriptionProjet;
    }
  },
  created () {
    let paramsId = this.$route.params.id
    ProjetsService.getProjet(paramsId)
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          alert('From Submitted!');
          return;
        }
      });
    },
    formData: function (nomProjet, descriptionProjet, dateDebut, dateFin, montantTotalProjet, statut) {
      ProjetsService.editProjet(this.$route.params.id, nomProjet, descriptionProjet, dateDebut, dateFin, montantTotalProjet, statut)
    }
  }
  
}
</script>

<style lang="css" scoped>
</style>
