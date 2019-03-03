<template lang="html">

   <form @submit.prevent="validateBeforeSubmit" novalidate >
            <div :class="{'form-group': true, 'has-error': errors.has('nomSalarie') }">
              <label>Nom salarié</label>
              <input type="text" v-validate="'required'"  :class="{ 'input form-control': true }" v-model="nomSalarie" name="nomSalarie"/>
              <p class="text-danger" v-if="errors.has('nomSalarie')">{{ errors.first('nomSalarie') }}</p>
            </div>

            <div :class="{'form-group': true, 'has-error': errors.has('prenomSalarie') }">
              <label>Prénom salarié</label>
              <input type="text" v-validate="'required'" :class="{'input form-control': true }" v-model="prenomSalarie" name="prenomSalarie"/>
              <p class="text-danger" v-if="errors.has('prenomSalarie')">{{ errors.first('prenomSalarie') }}</p>
            </div>
        
            <div :class="{'form-group': true, 'has-error': errors.has('usernameSalarie') }">
              <label>Username salarié</label>
              <input type="text" v-validate="'required'" :class="{'input form-control': true }" v-model="usernameSalarie" name="usernameSalarie"/>
              <p class="text-danger" v-if="errors.has('usernameSalarie')">{{ errors.first('usernameSalarie') }}</p>
            </div>

            <div :class="{'form-group': true, 'has-error': errors.has('dateDeNaissance') }">
              <label>Date de naissance</label>
              <input type="date" v-validate="'required'" :class="{'input form-control': true }" v-model="dateDeNaissance" name="dateDeNaissance"/>
              <p class="text-danger" v-if="errors.has('dateDeNaissance')">{{ errors.first('dateDeNaissance') }}</p>
            </div>

            <div :class="{'form-group': true, 'has-error': errors.has('adresseSalarie') }">
              <label>Adresse salarié</label>
              <input type="text" v-validate="'required'" :class="{'input form-control': true }" v-model="adresseSalarie" name="adresseSalarie"/>
              <p class="text-danger" v-if="errors.has('adresseSalarie')">{{ errors.first('adresseSalarie') }}</p>
            </div>

            <div :class="{'form-group': true, 'has-error': errors.has('telephoneSalarie') }">
              <label>Téléphone salarié</label>
              <input type="number" v-validate="'required'" :class="{'input form-control': true }" v-model="telephoneSalarie" name="telephoneSalarie"/>
              <p class="text-danger" v-if="errors.has('telephoneSalarie')">{{ errors.first('telephoneSalarie') }}</p>
            </div>

            <div :class="{'form-group': true, 'has-error': errors.has('mailSalarie') }">
              <label>Email salarié</label>
              <input type="email" v-validate="'required'" :class="{'input form-control': true }" v-model="mailSalarie" name="mailSalarie"/>
              <p class="text-danger" v-if="errors.has('mailSalarie')">{{ errors.first('mailSalarie') }}</p>
            </div>

            <div :class="{'form-group': true, 'has-error': errors.has('posteSalarie') }">
              <label>poste</label>
              <select v-model="posteSalarie" v-validate="'required'" :class="{'input form-control': true }" name="posteSalarie">
                  <option disabled value="">Choisissez</option>
                  <option>chef de projet</option>
                  <option>développeur</option>
                  <option>commercial</option>
                  <option>intégrateur</option>
              </select>
              <p class="text-danger" v-if="errors.has('posteSalarie')">{{ errors.first('posteSalarie') }}</p>
            </div>
        
          <button :disabled="errors.any()" class="btn btn-primary" v-on:click="formData(nomSalarie, prenomSalarie, usernameSalarie, dateDeNaissance, adresseSalarie, telephoneSalarie, mailSalarie, posteSalarie)">Créer</button>
         
      </form>

</template>

<script>
import SalariesService from '../services/SalariesService.vue';


export default {
  data () {
    return {
      nomSalarie: '',
      prenomSalarie: '',
      usernameSalarie: '',
      dateDeNaissance: '',
      adresseSalarie: '',
      telephoneSalarie: '',
      mailSalarie: '',
      posteSalarie: ''
    }
  },
  computed: {
  isComplete() {
      return this.nomSalarie && this.prenomSalarie && this.usernameSalarie && this.dateDeNaissance && this.adresseSalarie && this.telephoneSalarie && this.mailSalarie && this.posteSalarie;
    }
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          alert('Créé avec succès!');
          return;
        }
      });
    },
    formData: function (nomSalarie, prenomSalarie, usernameSalarie, dateDeNaissance, adresseSalarie, telephoneSalarie, mailSalarie, posteSalarie) {
      SalariesService.createSalarie(nomSalarie, prenomSalarie, usernameSalarie, dateDeNaissance, adresseSalarie, telephoneSalarie, mailSalarie, posteSalarie)  
    }
  }
  
}
</script>

<style lang="css" scoped>
</style>
