<template>
  <div class="bg-body">
    <Header :referencia="ref" :imagen="imagen" titulo="Peliculas"></Header>
    <div
      v-if="loading"
      class="spinner-border text-primary m-3"
      role="status"
    ></div>
    <div v-else class="row row-cols-auto propio justify-content-evenly cuerpo">
      <Tarjeta
        v-for="pelicula in peliculas"
        :key="pelicula.id"
        :idx="pelicula.id"
        :title="pelicula.title"
        :director="pelicula.director"
        :fecha="pelicula.release_date"
        :score="parseInt(pelicula.rt_score)"
      ></Tarjeta>
    </div>
    <Footer
      class="position-sticky"
      name="Ordóñez Benítez Abraham Alexis"
      git="https://github.com/zika-a"
    ></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import Tarjeta from "../components/Tarjeta.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "Inicio",
  components: {
    Footer,
    Header,
    Tarjeta,
  },
  computed: {
    ...mapState(["loading", "peliculas"]),
  },
  methods: {
    ...mapActions(["getPeliculas"]),
    vistaAgregar() {
      this.$router.push({ name: "Detalle" });
    },
  },
  mounted() {
    this.getPeliculas();
  },
  data() {
    return {
      ref: "https://ghibliapi.herokuapp.com/#tag/Films",
      imagen: "https://ghibliapi.herokuapp.com/images/logo.svg",
    };
  },
};
</script>

<style scoped>
.cuerpo {
  width: 100%;
}
</style>
