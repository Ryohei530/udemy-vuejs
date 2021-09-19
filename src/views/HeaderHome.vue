<template>
  <nav>
    <h2>Home</h2>
    <router-link to="/" class="link" active-class="link--active" exact>Home</router-link>
    <router-link 
      :to="{ name: 'users-id-profile', params: { id: 1 }, query: { lang: 'ja', page: 2 }, hash: '#next-user' }" 
      class="link"
      active-class="link--active"
    >Users</router-link>
    <button v-on:click="increment(2)">+1</button>
    <button v-on:click="decrement(2)">-1</button>
  </nav>
</template>

<script>
  // import { mapMutations } from 'vuex';
  import { mapActions } from 'vuex';

  export default {
    methods: {
      ...mapActions("count", ["increment", "decrement"]),
    }
  };
</script>

<style scoped>
  .link {
    margin-right: 10px;
  }
  .link--active {
    font-size: 20px;
    color: black;
    text-decoration: none;
  }
</style>