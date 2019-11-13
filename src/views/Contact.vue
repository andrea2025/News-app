<template>
  <h1>Contact Page</h1>
</template>

<script>
export default {
  name: 'Contact',
mounted() {
    setTimeout(() => { this.$router.push({ name: 'dashboard-user-single', params: {id: 500} }) }, 3000)
  }  
}
</script>