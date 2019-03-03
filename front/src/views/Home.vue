<template>
  <div class="home container">
    <Title title="APPLICATION DE GESTION DE PROJET"/>
    <h3>Nombre de salariés dans l’agence : {{salaries.length}}</h3>
    <h3>Nombre de projets : {{projets.length}}</h3>
    <h3>Nombre de clients : {{clients.length}}</h3>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/utils/Title.vue';
import ProjetsService from '../services/ProjetsService';
import ClientsService from '../services/ClientsService';
import SalariesService from '../services/SalariesService';

export default {
  name: 'home',
  components: {
    Title
  },
  data () {
    return {
      projets: [],
      clients: [],
      salaries: []
    }
  },
  created () {
    ProjetsService.getProjets()
      .then((data) => {
        this.projets = data
      })
      .catch(error => { console.log(error) })
    
    ClientsService.getClients()
      .then((data) => {
        this.clients = data
      })
      .catch(error => { console.log(error) })

    SalariesService.getSalaries()
      .then((data) => {
        this.salaries = data
      })
      .catch(error => { console.log(error) })

  }
}
</script>
