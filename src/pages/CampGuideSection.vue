<template>
  <section class="camp-page">

    <h1 class="page-title">
      Camp Guide
    </h1>

    <p class="page-subtitle">
      Follow the journey through Memoria.
    </p>

    <div class="timeline">

      <div
        class="timeline-item"
        @click="router.push('/camp-guide#day1')"
      >
        <div class="dot blue"></div>

        <div class="content">
          <h2>Day 1</h2>
          <p>First stop — introductions, games and making memories.</p>
        </div>
      </div>

      <div
        class="timeline-item"
        @click="router.push('/camp-guide#day2')"
      >
        <div class="dot green"></div>

        <div class="content">
          <h2>Day 2</h2>
          <p>The adventure continues with activities and bonding.</p>
        </div>
      </div>

      <div
        class="timeline-item"
        @click="router.push('/camp-guide#day3')"
      >
        <div class="dot orange"></div>

        <div class="content">
          <h2>Day 3</h2>
          <p>The final stop before your NUS journey officially begins.</p>
        </div>
      </div>

      <div
        class="timeline-item"
        @click="router.push('/camp-guide#our-sponsors')"
      >
        <div class="dot purple"></div>

        <div class="content">
          <h2>Our Sponsors</h2>
          <p>A big thank you to everyone who made Memoria possible.</p>
        </div>
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

import Day1Section from "../c-section/Day1Section.vue";
import Day2Section from "../c-section/Day2Section.vue";
import Day3Section from "../c-section/Day3Section.vue";
import OurSponsorsSection from "../c-section/OurSponsorsSection.vue";

const router = useRouter();
</script>

<style scoped>

.camp-page{

    min-height:100vh;

    background:#DCEEFF;

    padding:110px 8%;

    box-sizing:border-box;

}

.page-title{

    font-family:"Luckiest Guy";

    font-size:4rem;

    color:#402B6D;

    text-align:center;

    margin-bottom:15px;

}

.page-subtitle{

    text-align:center;

    color:#5E4D88;

    font-size:1.1rem;

    margin-bottom:70px;

}

.timeline{

    position:relative;

    max-width:650px;

    margin:auto;

}

.timeline::before{

    content:"";

    position:absolute;

    left:18px;

    top:0;

    bottom:0;

    width:4px;

    background:#B8D9F4;

    border-radius:999px;

}

.timeline-item{

    display:flex;

    align-items:flex-start;

    gap:25px;

    margin-bottom:55px;

    cursor:pointer;

    transition:.25s;

    position:relative;

}

.timeline-item:hover{

    transform:translateX(10px);

}

.dot{

    width:38px;

    height:38px;

    border-radius:50%;

    flex-shrink:0;

    position:relative;

    z-index:2;

    border:5px solid white;

    box-shadow:0 4px 10px rgba(0,0,0,.15);

}

.blue{

    background:#6DB4E8;

}

.green{

    background:#7BC96F;

}

.orange{

    background:#FFA552;

}

.purple{

    background:#9B59B6;

}

.content{

    background:white;

    padding:22px 26px;

    border-radius:18px;

    box-shadow:0 8px 18px rgba(0,0,0,.08);

    flex:1;

    transition:.25s;

}

.timeline-item:hover .content{

    box-shadow:0 14px 30px rgba(0,0,0,.12);

}

.content h2{

    color:#402B6D;

    margin-bottom:10px;

}

.content p{

    color:#666;

    line-height:1.6;

}

</style>