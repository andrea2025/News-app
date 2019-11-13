<template>
  <div class="red-border">
    <div class="nav">
      <router-link :to="{ name: 'dashboard-user' }">User Dashboard</router-link>
      <router-link :to="{ name: 'dashboard-home' }">Dashboard Home</router-link>
    </div>
    <h1>Welcome to Dashboard</h1>
    <router-view />
    <footer>
      Dashboard Footer
    </footer>
  </div>
</template>