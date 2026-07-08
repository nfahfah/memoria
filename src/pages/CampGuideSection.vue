<template>
  <section id="camp-guide-landing" class="camp-page train-theme">

    <img
  :src="campGuideTitle"
  alt="Camp Guide"
  class="page-title-image camp-guide-desktop"
/>

<!-- Mobile -->
<img
  :src="campGuideTitleMobile"
  alt="Camp Guide"
  class="page-title-image camp-guide-mobile"
/>

    <p class="page-subtitle">
      All aboard! Follow the journey through Memoria.
    </p>
    <p class="sub-subtitle">
      Click the carriages to find out more about each day!
    </p>

    <div class="track-wrap">

      <div class="smoke-field">
        <span class="smoke s1"></span>
        <span class="smoke s2"></span>
        <span class="smoke s3"></span>
      </div>

      <div class="track-inner">

      <div class="train-row">

        <!-- engine, purely decorative -->
        <div class="engine">
          <img src="../assets/images/memoria-train.png" class="engine-img" alt="Train engine" />
        </div>

        <!-- carriages, these are the clickable ones -->
        <div
          class="carriage day1-carriage"
          @click="router.push('/camp-guide#day1')"
        >
          <img :src="day1Carriage" alt="Day 1" class="carriage-img" />
        </div>

        <div
          class="carriage day2-carriage"
          @click="router.push('/camp-guide#day2')"
        >
          <img :src="day2Carriage" alt="Day 2" class="carriage-img" />
        </div>

        <div
          class="carriage day3-carriage"
          @click="router.push('/camp-guide#day3')"
        >
          <img :src="day3Carriage" alt="Day 3" class="carriage-img" />
        </div>

        <div
          class="carriage sponsors-carriage"
          @click="router.push('/camp-guide#our-sponsors')"
        >
          <img :src="ourSponsorsCarriage" alt="Our Sponsors" class="carriage-img" />
        </div>

      </div>

      <div class="rail-track"></div>

    </div>
    </div>

  </section>

  <Day1Section />

  <Day2Section />

  <Day3Section />

  <OurSponsorsSection />

</template>

<script setup>
import { useRouter } from "vue-router";
import campHeader from "../assets/images/c.png";
import pinkBackground from "../assets/images/pink-background.png"
import day1Carriage from "../assets/images/day1-carriage.png";
import day2Carriage from "../assets/images/day2-carriage.png";
import day3Carriage from "../assets/images/day3-carriage.png";
import ourSponsorsCarriage from "../assets/images/our-sponsors.png";
import campGuideTitle from "../assets/images/c.png";      // desktop
import campGuideTitleMobile from "../assets/images/camp-guide-mobile.png"; // mobile

import Day1Section from "../c-section/Day1Section.vue";
import Day2Section from "../c-section/Day2Section.vue";
import Day3Section from "../c-section/Day3Section.vue";
import OurSponsorsSection from "../c-section/OurSponsorsSection.vue";

const router = useRouter();
</script>

<style scoped>

.camp-page{

    min-height:100vh;

    background-image: url("../assets/images/pink-background.png");

    padding:110px 8%;

    box-sizing:border-box;

}

.page-title-image {
    display: block;
    margin: 0 auto 17px;
    max-width: 700px;
    width: 100%;
    height: auto;
    height: 140px;
    object-fit: cover;
    object-position: center;
}

.camp-guide-mobile {
  display: none;
}

.page-subtitle{

    text-align:center;

    color:#5E4D88;

    font-size:2.0rem;

    margin-bottom: 10px;

    font-family:"Luckiest Guy", cursive;

}

.track-inner{

position:relative;

}

.sub-subtitle {
  text-align:center;

  color:#403d4a;

  font-size:1.2rem;

  margin-bottom: 150px;

  font-style: italic;
}

.track-wrap{

    position:relative;

    margin:0 auto;

    padding-bottom:40px;

}

.smoke-field{

    position:absolute;

    left:2%;

    width:120px;

    height:80px;

    pointer-events:none;

}

.smoke{

    position:absolute;

    bottom:0;

    left:10px;

    width:22px;

    height:22px;

    background:rgba(255,255,255,.75);

    border-radius:50%;

    opacity:0;

    animation:puff 3s ease-out infinite;

}

.s1{ animation-delay:0s; }
.s2{ animation-delay:1s; left:20px; }
.s3{ animation-delay:2s; left:0px; }

@keyframes puff{

    0%{

        opacity:0;

        transform:translate(0,0) scale(.6);

    }

    20%{

        opacity:.8;

    }

    100%{

        opacity:0;

        transform:translate(30px,-70px) scale(1.6);

    }

}

.train-row{

    position:relative;

    display:flex;

    align-items:flex-end;

    gap:-60px;

    padding:0 10px;

    z-index:2;

    animation:chug 2.2s ease-in-out infinite;

}

@keyframes chug{

    0%,100%{ transform:translateY(0); }

    50%{ transform:translateY(-4px); }

}

/* ===== engine ===== */

.engine {  
  flex: 0 0 auto;  
  display: flex;  align-items: 
  flex-end;  margin-right: -8px; 
} 

.engine-img {  
  height: 160px;  
  width: auto;  
  object-fit: contain;  
  display: block;  
  margin-bottom: 32px; 
}

/* ===== carriages ===== */

.carriage {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 auto;
  cursor: pointer;
  transition: transform .25s ease;
  margin-bottom: 20px; 
}

.carriage:hover{

    transform:translateY(-8px);

}

/* ===== image-based carriages (day 1-3, sponsors) ===== */

.carriage-img {
  height: 190px;
  width: auto;
  object-fit: contain;
  display: block;
  filter: drop-shadow(0 12px 14px rgba(0,0,0,.22));
  transition: filter .25s ease;
}

.carriage:hover .carriage-img {
  filter: drop-shadow(0 18px 20px rgba(0,0,0,.3));
}

.sponsors-carriage .carriage-img {
  height: 190px;
  transform: translateY(28px);
  margin-bottom: 32px; 
}

/* ===== rail track ===== */

.rail-track {
  height: 16px;
  margin-top: -35px;
  width: 100vw;              /* NEW */
  position: relative;        /* NEW */
  left: 50%;                 /* NEW */
  transform: translateX(-50%); /* NEW */
  background: repeating-linear-gradient(
    to right,
    #8B6F47 0px, #8B6F47 10px,
    transparent 10px, transparent 26px
  );
  border-top: 4px solid #5E4A30;
  border-bottom: 4px solid #5E4A30;
}
/* =========================
   Tablet
========================= */
@media (max-width: 768px) {

.camp-page {
  padding: 80px 6%;
}

.page-subtitle {
  margin-bottom: 70px;
  font-size:1rem;
}

.track-wrap{

  overflow-x:auto;

  padding-bottom:30px;

}

.train-row{

  width:max-content;

  padding:0 20px;

  gap: 4px;

}

.engine-img{ height: 100px; }
.carriage-img{ height:150px; }
.sponsors-carriage .carriage-img{ height:180px; transform: translateY(22px); }

}

/* =========================
   Mobile Phones
========================= */
@media (max-width: 480px) {

.camp-page {
  padding: 70px 5%;
}

.page-subtitle {
  font-size: 2.0rem;
  margin-bottom: 8px;
  margin-top: -50px;
}
}
.sub-subtitle {
  font-size: 0.8rem;
}

.camp-guide-desktop {
  display: block;
}

.camp-guide-mobile {
  display: none;
}

@media (max-width: 480px) {
  .camp-guide-desktop {
    display: none;
  }

  .camp-guide-mobile {
    display: block;
    max-width: 600px;
    width: 100%;
    height: auto;
    margin: 0 auto 17px;
    margin-top: 80px;
    margin-bottom: 120px;
  }

  .sub-subtitle {
    margin-left: 10px;
    margin-right: 10px;
  }
  .track-inner{

width:max-content;

}

.rail-track{

width:100%;

position:static;

left:auto;

transform:none;

}

.engine-img { height: 55px; }
.carriage-img{ height:80px; }
.sponsors-carriage .carriage-img{ height:80px; transform: translateY(29px); }
.rail-track{ height:10px; }
  
}

</style>