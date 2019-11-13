<template>
  <div id="nav" class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{ name: 'contact' }">Contact Us</router-link> |
      <a href="/admin">Admin</a> |
      <router-link :to="{ name: 'service' }">Service</router-link>
    </div>
</template>
<style scoped>
.nav {
  width: 100%;
  background: #bdbdbd;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
}
</style>