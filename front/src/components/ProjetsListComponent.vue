<template lang="html">
    <div class="projet-list">
      
        <table class="table">
            <tr>
                <th>Nom du projet</th>
                <th>Description du projet</th>
                <th>Le statut</th>
            </tr>
            <tr v-for="projet in projets">
                <td>{{projet.nomProjet}}</td>
                <td>{{projet.descriptionProjet}}</td>
                <td>{{projet.statut}}</td> 
               
               <router-link :to="`/projet-detail/${projet._id}`">detail</router-link> |
               <router-link :to="`/projet-modifier/${projet._id}`">modifier</router-link> |
               <router-link :to="`/projet-supprimer/${projet._id}`">supprimer</router-link>
               
            </tr>
        </table>
        <router-link to="/create" tag="button"  class="btn btn-primary">Créer un projet</router-link>
    </div>
</template>

<script>

import ProjetsService from '../services/ProjetsService'


export default {
  data () {
    return {
      projets: []
    }
  },
  created () {
    ProjetsService.getProjets()
      .then((data) => {
        this.projets = data
      })
      .catch(error => { console.log(error) })

    let paramsId = this.$route.params.id
    console.log(paramsId)
    ProjetsService.getProjet(paramsId)
      .then((data) => {
        this.projet = data
        console.log(this.projet)
      })
      .catch(error => {
        console.log(error)
      })
  }

}
</script>
