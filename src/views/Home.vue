<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
     <getForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import getForm from '@/components/getForm.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    getForm
  }
}
</script>
