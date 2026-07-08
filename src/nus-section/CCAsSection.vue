<template>
  <section id="muda-mudi-ccas" class="ccas-page">

    <img
      :src="ccasHeader"
      alt="Muda Mudi CCAs"
      class="page-title-image"
      v-if="ccasHeader"
    />
    <h2 v-else class="page-title">Muda Mudi CCAs</h2>

    <p class="page-subtitle">
      Malay/Muslim CCAs to get involved in beyond your major.
    </p>

    <h3 class="group-heading">Meet Our CCAS ✨</h3>

    <div
      class="carousel"
      @touchstart="touchStart"
      @touchend="touchEnd"
    >

      <button class="arrow left" @click="previous">
        ‹
      </button>

      <div class="carousel-content">

        <div class="counter">
          {{ current + 1 }} / {{ cca.length }}
        </div>

        <img
          :src="cca[current].image"
          :alt="cca[current].name"
          class="cca-image"
        />

        <h3 class="cca-title">
          {{ cca[current].emoji }}
          {{ cca[current].name }}
        </h3>

        <p class="cca-description">
          {{ cca[current].description }}
        </p>

        <a
          :href="cca[current].instagram"
          target="_blank"
          rel="noopener"
          class="instagram-btn"
        >
          📷 {{ cca[current].handle }}
        </a>

      </div>

      <button class="arrow right" @click="next">
        ›
      </button>

    </div>

    <div class="dots">

      <span
        v-for="(item,index) in cca"
        :key="item.name"
        class="dot"
        :class="{active:index===current}"
        @click="current=index"
      ></span>

    </div>

  </section>
</template>

<script setup>

// import nusmsHeader from "../assets/images/nusms.png";
const ccasHeader = null;

import { ref } from "vue";

import dikirImg from "../assets/images/ccas/dikir.png";
import ilsaImg from "../assets/images/ccas/ilsa.png";
import silatImg from "../assets/images/ccas/silat.png";
import mssImg from "../assets/images/ccas/mss.png";

const cca = [

{
name:"Dikir Barat",
emoji:"🚂",
image:dikirImg,
handle:"@nusdikir",
instagram:"https://www.instagram.com/nusdikir",
description:"Dikir Barat."
},

{
name:"Silat",
emoji:"🌏",
image:silatImg,
handle:"@nussilat",
instagram:"https://www.instagram.com/nussilat",
description:"Silat."
},

{
name:"Ilsa Tari",
emoji:"⚽",
image:ilsaImg,
handle:"@nusilsatari",
instagram:"https://www.instagram.com/nusilsatari",
description:"Sports outreach to instill worthwhile values and empower youth."
},

{
name:"MSS",
emoji:"🌟",
image:mssImg,
handle:"@nusmmss",
instagram:"https://www.instagram.com/nusmss",
description:"Youth outreach adhoc fostering holistic development."
},

];

const current = ref(0);

function next(){
current.value=(current.value+1)%cca.length;
}

function previous(){
current.value=(current.value-1+cca.length)%cca.length;
}

let startX=0;

function touchStart(e){
startX=e.changedTouches[0].clientX;
}

function touchEnd(e){

const diff=e.changedTouches[0].clientX-startX;

if(diff>60){
previous();
}

if(diff<-60){
next();
}

}
</script>

<style scoped>

.nusms-page{

    min-height:100vh;
    background:#fff;
    padding:110px 8%;
    box-sizing:border-box;

}

.page-title-image{

    display:block;
    margin:0 auto 20px;
    max-width:700px;
    width:100%;
    height:140px;
    object-fit:cover;
    object-position:center;

}

.page-title{

    text-align:center;
    font-family:"Luckiest Guy", cursive;
    color:#402B6D;
    font-size:3rem;
    margin-bottom:10px;

}

.page-subtitle{

    text-align:center;
    color:#5E4D88;
    font-size:1.1rem;
    max-width:650px;
    margin:0 auto 26px;

}

.socials-wrap{

    display:flex;
    justify-content:center;
    gap:14px;
    flex-wrap:wrap;
    margin-bottom:50px;

}

.social-tag{

    background:#402B6D;
    color:white;
    text-decoration:none;
    font-weight:bold;
    padding:10px 20px;
    border-radius:999px;
    transition:.25s;

}

.social-tag:hover{

    background:#573A99;
    transform:translateY(-3px);

}

.group-heading{

    font-family:"Luckiest Guy", cursive;
    color:#402B6D;
    text-align:center;
    font-size:1.7rem;
    margin-bottom:28px;

}

.carousel{

    display:flex;
    align-items:center;
    justify-content:center;
    gap:30px;
    max-width:1000px;
    margin:0 auto;

}

.arrow{

    width:56px;
    height:56px;

    border:none;
    border-radius:50%;

    background:#402B6D;
    color:white;

    font-size:2rem;
    cursor:pointer;

    transition:.25s;

    flex-shrink:0;

}

.arrow:hover{

    background:#573A99;
    transform:scale(1.08);

}

.carousel-content{

    background:#FFF9E8;

    border-radius:24px;

    padding:30px;

    text-align:center;

    box-shadow:0 8px 20px rgba(0,0,0,.08);

    width:100%;
    max-width:420px;

}

.counter{

    color:#6C4AB6;
    font-weight:bold;
    margin-bottom:18px;

}

.cca-image{

    width:100%;
    max-width:300px;

    aspect-ratio:9/16;

    object-fit:cover;

    border-radius:18px;

    margin-bottom:22px;

    box-shadow:0 8px 18px rgba(0,0,0,.15);

}

.cca-title{

    font-family:"Luckiest Guy", cursive;
    color:#402B6D;
    font-size:1.5rem;
    margin-bottom:14px;

}

.cca-description{

    color:#555;
    line-height:1.6;
    margin-bottom:24px;
    min-height:55px;

}

.instagram-btn{

    display:inline-block;

    background:#EDE4FA;

    color:#6C4AB6;

    text-decoration:none;

    font-weight:bold;

    padding:10px 20px;

    border-radius:999px;

    transition:.25s;

}

.instagram-btn:hover{

    background:#402B6D;
    color:white;

}

.dots{

    display:flex;
    justify-content:center;
    gap:10px;
    margin-top:30px;

}

.dot{

    width:12px;
    height:12px;

    border-radius:50%;

    background:#D8C9F4;

    cursor:pointer;

    transition:.25s;

}

.dot.active{

    background:#402B6D;
    transform:scale(1.25);

}

/* =========================
Tablet
========================= */

@media (max-width:768px){

.nusms-page{

    padding:80px 6%;

}

.page-title{

    font-size:2.2rem;

}

.carousel{

    gap:15px;

}

.carousel-content{

    padding:22px;

}

.cca-image{

    max-width:240px;

}

.arrow{

    width:46px;
    height:46px;
    font-size:1.6rem;

}

}

/* =========================
Mobile
========================= */

@media (max-width:480px){

.nusms-page{

    padding:60px 5%;

}

.page-title{

    font-size:1.8rem;

}

.page-subtitle{

    font-size:.95rem;

}

.carousel{

    gap:8px;

}

.carousel-content{

    padding:18px;
    max-width:100%;

}

.cca-image{

    max-width:220px;

}

.arrow{

    width:40px;
    height:40px;
    font-size:1.3rem;

}

.cca-title{

    font-size:1.2rem;

}

.cca-description{

    font-size:.9rem;
    min-height:auto;

}

.social-tag{

    font-size:.82rem;
    padding:8px 16px;

}

.instagram-btn{

    font-size:.85rem;

}

.dot{

    width:10px;
    height:10px;

}

}

</style>