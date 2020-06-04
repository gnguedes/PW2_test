<template>
  <div class="home">
    <form v-on:submit.prevent="addPack">
      <label for="typePack">Tipo:</label>
      <select id="typePack" v-model="typePack">
        <option>Tipo1</option>
        <option>Tipo2</option>
        <option>Tipo3</option>
        <option>Tipo4</option>
      </select>
      <p>
        <label for="weightPack">Peso:</label>
        <input type="text" id="weightPack" class="form-control" v-model="weightPack" />
      </p>
      <p>
        <label for="sizePack">Tamanho:</label>
        <input type="number" id="sizePack" class="form-control" v-model="sizePack" />
      </p>
      <p>
        <label for="startPack">Origem:</label>
        <input type="text" id="startPack" class="form-control" v-model="startPack" />
      </p>
      <p>
        <label for="finishPack">Peso:</label>
        <input type="number" id="finishPack" class="form-control" v-model="finishPack" />
      </p>
      <p>
        <label for="valuePack">Valor:</label>
        <input type="number" id="valuePack" class="form-control" v-model="valuePack" />
      </p>
      <p>
        <button type="submit">Adicionar</button>
      </p>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";

export default {
  name: "Home",
  data: function() {
    return {
      packages: [],
      typePack: "",
      weightPack: "",
      sizePack: "",
      startPack: "",
      finishPack: "",
      valuePack: "",
      idPack:"",
    };
  },
  computed:{
    ...mapGetters(["getPackages"])
  },
  methods:{
    async getMyPackages(){
      try{
        await this.$store.dispatch("fetchPack")
        this.packages = this.getPackages
      }catch(err){
        alert(err)
      }
    },
    getLastId(){

    },

  },
  created(){
    this.getMyPackages();
  }

};
</script>
