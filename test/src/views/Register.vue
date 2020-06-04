<template>
  <div class="home">
    <form v-on:submit.prevent="loginUser">
      <p>
        <label for="username">Username:</label>
        <input type="text" id="username" class="form-control" v-model="txtUsername" />
      </p>
      <p>
        <label for="passwordk">Password:</label>
        <input type="number" id="password" class="form-control" v-model="txtPassword" />
      </p>
      <p>
        <label for="email">Email:</label>
        <input type="txt" id="email" class="form-control" v-model="txtEmail" />
      </p>
      <p>
        <button to="/Login" type="submit">Login</button>
      </p>
    </form>
  </div>
</template>