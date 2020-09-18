<template>
  <div id="app" class="container">
	<Menu></Menu>
	<router-view></router-view>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
export default {
	components:{
		Menu
	}
	}

</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 h2{
	text-align: center;
	margin: 50px;
}
</style>
