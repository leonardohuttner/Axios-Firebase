<template>
    
  <div class="Cadastro">

      <b-alert show dismissible :variant='mensagem.tipo' v-for='mensagem in mensagens' :key='mensagem.texto'>{{mensagem.texto}}</b-alert>
      <hr>
      <h2>Cadastro:</h2>
    <b-form-group label='Username:'>
      <b-card>
        <b-input type="text" placeholder='Username' v-model="usuario.nome"></b-input>
      </b-card>
    </b-form-group>
    <b-form-group label='Password:'>
      <b-card>
        <b-input type="password" v-model='usuario.senha' placeholder='Password'></b-input>
      </b-card>
    </b-form-group>
    <b-button size='lg' variant='success' @click="cadastrar">Cadastrar</b-button>
  </div>
</template>

<script>


export default {
    data() {
        return {
            mensagens:[],
            usuario:{
                nome:'',
                senha:''
            },
        }
    },
    methods: {
        cadastrar(){
            this.$http.post('usuarios.json',this.usuario)
            .then(() => this.limpar())
            .then(() => {
                this.mensagens.push({
                    texto:'Sucess',
                    tipo:'success'
                })
                // eslint-disable-next-line
            }).catch(err => {
                this.mensagens.push({
                    texto:'Failed',
                    tipo:'danger'
                })
            })
            },
        limpar(){
            this.usuario.nome='';
            this.usuario.senha='';
        },
    },
    computed: {
        
    },
};
</script>

<style>
</style>