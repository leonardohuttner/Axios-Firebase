<template>
  <div class="editar">
    
    <b-card class="mt-2" >
      <b-card>
        <b-alert show dismissible :variant='mensagem.tipo' v-for='mensagem in mensagens' :key='mensagem.texto'>{{mensagem.texto}}</b-alert>
        <b-input type="text" placeholder="Username" v-model="usuario.nome"></b-input>
        <b-input type="text" placeholder="Password" v-model="usuario.senha"></b-input>
        <b-button variant="success" @click="salvar">Salvar</b-button>
        <b-button variant="warning" @click="obterUsuarios" class="ml-2">Obter usuarios</b-button>
      </b-card>
      <b-list-group>
        <b-list-group-item v-for="(usuario,id) in usuarios" :key="id">
          <strong>Nome:</strong>
          {{usuario.nome}}
          <br />
          <strong>Senha:</strong>
          {{usuario.senha}}
          <br />
          <strong>id:</strong>
          {{id}}
          <br />
          <b-button variant="warning" class="ml-2" @click="carregar(id)">Carregar</b-button>
          <b-button variant="danger" class="ml-2" @click="excluir(id)">Excluir</b-button>
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensagens:[],
      usuarios: [],
      usuario:{
                nome:'',
                senha:''
            },
      modoEditar: true,
      id: null,
    };
  },
  methods: {
    salvar(){
      const metodo = this.id ? 'patch' : 'post'
      const finalUrl = this.id ? `/${this.id}.json` : '.json'
      this.$http[metodo](`/usuarios/${finalUrl}`,this.usuario)
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
    carregar(id){
        this.id = id
        this.usuario = {...this.usuarios[id]}
    },
    excluir(id){
        this.$http.delete(`/usuarios/${id}.json`).then(() => this.obterUsuarios())
    },
    limpar(){
            this.usuarios.nome='';
            this.usuarios.senha='';
            this.id=null
        },
    obterUsuarios() {
      this.$http.get("usuarios.json").then((res) => {
        this.usuarios = res.data;
        // eslint-disable-next-line
        console.log(this.usuarios);
      });
    },
  },
};
</script>

<style>
</style>