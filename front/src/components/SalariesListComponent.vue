<template lang="html">
    <div class="salarie-list">
      
        <table class="table">
            <tr>
                <th>Nom salarié</th>
                <th>prénom salarié</th>
                <th>username salarié</th>
            </tr>
            <tr v-for="salarie in salaries">
                <td>{{salarie.nomSalarie}}</td>
                <td>{{salarie.prenomSalarie}}</td>
                <td>{{salarie.usernameSalarie}}</td> 
               
               <router-link :to="`/salarie-detail/${salarie._id}`">detail</router-link> |
               <router-link :to="`/salarie-modifier/${salarie._id}`">modifier</router-link> |
               <router-link :to="`/salarie-supprimer/${salarie._id}`">supprimer</router-link>
               
            </tr>
        </table>
        <router-link to="/create-salarie" tag="button"  class="btn btn-primary">Créer un salarié</router-link>
    </div>
</template>

<script>

import SalariesService from '../services/SalariesService'


export default {
  data () {
    return {
      salaries: []
    }
  },
  created () {
    SalariesService.getSalaries()
      .then((data) => {
        this.salaries = data
      })
      .catch(error => { console.log(error) })

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
