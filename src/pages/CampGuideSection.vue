<template>
  <section class="camp-page">

    <img
      :src="campHeader"
      alt="Camp Guide"
      class="page-title-image"
    />

    <p class="page-subtitle">
      Follow the journey through Memoria.
    </p>

    <div class="circle-map">

    <div
        class="station station-top"
        @click="router.push('/camp-guide#day1')"
    >
        <img src="../assets/images/d1.png" class="station-img">
    </div>

    <div
        class="station station-right"
        @click="router.push('/camp-guide#day2')"
    >
        <img src="../assets/images/d2.png" class="station-img">
    </div>

    <div
        class="station station-bottom"
        @click="router.push('/camp-guide#day3')"
    >
        <img src="../assets/images/d3.png" class="station-img">
    </div>

    <!-- remove this if you only have 3 stations -->
    <div
        class="station station-left"
        @click="router.push('/camp-guide#our-sponsors')"
    >
        <img src="../assets/images/sponsors.png" class="station-img">
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

import Day1Section from "../c-section/Day1Section.vue";
import Day2Section from "../c-section/Day2Section.vue";
import Day3Section from "../c-section/Day3Section.vue";
import OurSponsorsSection from "../c-section/OurSponsorsSection.vue";

const router = useRouter();
</script>

<style scoped>

.camp-page{

    min-height:100vh;

    background:#cddecb;

    padding:110px 8%;

    box-sizing:border-box;

}

.page-title-image {
    display: block;
    margin: 0 auto 40px;
    max-width: 700px;  
    width: 100%;
    height: auto;
    height: 140px;      /* The visible cropped height */
    object-fit: cover;  /* Crops the image to fill the box */
    object-position: center; /* Change what part is kept */
    
}

.page-subtitle{

    text-align:center;

    color:#5E4D88;

    font-size:1.1rem;

    margin-bottom:70px;

}

.circle-map{

    position:relative;

    width:900px;

    height:900px;

    margin:60px auto;

}

.circle-map::before{

    content:"";

    position:absolute;

    top:50%;
    left:50%;

    width:620px;
    height:620px;

    transform:translate(-50%,-50%);

    border:12px solid #8CB8E8;
    border-radius:50%;

}

.station{

    position:absolute;

    cursor:pointer;

    display:flex;

    justify-content:center;

    align-items:center;

}

.station::before{

    content:"";

    position:absolute;

    width:22px;

    height:22px;

    background:white;

    border:6px solid #8CB8E8;

    border-radius:50%;

    top:50%;

    left:50%;

    transform:translate(-50%,-50%);

    z-index:1;

}

.station-img{

    position:relative;

    z-index:2;

    width:400px;

    display:block;

    transition:.3s;

}

.station:hover .station-img{

    transform:scale(1.08);

}

.station-top{

    top:140px;

    left:50%;

    transform:translate(-50%,-50%);

}

.station-right{

    right:140px;

    top:50%;

    transform:translate(50%,-50%);

}

.station-bottom{

    bottom:140px;

    left:50%;

    transform:translate(-50%,50%);

}

.station-left{

    left:140px;

    top:50%;

    transform:translate(-50%,-50%);

}


/* =========================
   Tablet
========================= */
@media (max-width: 768px) {

.camp-page {
  padding: 80px 6%;
}

.page-title {
  font-size: 2.8rem;
}

.page-subtitle {
  margin-bottom: 50px;
}

.timeline-item {
  gap: 18px;
  margin-bottom: 40px;
}

.content {
  padding: 18px 20px;
}

}

/* =========================
   Mobile Phones
========================= */
@media (max-width: 480px) {

.camp-page {
  padding: 70px 5%;
}

.page-title {
  font-size: 2.1rem;
}

.page-subtitle {
  font-size: 1rem;
}

.timeline::before {
  left: 14px;
}

.dot {
  width: 30px;
  height: 30px;
  border-width: 4px;
}

.timeline-item {
  gap: 14px;
  margin-bottom: 32px;
}

.timeline-item:hover {
  transform: none;
}

.content {
  padding: 16px 18px;
  border-radius: 14px;
}

.content p {
  font-size: 0.92rem;
}

}

</style>