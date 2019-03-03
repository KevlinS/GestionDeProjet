<template lang="html">

   <form @submit.prevent="validateBeforeSubmit" novalidate >
      <div :class="{'form-group': true, 'has-error': errors.has('nomEntreprise') }">
              <label>Nom de l'entreprise</label>
              <input type="text" v-validate="'required'"  :class="{ 'input form-control': true }" v-model="nomEntreprise" name="nomEntreprise"/>
              <p class="text-danger" v-if="errors.has('nomEntreprise')">{{ errors.first('nomEntreprise') }}</p>
            </div>
     <div :class="{'form-group': true, 'has-error': errors.has('nomClient') }">
              <label>Nom client</label>
              <input type="text" v-validate="'required'" :class="{'input form-control': true }" v-model="nomClient" name="nomClient"/>
              <p class="text-danger" v-if="errors.has('nomClient')">{{ errors.first('nomClient') }}</p>
              </div>
        
          <div :class="{'form-group': true, 'has-error': errors.has('prenomClient') }">
              <label>Prénom client</label>
              <input type="text" v-validate="'required'" :class="{'input form-control': true }" v-model="prenomClient" name="prenomClient"/>
              <p class="text-danger" v-if="errors.has('prenomClient')">{{ errors.first('prenomClient') }}</p>
              </div>

          <div :class="{'form-group': true, 'has-error': errors.has('adresseClient') }">
              <label>Adresse client</label>
              <input type="text" v-validate="'required'" :class="{'input form-control': true }" v-model="adresseClient" name="adresseClient"/>
              <p class="text-danger" v-if="errors.has('adresseClient')">{{ errors.first('adresseClient') }}</p>
              </div>

          <div :class="{'form-group': true, 'has-error': errors.has('telephoneClient') }">
              <label>Téléphone client</label>
              <input type="number" v-validate="'required'" :class="{'input form-control': true }" v-model="telephoneClient" name="telephoneClient"/>
              <p class="text-danger" v-if="errors.has('telephoneClient')">{{ errors.first('telephoneClient') }}</p>
              </div>

            <div :class="{'form-group': true, 'has-error': errors.has('mailClient') }">
              <label>Email client</label>
              <input type="email" v-validate="'required'" :class="{'input form-control': true }" v-model="mailClient" name="mailClient"/>
              <p class="text-danger" v-if="errors.has('mailClient')">{{ errors.first('mailClient') }}</p>
              </div>

          <div :class="{'form-group': true, 'has-error': errors.has('secteurActivite') }">
              <label>Secteur d'activité</label>
              <input type="text" v-validate="'required'" :class="{'input form-control': true }" v-model="secteurActivite" name="secteurActivite"/>
              <p class="text-danger" v-if="errors.has('secteurActivite')">{{ errors.first('secteurActivite') }}</p>
              </div>
        
          <button :disabled="errors.any()" class="btn btn-primary" v-on:click="formData(nomEntreprise, nomClient, prenomClient, adresseClient, telephoneClient, mailClient, secteurActivite)">Modifier</button>
         
      </form>

</template>

<script>
import ClientsService from '../services/ClientsService.vue';


export default {
  data () {
    return {
      nomEntreprise: '',
      nomClient: '',
      prenomClient: '',
      adresseClient: '',
      telephoneClient: '',
      mailClient: '',
      secteurActivite: ''
    }
  },
  computed: {
  isComplete() {
      return this.nomEntreprise && this.nomClient && this.prenomClient && this.adresseClient && this.telephoneClient && this.mailClient && this.secteurActivite;
    }
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
    formData: function (nomEntreprise, nomClient, prenomClient, adresseClient, telephoneClient, mailClient, secteurActivite) {
      ClientsService.createClient(nomEntreprise, nomClient, prenomClient, adresseClient, telephoneClient, mailClient, secteurActivite)  
    }
  }
  
}
</script>

<style lang="css" scoped>
</style>
