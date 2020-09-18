<template>
  <div class="profile">
    <hr />
    <h1>Profiles:</h1>

    <b-button variant="primary" @click="toHome">Back</b-button>

    <div  class="configuracao">
      <Editar></Editar>
    </div>
  </div>
</template>

<script>
import Editar from './Editar.vue'
export default {
  props: ["id"],
  data() {
    return {
   
    };
  },
  components:{
    Editar
  },
  // watch: {
  //   $route(to,from){
  //     this.id = to.params.id
  //   },
  // },
  methods: {
    toHome() {
      this.$router.push("/");
    },
    editar() {
      this.config = !this.config;
    },

  },
};
</script>

<style>
</style>