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

  <Sidebar :is-open="isSidebarOpen" />

  <router-view />
</template>