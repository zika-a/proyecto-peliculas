import { createRouter, createWebHistory } from "vue-router";
import Inicio from "../views/Inicio.vue";
import Detalle from "../views/Detalle.vue";

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Inicio,
  },
  {
    path: "/pelicula/detalle/:idx",
    name: "Detalle",
    component: Detalle,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
