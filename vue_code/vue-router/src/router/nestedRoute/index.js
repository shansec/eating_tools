const nestedRoutes = [
  {
    path: "/nestedHome",
    component: () => import("@/views/nestedRoute/index.vue"),
    children: [
      {
        path: "child1",
        name: "nestedChild1",
        component: () => import("@/views/nestedRoute/components/child1.vue"),
      },
      {
        path: "child2",
        name: "nestedChild2",
        component: () => import("@/views/nestedRoute/components/child2.vue"),
      },
    ],
  },
];
export default nestedRoutes;
