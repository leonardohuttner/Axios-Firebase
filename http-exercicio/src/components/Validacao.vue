<template>
  <div class="validacao">
      <b-card>
      <h1>Login</h1>
      <b-input type="text" placeholder="Email" v-model="email" ></b-input>
      <b-input type="password" placeholder="Senha" class="mt-2" v-model="senha"></b-input>
      <b-button variant="success" @click="Login" class="mr-4">Login</b-button>
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
    // eslint-disable-next-line
    firebase.auth().signInWithEmailAndPassword(this.email,this.senha)
    // eslint-disable-next-line
    .then((user) => {
      this.$router.replace('edit')
      // eslint-disable-next-line
      alert(`Bem vindo ${{email}}`)
      // eslint-disable-next-line
    },(err) => {
      alert('Não foi possivel fazer login')
    });
  }
}
}
</script>

<style>

</style>