<script setup></script>
<template>
  <div>
    <ul>
      <li>
        <router-link to="/routeMatchHome">home</router-link>
      </li>
      <li>
        <router-link to="/routeMatchAbout">about</router-link>
      </li>
      <li>
        <router-link to="/nestedHome">nestedHome</router-link>
      </li>
    </ul>
  </div>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
