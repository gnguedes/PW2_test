<template>
  <div class="home">
    <form >
      <p>
        <label for="username">Username:</label>
        <input type="text" id="username" class="form-control" v-model="txtUsername" />
      </p>
      <p>
        <label for="passwordk">Password:</label>
        <input type="number" id="password" class="form-control" v-model="txtPassword" />
      </p>
      <p>
        <button type="submit">Login</button>
        <button to="/register">Não tem conta? Clique aqui</button>
      </p>
    </form>
  </div>
</template>

<script>

import { mapGetters } from "vuex";
export default {
  name: "Login",
  data: function() {
    return {
      txtUsername :"",
      txtPassword : "",
    };
  },
  computed: {
    ...mapGetters(["getUsers"])
  },
};
</script>