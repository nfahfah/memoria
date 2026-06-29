<template>
  <section class="home">

    <div class="scrapbook-card">

      <p class="small-title">
        Welcome to
      </p>

      <h1>Memoria</h1>

      <p class="tagline">
        Every memory begins somewhere.
      </p>

    </div>

  </section>

  <AcademicsSection />

<NUSMSSection />

<PBMUKSSection />

<CCAsSection />

<EatsSection />

<MusollahsSection />

</template>

<script setup>

import AcademicsSection from "../nus-section/AcademicsSection.vue";
import NUSMSSection from "../nus-section/NUSMSSection.vue";
import PBMUKSSection from "../nus-section/PBMUKSSection.vue";
import CCAsSection from "../nus-section/CCAsSection.vue";
import EatsSection from "../nus-section/EatsSection.vue";
import MusollahsSection from "../nus-section/MusollahsSection.vue";

</script>

<style scoped>

.home{

    min-height:100vh;

    padding-top:120px;

    display:flex;

    justify-content:center;

}

.scrapbook-card{

    width:700px;

    background:white;

    border-radius:28px;

    padding:60px;

    box-shadow:var(--shadow);

    text-align:center;

}

.small-title{

    color:#777;

    letter-spacing:3px;

    text-transform:uppercase;

}

h1{

    font-family:"Luckiest Guy", cursive;

    font-size:5rem;

    margin:20px 0;

    color:var(--primary);

}

.tagline{

    font-size:1.2rem;

    color:#666;

}

/* =========================
   Tablet
========================= */
@media (max-width: 768px) {

.home {
  padding-top: 90px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.scrapbook-card {
  width: 100%;
  max-width: 600px;
  padding: 45px;
}

h1 {
  font-size: 3.4rem;
}

}

/* =========================
   Mobile Phones
========================= */
@media (max-width: 480px) {

.home {
  padding-top: 70px;
  padding-left: 1rem;
  padding-right: 1rem;
}

.scrapbook-card {
  width: 100%;
  padding: 32px 24px;
  border-radius: 20px;
}

h1 {
  font-size: 2.4rem;
  margin: 14px 0;
}

.small-title {
  font-size: 0.85rem;
  letter-spacing: 2px;
}

.tagline {
  font-size: 1rem;
}

}

</style>