<template>
  <div class="validacao">
      <b-card>
      <h1>Login</h1>
      <b-input type="text" placeholder="Email" v-model="email" ></b-input>
      <b-input type="password" placeholder="Senha" class="mt-2" v-model="senha"></b-input>
      <b-button variant="success" @click="Login">Registrar</b-button>
      <span>
        <router-link to="/signup" >Crie uma conta</router-link>
      </span>
  </b-card>
  </div>
</template>

<script>
export default {
data() {
  return {
    email:'',
    senha:'',
  }
},
methods: {
  login(){
    firebase.auth().signInWithEmailAndPassword(this.email,this.senha)
    .then((user) => {
      this.$router.replace('edit')
      alert(`Bem vindo ${{email}}`)
    },(err) => {
      alert('Não foi possivel fazer login')
    });
  }
}
}
</script>

<style>

</style>