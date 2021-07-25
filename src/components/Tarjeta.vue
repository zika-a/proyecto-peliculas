<template>
  <router-link
    :to="`/pelicula/detalle/${idx}`"
    class=" shadow p-3 my-3 text-decoration-none contenedor text-secondary border bg-light"
  >
    <h6>{{ idx }}</h6>
    <h4 class="text-primary">{{ title }}</h4>
    <h4>{{ director }}</h4>
    <h5>{{ fecha }}</h5>
    <h5 v-if="score > 80">{{ score }}</h5>
  </router-link>
</template>

<script>
export default {
  name: "Tarjeta",
  props: {
    idx: String,
    title: String,
    director: String,
    fecha: String,
    score: Number,
  },
};
</script>

<style scoped>
.contenedor {
  border: 1px solid red;
  display: inline-block;
  width: 300px;
  margin-left: 20px;
  border-radius: 15px;
}
</style>
