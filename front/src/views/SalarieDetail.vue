<template lang="html">
    <div class="salarie-detail">
        <table class="table">
            <tr>
                <th>Nom salarié</th>
                <th>Prénom salarié</th>
                <th>Username salarié</th>
                <th>Date de naissance</th>
                <th>Adresse salarié</th>
                <th>Téléphone salarié</th>
                <th>Email salarié</th>
                <th>Poste salarié</th>
            </tr>
            <tr>
                <td>{{salarie.nomSalarie}}</td>
                <td>{{salarie.prenomSalarie}}</td>
                <td>{{salarie.usernameSalarie}}</td>
                <td>{{salarie.dateDeNaissance}}</td>
                <td>{{salarie.adresseSalarie}}</td>
                <td>{{salarie.telephoneSalarie}}</td>
                <td>{{salarie.mailSalarie}}</td>
                <td>{{salarie.posteSalarie}}</td>
            </tr>
        </table>
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
    SalariesService.getSalarie(paramsId)
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
