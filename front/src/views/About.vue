<template>

  <div class="about container">

        <Title title="this is an about page"/>
        <TextAbout/>

  </div>

</template>

<script>

import TextAbout from '@/components/TextAbout.vue'
import Title from '@/utils/Title.vue'

export default {
  components: {
    TextAbout,
    Title
  },
  data () {
    return {
      name: 'vincent',
      age: 21,
      adress: "1, rue de l'eglise",
      products: [
        { name: 'iphone X', price: 1000 },
        { name: 'iphone 8', price: 500 }
      ]
    }
  }
}

</script>
