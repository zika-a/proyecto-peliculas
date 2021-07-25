import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    peliculas: [],
    pelicula:{},
    loading: false,
  },
  mutations: {
    SET_PELICULAS(state, data) {
      state.peliculas = data;
    },
    SET_PELICULA(state, data) {
      state.pelicula = data;
    },
    SET_LOADING(state, data) {
      state.loading = data;
    },
  },
  actions: {
    getPeliculas({ commit }) {
      commit("SET_LOADING", true);
      axios
        .get("https://ghibliapi.herokuapp.com/films")
        .then((response) => {
          commit("SET_PELICULAS", response.data);
        })
        .catch((error) => console.log(error))
        .finally(() => commit("SET_LOADING", false));
    },
    getPelicula({ commit }, id) {
      commit("SET_LOADING", true);
      axios
        .get(`https://ghibliapi.herokuapp.com/films/${id}`)
        .then((response) => {
          commit("SET_PELICULA", response.data);
        })
        .catch((error) => console.log(error))
        .finally(() => commit("SET_LOADING", false));
    },
  },
  modules: {},
});
