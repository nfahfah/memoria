<template>
  <section id="pbmuks-adhocs" class="pbmuks-page">

    <img
      :src="pbmuksHeader"
      alt="PBMUKS"
      class="page-title-image"
      v-if="pbmuksHeader"
    />
    <h2 v-else class="page-title">PBMUKS</h2>

    <p class="page-subtitle">
      The NUS Malay Lanugage Society (PBMUKS) is a student-run society that promotes the Malay language and culture on campus.
    </p>

    <div class="socials-wrap">
      <a
        href="https://www.instagram.com/pbmuks"
        target="_blank"
        rel="noopener"
        class="social-tag"
      >
        📷 @pbmuks
      </a>

      <a
        href="https://t.me/nuspbmuks"
        target="_blank"
        rel="noopener"
        class="social-tag"
      >
        ✈️ t.me/nuspbmuks
      </a>
    </div>

    <h3 class="group-heading">Meet Our Adhocs ✨</h3>

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
          {{ current + 1 }} / {{ adhocs.length }}
        </div>

        <img
          :src="adhocs[current].image"
          :alt="adhocs[current].name"
          class="adhoc-image"
        />

        <h3 class="adhoc-title">
          {{ adhocs[current].emoji }}
          {{ adhocs[current].name }}
        </h3>

        <p class="adhoc-description">
          {{ adhocs[current].description }}
        </p>

        <a
          :href="adhocs[current].instagram"
          target="_blank"
          rel="noopener"
          class="instagram-btn"
        >
          📷 {{ adhocs[current].handle }}
        </a>

      </div>

      <button class="arrow right" @click="next">
        ›
      </button>

    </div>

    <div class="dots">

      <span
        v-for="(item,index) in adhocs"
        :key="item.name"
        class="dot"
        :class="{active:index===current}"
        @click="current=index"
      ></span>

    </div>

  </section>
</template>

<script setup>

// import pbmuksHeader from "../assets/images/pbmuks.png";
const pbmuksHeader = null;

import { ref } from "vue";

import focImg from "../assets/images/adhocs/foc.png";
import mekarImg from "../assets/images/adhocs/mekar.png";
import pentasImg from "../assets/images/adhocs/pentas.png";
import bispenImg from "../assets/images/adhocs/bispen.png";
import merduImg from "../assets/images/adhocs/merdu.png";


const adhocs = [

{
name:"FOC",
emoji:"🚂",
image:focImg,
handle:"@nusms.pbmuks.foc",
instagram:"https://www.instagram.com/nusms.pbmuks.foc",
description:"Malay/Muslim freshman orientation camp."
},

{
name:"Mekar",
emoji:"🌱",
image:mekarImg,
handle:"@nusms.mekar",
instagram:"https://www.instagram.com/nusmekar",
description:"MIJ blah blah."
},

{
name:"Pentas Budaya",
emoji:"🎭",
image:pentasImg,
handle:"@nuspentasbudaya",
instagram:"https://www.instagram.com/nuspentasbudaya",
description:"Sports outreach to instill worthwhile values and empower youth."
},

{
name:"Bisikan Pena",
emoji:"🌟",
image:bispenImg,
handle:"@nusbisikanpena",
instagram:"https://www.instagram.com/nusbisikanpena",
description:"Youth outreach adhoc fostering holistic development."
},

{
name:"Merdu",
emoji:"🎵",
image:merduImg,
handle:"@nusms.merdu",
instagram:"https://www.instagram.com/nusmerdu",
description:"A safe space for everyone to learn more about Islam."
},

];

const current = ref(0);

function next(){
current.value=(current.value+1)%adhocs.length;
}

function previous(){
current.value=(current.value-1+adhocs.length)%adhocs.length;
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

.adhoc-image{

    width:100%;
    max-width:300px;

    aspect-ratio:9/16;

    object-fit:cover;

    border-radius:18px;

    margin-bottom:22px;

    box-shadow:0 8px 18px rgba(0,0,0,.15);

}

.adhoc-title{

    font-family:"Luckiest Guy", cursive;
    color:#402B6D;
    font-size:1.5rem;
    margin-bottom:14px;

}

.adhoc-description{

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

.adhoc-image{

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

.adhoc-image{

    max-width:220px;

}

.arrow{

    width:40px;
    height:40px;
    font-size:1.3rem;

}

.adhoc-title{

    font-size:1.2rem;

}

.adhoc-description{

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