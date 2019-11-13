<template>
  <div id="app">
    <NavBar/>

    <div class="">
      <sideBar/>
     
      <!-- <router-view/> -->
    </div>
    
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
     <router-view/>


    <!-- <footer>
      <p>copyright &copy; 2019</p>
    </footer> -->
   
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'
//import sideBar from '@/components/sideBar.vue'

export default {
  name:'App',
  components:{
    NavBar
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.red-border {
  border:  2px solid red;
}
.green-border {
  border:  2px solid green;
}
</style>
