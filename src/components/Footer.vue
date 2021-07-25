<template>
  <footer
    class="footer mt-auto py-3 bg-light fixed-bottom sombra position-relative"
  >
    <div class="container text-center">
      <a :href="git" target="_blank" class="text-muted text-decoration-none">
        &copy; Copyright 2021 - {{ name }}
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    git: {
      type: String,
      default: "#",
    },
  },
};
</script>

<style scoped>
.sombra {
  box-shadow: 0px -10px 10px #e0e0e0;
}
</style>
