<template>
  <header class="topbar">

    <button class="train-btn" @click="emit('toggle-sidebar')">
      <img
        src="../assets/images/memoria-train.png"
        alt="Memoria Train"
      />
    </button>

    <img
      class="logo"
      src="../assets/images/memoria-logo.png"
      alt="Memoria Logo"
      @click="handleLogoClick"
      style="cursor: pointer;"
    />

  </header>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const emit = defineEmits(["toggle-sidebar"]);

const route = useRoute();
const router = useRouter();

// maps each page's route to the id of its landing/top section
const landingAnchors = {
  "/precamp": "precamp",
  "/camp-guide": "camp-guide-landing",
  "/nus-guide": "nus-guide-landing",
};

function handleLogoClick() {
  const path = route.path;

  if (path === "/") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const anchorId = landingAnchors[path];

  if (anchorId) {
    const target = document.getElementById(anchorId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
  }

  // fallback for any other page (e.g. Important Contacts) — just go home
  router.push("/");
}
</script>

<style scoped>
.topbar {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 80px;

  background: white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 2rem;

  box-sizing: border-box;

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);

  z-index: 1000;
}

.train-btn,
.menu-btn {
  background: none;
  border: none;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
}

.train-btn img {
  height: 40px;
  width: auto;
  animation: wiggle 0.5s ease-in-out infinite;
  margin-left: 30px;
}

@keyframes wiggle {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-8deg);
  }
  75% {
    transform: rotate(8deg);
  }
}

.logo {
  height: 80px;
  width: auto;
  align-items: center;
}


</style>