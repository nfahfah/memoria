<template>
  <section id="nus-guide-landing" class="nus-guide-page">

    <img
          :src="nusHeader"
          alt="NUS Guide"
          class="page-title-image"
        />

    <p class="page-subtitle">Tap a star to explore</p>

    <div class="stars-wrap">

      <img
        :src="centerpiece"
        alt="NUS Guide"
        class="centerpiece"
      />

      <img
        :src="acadsStar"
        alt="Academics"
        class="star star-1"
        @click="scrollToSection('academics')"
      />

      <img
        :src="nusmsStar"
        alt="NUSMS"
        class="star star-2"
        @click="scrollToSection('nusms-adhocs')"
      />

      <img
        :src="pbmuksStar"
        alt="PBMUKS"
        class="star star-3"
        @click="scrollToSection('pbmuks-adhocs')"
      />

      <img
        :src="ccasStar"
        alt="CCAs"
        class="star star-4"
        @click="scrollToSection('muda-mudi-ccas')"
      />

      <img
        :src="eatsStar"
        alt="Eats"
        class="star star-5"
        @click="scrollToSection('eats')"
      />

      <img
        :src="musollahsStar"
        alt="Musollahs"
        class="star star-6"
        @click="scrollToSection('musollahs-masjids')"
      />

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
import nusHeader from "../assets/images/nus.png";
import centerpiece from "../assets/images/nus-guide.png";
import acadsStar from "../assets/images/acads.png";
import nusmsStar from "../assets/images/nusms.png";
import pbmuksStar from "../assets/images/pbmuks.png";
import musollahsStar from "../assets/images/musollahs.png";
import eatsStar from "../assets/images/eats.png";
import ccasStar from "../assets/images/ccas.png";

import AcademicsSection from "../nus-section/AcademicsSection.vue";
import NUSMSSection from "../nus-section/NUSMSSection.vue";
import PBMUKSSection from "../nus-section/PBMUKSSection.vue";
import CCAsSection from "../nus-section/CCAsSection.vue";
import EatsSection from "../nus-section/EatsSection.vue";
import MusollahsSection from "../nus-section/MusollahsSection.vue";

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;
  const header = document.querySelector("header, .site-header, .navbar");
  const headerOffset = header ? header.offsetHeight : 100;
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top: targetPosition, behavior: "smooth" });
}
</script>

<style scoped>

.nus-guide-page{

    min-height:100vh;

    background-image: url("../assets/images/pink-background.png");

    background-size:cover;

    background-position:center;

    background-repeat:no-repeat;

    padding:110px 8%;

    box-sizing:border-box;

}

.page-title-image {
    display: block;
    margin: 0 auto 17px;   /* matches camp guide's spacing */
    max-width: 700px;
    width: 100%;
    height: auto;
    height: 180px;
    object-fit: cover;
    object-position: center;
}

.page-title-text{

    text-align:center;

    font-family:"Luckiest Guy", cursive;

    color:#402B6D;

    font-size:3rem;

    margin-bottom:10px;

}

.page-subtitle{

    text-align:center;

    font-family:"Luckiest Guy";

    color:#5E4D88;

    font-size:2.0rem;

    margin-top:0;

    margin-bottom:12px;  

}

.stars-wrap{

    position:relative;

    max-width:1100px;      /* was 900px — wider container to fit bigger stars */

    height:760px;           /* was 640px — taller to match */

    margin:-40px auto 0;

}

.centerpiece{

    position:absolute;

    top:50%;

    left:50%;

    transform:translate(-50%,-50%);

    width:500px;

    max-width:55%;          /* was 62% — slightly smaller proportionally now that stars are bigger */

    height:auto;

    pointer-events:none;

    z-index:1;

    filter:drop-shadow(0 15px 25px rgba(0,0,0,.2));

}

.star{

    position:absolute;

    width:300px;

    height:auto;

    cursor:pointer;

    z-index:2;

    transition:transform .25s ease, filter .25s ease;

    filter:drop-shadow(0 10px 16px rgba(0,0,0,.18));

}

.star:hover{

    transform:scale(1.1) !important;

    filter:drop-shadow(0 14px 20px rgba(0,0,0,.25));

}

.star:active{

    transform:scale(.95) !important;

}

/* positions around the centerpiece */

/* pulled in closer to the centerpiece island */

.star-1{ top:8%;  left:6%;  animation:wobble-a 5s ease-in-out infinite; }
.star-2{ top:4%;  left:60%; animation:wobble-b 5.5s ease-in-out infinite; animation-delay:.3s; }
.star-3{ top:40%; left:74%; animation:wobble-a 5.2s ease-in-out infinite; animation-delay:.9s; }
.star-4{ top:74%; left:60%; animation:wobble-b 4.8s ease-in-out infinite; animation-delay:1.4s; }
.star-5{ top:76%; left:6%;  animation:wobble-a 5.4s ease-in-out infinite; animation-delay:.6s; }
.star-6{ top:40%; left:-6%; animation:wobble-b 5.1s ease-in-out infinite; animation-delay:1.1s; }

/* gentle wobble + float, keeps rotation small so text on stars stays readable */

@keyframes wobble-a{

    0%,100%{ transform:translateY(0) rotate(-4deg); }

    50%{ transform:translateY(-10px) rotate(4deg); }

}

@keyframes wobble-b{

    0%,100%{ transform:translateY(0) rotate(4deg); }

    50%{ transform:translateY(-10px) rotate(-4deg); }

}

/* =========================
   Tablet
========================= */
@media (max-width: 768px) {

.nus-guide-page {
  padding: 80px 6%;
  overflow-x: hidden;
}

.page-title-text {
  font-size: 2.2rem;
}

.page-subtitle {
  margin-bottom: 0;
}

.stars-wrap{

  height:580px;

  max-width:100%;

  margin: -70px auto 0;

  overflow:visible;

}

.centerpiece{

  width:260px;

}

.star{

  width:170px;

}

.star-1{ top:6%;  left:2%;  }
.star-2{ top:2%;  left:58%; }
.star-3{ top:40%; left:66%; }
.star-4{ top:76%; left:58%; }
.star-5{ top:78%; left:4%;  }
.star-6{ top:40%; left:2%;  }

}

/* =========================
   Mobile Phones
========================= */
@media (max-width: 480px) {

.nus-guide-page {
  padding: 60px 5%;
  overflow-x: hidden;
}

.page-title-image {
  margin: 0 auto -20px;
  height: 130px;
}

.page-title-text {
  font-size: 1.8rem;
}

.page-subtitle {
  font-size: 0.9rem;
  margin-top: 0;
  margin-bottom: 0;
}

.stars-wrap{

  height:500px;

  max-width:100%;

  margin:-10px auto 0;

}

.centerpiece{

  width:200px;

}

.star{

  width:135px;

}

.star-1{ top:12%; left:0%;  }
.star-2{ top:8%;  left:58%; }
.star-3{ top:40%; left:64%; }
.star-4{ top:80%; left:58%; }
.star-5{ top:82%; left:2%;  }
.star-6{ top:40%; left:0%;  }

}

</style>