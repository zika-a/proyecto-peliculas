<template>
  <div class="container mt-3 text-secondary">
    <h1>Detalle de la película</h1>
    <h6>Id: {{ pelicula.id }}</h6>
    <h2 class="text-primary">Título: {{ pelicula.title }}</h2>
    <h3>Título original: {{ pelicula.original_title }}</h3>
    <p>Descripción: {{ pelicula.description }}</p>
    <h4>Director: {{ pelicula.director }}</h4>
    <h4>Año de lanzamiento: {{ pelicula.release_date }}</h4>
    <h4>Duración: {{ pelicula.running_time }}</h4>
    <h3>
      Score:
      <span :class="[isBigger() ? 'text-success':'text-warning']">{{ pelicula.rt_score }}</span
      >
    </h3>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import axios from "axios";
import { mapState, mapActions } from "vuex";

export default {
  name: "Detalle",
  components: {
    Header,
    Footer,
  },
  computed:{
    ...mapState(["pelicula"]),
  },
  methods: {
    ...mapActions(["getPelicula"]),
    isBigger(){
      return parseInt(this.pelicula.rt_score) >= 80; 
    }
  },
  mounted() {
    this.getPelicula(this.$route.params.idx);
  },
  
};
</script>
<style scoped>
.propio {
  height: 200%;
  width: 100%;
}
</style>
