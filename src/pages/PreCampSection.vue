<template>

<section
    id="precamp"
    class="precamp-page"
  
>
  <div class="stars">
    <span class="star s1">✦</span>
    <span class="star s2">✦</span>
    <span class="star s3">✦</span>
    <span class="star s4">✦</span>
    <span class="star s5">✦</span>
    <span class="star s6">✦</span>
    <span class="star s7">✦</span>
    <span class="star s8">✦</span>
  </div>

    <h1 class="page-title">
        Pre-Camp Booklet
    </h1>

    <p class="page-subtitle">
        Everything you need before your journey begins.
    </p>

    <div class="booklet-grid">

  <div
    class="book-card overview-card"
    @click="router.push('/precamp#overview')"
>
    <div class="card-icon">📍</div>

    <h2>Overview</h2>

    <p>
      Start your journey here and learn what Memoria is all about.
    </p>

    <button class="open-btn">
      Open →
    </button>
  </div>

  <div
    class="book-card packing-card"
    @click="router.push('/precamp#packing-list')"
  >
    <div class="card-icon">🎒</div>

    <h2>Packing List</h2>

    <p>
      Everything you'll need to prepare before camp begins.
    </p>

    <button class="open-btn">
      Open →
    </button>
  </div>

  <div
    class="book-card getting-card"
    @click="router.push('/precamp#getting-here')"
  >
    <div class="card-icon">🚆</div>

    <h2>Getting Here</h2>

    <p>
      Find your way to NUS with maps and transport guides.
    </p>

    <button class="open-btn">
      Open →
    </button>
  </div>

</div>
</section>

<OverviewSection />

<PackingListSection />

<GettingHereSection />

</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();


import OverviewSection from "../pc-section/OverviewSection.vue";
import PackingListSection from "../pc-section/PackingListSection.vue";
import GettingHereSection from "../pc-section/GettingHereSection.vue";


</script>

<style scoped>

.precamp-page{

    min-height:100vh;

    background:#F5E05D;

    padding:110px 8%;

    box-sizing:border-box;

}

.page-title{

    font-family:"Luckiest Guy";

    font-size:4rem;

    color:#402B6D;

    text-align:center;

    margin-bottom:70px;

}

.page-subtitle{

    text-align:center;

    color:#5E4D88;

    font-size:1.15rem;

    margin-top:-30px;

    margin-bottom:60px;

}

.booklet-grid{

    display:grid;

    grid-template-columns:repeat(3,1fr);

    gap:35px;

    max-width:1200px;

    margin:auto;

}

.book-card{

    background:#FFF9E8;

    border-radius:26px;

    padding:40px 30px;

    text-align:center;

    box-shadow:0 12px 25px rgba(0,0,0,.08);

    transition:.3s;

    cursor:pointer;

}

.overview-card{

    background:#F3EEFF;
    position:relative;
    z-index:2;

}

.packing-card{

    background:#EEF7FF;
    position:relative;
    z-index:2;

}

.getting-card{

    background:#FFF1F6;
    position:relative;
    z-index:2;
}

.book-card{

    cursor:pointer;

}

.book-card:hover{

    transform:translateY(-10px);

    box-shadow:0 18px 35px rgba(0,0,0,.12);

}

.card-icon{

    font-size:3.5rem;

    margin-bottom:20px;

}

.book-card h2{

    color:#402B6D;

    margin-bottom:15px;

}

.book-card p{

    color:#555;

    line-height:1.7;

    min-height:90px;

}

.open-btn{

    margin-top:20px;

    background:#402B6D;

    color:white;

    border:none;

    padding:12px 26px;

    border-radius:999px;

    cursor:pointer;

    transition:.25s;

}

.open-btn:hover{

    background:#5A3E98;

}

.stars{

    position:fixed;

    inset:0;

    pointer-events:none;

    z-index:0;

}

.star{

    position:absolute;

    color:#ff66c4;

    opacity:.12;

    font-size:1.8rem;

}

.s1{
    top:8%;
    left:10%;
}

.s2{
    top:25%;
    right:12%;
}

.s3{
    top:45%;
    left:6%;
}

.s4{
    top:60%;
    right:18%;
}

.s5{
    top:78%;
    left:14%;
}

.s6{
    top:110%;
    right:10%;
}

.s7{
    top:165%;
    left:8%;
}

.s8{
    top:220%;
    right:15%;
}

</style>