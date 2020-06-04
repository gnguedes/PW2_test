<template>
  <div class="home">
    <select name id v-model="selectedBreed">
      <option v-for="pack in packages" :key="pack.id" :value="pack.id">
        <table>
          <tr>
            <th>ID:{{pack.id}}</th>
            <th>Type:{{pack.typePack}}</th>
            <th>Weight:{{pack.weight}}</th>
          </tr>
        </table>
      </option>
    </select>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";

export default {
  name: "Home",
  data: function() {
    return {
      packages: []
    };
  },
  computed: {
    ...mapGetters(["getPackages"])
  },
  methods: {
    async getMyPackages() {
      try {
        await this.$$store.dispatch("fetchPack");
        this.packages = this.getMyPackages;
      } catch (err) {
        alert(err);
      }
    }
  }
};
</script>