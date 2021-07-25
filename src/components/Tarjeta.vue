<template>
  <div class="shadow-sm p-3 my-3 contenedor">
    <h3>{{ idx }}</h3>
    <h4>{{ title }}</h4>
    <h4>{{ director }}</h4>
    <h5>{{ fecha }}</h5>
    <h5>{{ score }}</h5>
  </div>
</template>

<script>
export default {
  name: "Tarjeta",
  props: {
    idx: String,
    title: String,
    director: String,
    fecha: String,
    score: String,
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
