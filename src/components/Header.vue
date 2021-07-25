<template>
  <header class="position-sticky">
    <nav class="navbar navbar-light bg-light">
      <div class="container mx-auto">
        <a class="mx-auto navbar-brand" :href="referencia" target="_blank">
          <img
            :src="imagen"
            alt="Imagen de logo"
            width="100"
            height="30"
            class="d-inline-block align-text-top"
          />
          {{ titulo }}
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    imagen: {
      type: String,
      required: true,
    },
    titulo: String,
    referencia: String,
  },
  data() {
    return {};
  },
};
</script>
