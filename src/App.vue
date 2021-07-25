<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Inicio from "./views/Inicio.vue";
export default {
  name: "App",
  components: {
    Inicio,
  },
  data() {
    return {};
  },
};
</script>
