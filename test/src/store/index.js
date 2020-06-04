import Vue from "vue";
import Vuex from "vuex";
import { packageService } from "../apis/packageService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    packages: [],
    users:[]
  },
  getters:{
    getPackages: state => state.packages,
    getUsers: state => state.users,
  },
  mutations: {
    setNewPackage(state, payload){
      state.packages = payload
    },
  },
  actions: {
    async fetchPack({ commit }) {
      commit("setNewPackage", await packageService.getPackageServ())
    },
  },
  
});
