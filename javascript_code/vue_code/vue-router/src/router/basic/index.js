const basicRoutes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Basic/home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/Basic/about.vue"),
  },
];

export default basicRoutes;
