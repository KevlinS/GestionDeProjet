<template lang="html">
    <div class="client-detail">
        <table class="table">
            <tr>
                <th>Nom de l'entreprise</th>
                <th>Nom client</th>
                <th>Prénom client</th>
                <th>Adresse Client</th>
                <th>Téléphone Client</th>
                <th>Mail Client</th>
                <th>Secteur d'activité</th>
            </tr>
            <tr>
                <td>{{client.nomEntreprise}}</td>
                <td>{{client.nomClient}}</td>
                <td>{{client.prenomClient}}</td>
                <td>{{client.adresseClient}}</td>
                <td>{{client.telephoneClient}}</td>
                <td>{{client.mailClient}}</td>
                <td>{{client.secteurActivite}}</td>
            </tr>
        </table>
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
    ClientsService.getClient(paramsId)
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
