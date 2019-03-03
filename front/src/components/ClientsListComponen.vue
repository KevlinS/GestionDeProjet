<template lang="html">
    <div class="client-list">
      
        <table class="table">
            <tr>
                <th>Nom de l'entreprise</th>
                <th>Nom client</th>
                <th>Prénom client</th>
            </tr>
            <tr v-for="client in clients">
                <td>{{client.nomEntreprise}}</td>
                <td>{{client.nomClient}}</td>
                <td>{{client.prenomClient}}</td> 
               
               <router-link :to="`/client-detail/${client._id}`">detail</router-link> |
               <router-link :to="`/client-modifier/${client._id}`">modifier</router-link> |
               <router-link :to="`/client-supprimer/${client._id}`">supprimer</router-link>
               
            </tr>
        </table>
        <router-link to="/create-client" tag="button"  class="btn btn-primary">Créer un client</router-link>
    </div>
</template>

<script>

import ClientsService from '../services/ClientsService'


export default {
  data () {
    return {
      clients: []
    }
  },
  created () {
    ClientsService.getClients()
      .then((data) => {
        this.clients = data
      })
      .catch(error => { console.log(error) })

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
