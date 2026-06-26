<script setup>
import { ref } from "vue";

import TopBar from "./components/TopBar.vue";
import Sidebar from "./components/Sidebar.vue";

import HomeSection from "./pages/HomeSection.vue";
import PreCampSection from "./pages/PreCampSection.vue";
import CampGuideSection from "./pages/CampGuideSection.vue";
import NUSGuideSection from "./pages/NUSGuideSection.vue";

const isSidebarOpen = ref(false);

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}
</script>

<template>
  <TopBar @toggle-sidebar="toggleSidebar" />
  <Sidebar :is-open="isSidebarOpen" />
  <HomeSection />
  <PreCampSection />
  <CampGuideSection />
  <NUSGuideSection />
</template>

