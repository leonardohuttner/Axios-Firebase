<template>
  <b-card>
      <h1>Cadastre-se</h1>
      <b-input type="text" placeholder="Email" v-model="email"></b-input>
      <b-input type="password" placeholder="Senha" class="mt-2" v-model="senha"></b-input>
      <b-button variant="success" @click="signUp">Registrar</b-button>
  </b-card>
</template>

<script>
import firebase from 'firebase'
export default {
data() {
    return {
        email:'',
        senha:'',
    }
},
methods: {
    signUp(){
        firebase.auth().createUserWithEmailAndPassword(this.email,this.senha).then((user) => {
            this.$router.replace('/')
        },(err)=>{
            alert("aconteceu algo inesperado." + err.message)
        })
    },
},
}
</script>

<style>

</style>