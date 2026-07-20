<script setup>
import { ref } from "vue";

import TopBar from "./components/TopBar.vue";
import Sidebar from "./components/Sidebar.vue";

const isSidebarOpen = ref(false);

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}
</script>

<template>
  <TopBar @toggle-sidebar="toggleSidebar" />

  <Sidebar
    :is-open="isSidebarOpen"
    @close-sidebar="isSidebarOpen = false"
  />

  <main
    class="content"
    @click="isSidebarOpen = false"
  >
  <router-view v-slot="{ Component, route }">
  <component :is="Component" :key="route.fullPath" />
</router-view>
  </main>
</template>