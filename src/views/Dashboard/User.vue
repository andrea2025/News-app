<template>
<div class="green-border">
  <h1>Welcome to user dashboard</h1>
  <ul>
    <li>
      <router-link :to="{ name: 'dashboard-user-single', params: { id: '1' } }">
        1
      </router-link>
      <router-link :to="{ name: 'dashboard-user-single', params: {id: '2'}}">
        2
      </router-link>
      <router-link :to="{ name: 'dashboard-user-single', params: {id: '3'}}">
        3
      </router-link>
      <router-link :to="{ name: 'dashboard-user-single', params: {id: '4'}}">
        4
      </router-link>
      <router-link :to="{ name: 'dashboard-user-single', params: {id: '5'}}">
        5
      </router-link>
      <router-link :to="{ name: 'dashboard-user-single', params: {id: '6'}}">
        6
      </router-link>
      <router-link :to="{ name: 'dashboard-user-single', params: {id: '7'}}">
        7
      </router-link>
      <router-link :to="{ name: 'dashboard-user-single', params: {id: '8'}}">
        8
      </router-link>
    </li>
  </ul>
  <router-view />
</div>
</template>