<template>
  <section id="camp-guide-landing" class="camp-page train-theme">

    <img
      :src="campHeader"
      alt="Camp Guide"
      class="page-title-image"
    />

    <p class="page-subtitle">
      All aboard! Follow the journey through Memoria.
    </p>

    <div class="track-wrap">

      <div class="smoke-field">
        <span class="smoke s1"></span>
        <span class="smoke s2"></span>
        <span class="smoke s3"></span>
      </div>

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
          <div class="carriage-body">
            <p class="carriage-label">Day</p>
            <span class="carriage-icon">1</span>
          </div>
          <div class="coupler"></div>
          <div class="wheels">
            <span class="wheel"></span>
            <span class="wheel"></span>
          </div>
        </div>

        <div
          class="carriage day2-carriage"
          @click="router.push('/camp-guide#day2')"
        >
          <div class="carriage-body">
            <p class="carriage-label">Day</p>
            <span class="carriage-icon">2</span>
          </div>
          <div class="coupler"></div>
          <div class="wheels">
            <span class="wheel"></span>
            <span class="wheel"></span>
          </div>
        </div>

        <div
          class="carriage day3-carriage"
          @click="router.push('/camp-guide#day3')"
        >
          <div class="carriage-body">
            <p class="carriage-label">Day</p>
            <span class="carriage-icon">3</span>
          </div>
          <div class="coupler"></div>
          <div class="wheels">
            <span class="wheel"></span>
            <span class="wheel"></span>
          </div>
        </div>

        <div
          class="carriage sponsors-carriage"
          @click="router.push('/camp-guide#our-sponsors')"
        >
          <div class="carriage-body">
            <span class="carriage-icon">Our</span>
            <p class="carriage-label">Sponsors</p>
          </div>
          <div class="coupler"></div>
          <div class="wheels">
            <span class="wheel"></span>
            <span class="wheel"></span>
          </div>
        </div>

      </div>

      <div class="rail-track"></div>

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

.page-subtitle{

    text-align:center;

    color:#5E4D88;

    font-size:2.0rem;

    margin-bottom:160px;

    font-family:"Luckiest Guy", cursive;

}

.track-wrap{

    position:relative;

    max-width:1100px;

    margin:0 auto;

    padding-bottom:40px;

}

.smoke-field{

    position:absolute;

    top:-70px;

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

    gap:18px;

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
  display: flex;
  align-items: flex-end;
  margin-right: -8px; /* pulls carriage closer to engine */
}

.engine-img {
  height: 160px;
  width: auto;
  object-fit: contain;
  display: block;
  margin-bottom: 32px; /* lifts image up so wheels align with carriage wheels */
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
  margin-bottom: 30px; 
}

.carriage:hover{

    transform:translateY(-8px);

}

.carriage:hover .carriage-body{

    box-shadow:0 18px 26px rgba(0,0,0,.3), inset 0 4px 8px rgba(255,255,255,.25);

}

.carriage-body{

    width:130px;

    height:100px;

    border-radius:16px;

    display:flex;

    flex-direction:column;

    align-items:center;

    justify-content:center;

    gap:6px;

    box-shadow:0 12px 20px rgba(0,0,0,.22), inset 0 4px 8px rgba(255,255,255,.2);

    transition:box-shadow .25s ease;

}

.day1-carriage .carriage-body{ background:linear-gradient(20deg, #FFD87A, #F0A825); }
.day2-carriage .carriage-body{ background:linear-gradient(100deg, #8BD3F0, #4599C9); }
.day3-carriage .carriage-body{ background:linear-gradient(160deg, #FF9A8B, #E8654F); }
.sponsors-carriage .carriage-body{ background:linear-gradient(200deg, #B29CF0, #7B5FCF); }

.carriage-icon{

    font-size:1.7rem;

    font-family:"Luckiest Guy", cursive;

    color:white;

}

.carriage-label{

    font-family:"Luckiest Guy", cursive;

    color:white;

    font-size:1.5rem;

    text-shadow:0 2px 4px rgba(0,0,0,.25);

}

.coupler{

    width:14px;

    height:6px;

    background:#5E4A30;

    margin-top:-3px;

    z-index:-1;

}

/* ===== wheels, shared ===== */

.wheels{

    display:flex;

    gap:26px;

    margin-top:6px;

}

.wheel{

    width:26px;

    height:26px;

    border-radius:50%;

    background:radial-gradient(circle at 35% 30%, #7A7A7A, #333);

    border:3px solid #222;

    animation:spin 1.4s linear infinite;

}

@keyframes spin{

    from{ transform:rotate(0deg); }

    to{ transform:rotate(360deg); }

}

/* ===== rail track ===== */

.rail-track {
  height: 16px;
  margin-top: -35px; 
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

.engine-body{ width:120px; height:90px; }
.engine-window{ width:48px; height:36px; }
.carriage-body{ width:105px; height:82px; }
.carriage-icon{ font-size:1.4rem; }
.carriage-label{ font-size:.78rem; }
.wheel{ width:20px; height:20px; }
.wheels{ gap:20px; }

}

/* =========================
   Mobile Phones
========================= */
@media (max-width: 480px) {

.camp-page {
  padding: 70px 5%;
}

.page-subtitle {
  font-size: 0.92rem;
  margin-bottom: 55px;
}

.engine-img { height: 88px; }
.carriage-body{ width:92px; height:72px; border-radius:14px; }
.carriage-icon{ font-size:1.2rem; }
.carriage-label{ font-size:.7rem; }
.wheel{ width:16px; height:16px; border-width:2px; }
.wheels{ gap:16px; }
.rail-track{ height:12px; }

}

</style>