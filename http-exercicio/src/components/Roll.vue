<template>
<div class="editar">
    <hr>
  <h1>Feed</h1>
  <b-button variant='primary' @click="toHome">Back</b-button>
</div>
</template>

<script>
export default {
 methods: {
   toHome(){
     this.$router.push('/')
   }
 },
}
</script>

<style>

</style>