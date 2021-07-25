<template>
  <div>
    <Header :referencia="ref" :imagen="imagen" titulo="Peliculas"></Header>
    <div class="row row-cols-auto propio justify-content-evenly cuerpo">
      <Tarjeta
        v-for="num in ciclo"
        :key="num"
        idx="Este es el id"
        title="Este es el titulo"
        director="El director"
        fecha="30 - 10 - 2010"
        score="80"
      ></Tarjeta>
    </div>
    <Footer
      name="Ordóñez Benítez Abraham Alexis"
      git="https://github.com/zika-a"
    ></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import Tarjeta from "../components/Tarjeta.vue";
export default {
  name: "Inicio",
  components: {
    Footer,
    Header,
    Tarjeta,
  },
  data() {
    return {
      ciclo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      ref: "https://ghibliapi.herokuapp.com/#tag/Films",
      imagen: "https://ghibliapi.herokuapp.com/images/logo.svg",
    };
  },
};
</script>

<style scoped>
.uno {
  background-color: red;
}
.cuerpo {
  width: 100%;
}
</style>
