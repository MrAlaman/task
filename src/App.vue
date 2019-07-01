<template>
  <div id="app">

    <router-view/>
    <div class="d-flex align-items-center justify-content-center">
      <router-link class='btn btn-primary ' to='/edit'>Edit</router-link>
      <router-link class='btn btn-primary ' to='/edit'>Add User</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>
#app {
  
}
.router-link-active {
  display: none;
}

</style>