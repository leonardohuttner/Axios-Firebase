<template>
<div class="editar">
    <hr>
  <h1>Feed</h1>
  <b-card v-for="(foto,id) in fotos" :key="id">
    {{foto.titulo}}
    <img :src="foto.link" :alt="Fotos" style="width: 1000px;">
  </b-card>
  <b-button variant='primary' @click="toHome">Back</b-button>
</div>
</template>

<script>
export default {
  data() {
    return {
      fotos:[],
    }
  },
  created() {
    this.$http.get('fotos.json').then((res) => {
      this.fotos = res.data

    } )
    // this.$http.post('fotos.json',{
    //   link:'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    //   titulo:'teste',
    // })
  },
 methods: {
   toHome(){
     this.$router.push('/')
   }
 },
}
</script>

<style>

</style>