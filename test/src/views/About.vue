<template>
  <div class="home">
    <select>
      <option v-for="pack in packages" :key="pack.id" :value="pack.id">
        <table>
          <tr>
            <th>ID:{{pack.id}}</th>
            <th>Type:{{pack.typePack}}</th>
            <th>Weight:{{pack.weightPack}}</th>
            <th>Size:{{pack.sizePack}}</th>
            <th>Start:{{pack.startPack}}</th>
            <th>Finish:{{pack.finishPack}}</th>
            <th>Value:{{pack.valuePack}}</th>
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
        await this.$store.dispatch("fetchPack");
        this.packages = this.getPackages;
      } catch (err) {
        alert(err);
      }
    }
  }
};
</script>