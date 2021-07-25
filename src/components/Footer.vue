<template>
  <footer class="footer  py-3 bg-light">
    <div class="text-center">
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
