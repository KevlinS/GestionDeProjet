<template lang="html">

   <form @submit.prevent="validateBeforeSubmit" novalidate >
        <div :class="{'form-group': true, 'has-error': errors.has('nomProjet') }">
              <label>Nom du projet</label>
              <input type="text" v-validate="'required'"  :class="{ 'input form-control': true }" v-model="nomProjet" name="nomProjet"/>
              <p class="text-danger" v-if="errors.has('nomProjet')">{{ errors.first('nomProjet') }}</p>
        </div>

        <div :class="{'form-group': true, 'has-error': errors.has('descriptionProjet') }">
              <label>Description du projet</label>
              <input type="text" v-validate="'required'" :class="{'input form-control': true }" v-model="descriptionProjet" name="descriptionProjet"/>
              <p class="text-danger" v-if="errors.has('descriptionProjet')">{{ errors.first('descriptionProjet') }}</p>
        </div>
        
        <div :class="{'form-group': true, 'has-error': errors.has('dateDebut') }">
              <label>Date début</label>
              <input type="date" v-validate="'required'" :class="{'input form-control': true }" v-model="dateDebut" name="dateDebut"/>
              <p class="text-danger" v-if="errors.has('dateDebut')">{{ errors.first('dateDebut') }}</p>
        </div>

        <div :class="{'form-group': true, 'has-error': errors.has('dateFin') }">
              <label>Date fin</label>
              <input type="date" v-validate="'required'" :class="{'input form-control': true }" v-model="dateFin" name="dateFin"/>
              <p class="text-danger" v-if="errors.has('dateFin')">{{ errors.first('dateFin') }}</p>
        </div>

        <div :class="{'form-group': true, 'has-error': errors.has('montantTotalProjet') }">
              <label>Montant total du projet</label>
              <input type="number" v-validate="'required'" :class="{'input form-control': true }" v-model="montantTotalProjet" name="montantTotalProjet"/>
              <p class="text-danger" v-if="errors.has('montantTotalProjet')">{{ errors.first('montantTotalProjet') }}</p>
        </div>

        <div :class="{'form-group': true, 'has-error': errors.has('statut') }">
              <label>Statut</label>
              <select v-model="statut" v-validate="'required'" :class="{'input form-control': true }" name="statut">
                  <option disabled value="">Choisissez</option>
                  <option>annulé</option>
                  <option>terminé</option>
                  <option>en cours de réalisation</option>
                  <option>prospect</option>
              </select>
              <p class="text-danger" v-if="errors.has('statut')">{{ errors.first('statut') }}</p>
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
      return this.nomProjet && this.descriptionProjet && this.dateDebut && this.dateFin && this.montantTotalProjet && this.statut;
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
          alert('Modifié avec succès!');
          return;
        }
      });
    },
    formData: function (nomProjet, descriptionProjet, dateDebut, dateFin, montantTotalProjet, statut) {
      this.$validator.validateAll().then((result) => {
        if (result) {
          ProjetsService.editProjet(this.$route.params.id, nomProjet, descriptionProjet, dateDebut, dateFin, montantTotalProjet, statut)
          return;
        }
      });
    }
  }
  
}
</script>

<style lang="css" scoped>
</style>
