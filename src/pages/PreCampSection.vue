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

    <img
      :src="pcHeader"
      alt="Pre-Camp Booklet"
      class="page-title-image"
    />

    <p class="page-subtitle">
        Everything you need before your journey begins.
    </p>

    <div class="memory-container">

    <div
        class="memory-item purple"
        @click="router.push('/precamp#overview')"
    >

        <img
            src="../assets/images/pball.png"
            class="memory-ball"
        >

  

    </div>


    <div
        class="memory-item blue"
        @click="router.push('/precamp#packing-list')"
    >

        <img
            src="../assets/images/bball.png"
            class="memory-ball"
        >


    </div>


    <div
        class="memory-item pink"
        @click="router.push('/precamp#getting-here')"
    >

        <img
            src="../assets/images/piball.png"
            class="memory-ball"
        >

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
import pcHeader from "../assets/images/pc.png";


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

.page-title-image {
    display: block;
    margin: 0 auto 40px;
    max-width: 700px;  
    width: 100%;
    height: auto;
    height: 180px;      /* The visible cropped height */
    object-fit: cover;  /* Crops the image to fill the box */
    object-position: center; /* Change what part is kept */
}

.page-subtitle{

    text-align:center;

    font-family:"Luckiest Guy";

    color:#5E4D88;

    font-size:1.15rem;

    margin-top:-30px;

    margin-bottom:60px;

}

.memory-container{

    display:flex;

    justify-content:center;

    align-items:center;

    gap:30px;

    flex-wrap:nowrap;

    margin-top:80px;

}

@media (max-width: 900px){

    .memory-container{
        flex-wrap:wrap;
    }

}

.memory-item{

    position:relative;

    width:420px;

    flex:0 0 420px;

    cursor:pointer;

}

.memory-ball{

    width:100%;

    display:block;

}



.memory-ball{

    width:100%;

    display:block;

    animation:float 4s ease-in-out infinite;

    transition:transform .3s ease, filter .3s ease;

}

.memory-item:hover .memory-ball{

    transform:
        translateY(-15px)
        scale(1.08);

    filter:drop-shadow(0 25px 35px rgba(0,0,0,.25));

}

.memory-item:active .memory-ball{

    transform:scale(.95);

}

.transport h4{

    color:#402B6D;

    margin-bottom:10px;

}

@keyframes float{

    0%{

        transform:translateY(0px);

    }

    50%{

        transform:translateY(-18px);

    }

    100%{

        transform:translateY(0px);

    }

}

.purple .memory-ball{

    animation-delay:0s;

}

.blue .memory-ball{

    animation-delay:1.2s;

}

.pink .memory-ball{

    animation-delay:2.4s;

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

    animation:twinkle 3s infinite;

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

@keyframes twinkle {

  0%,100%{
    opacity:.1;
    transform:scale(1);
  }

  50%{
    opacity:.4;
    transform:scale(1.4);
  }

}


</style>
    <section
        id="precamp"
        class="precamp-page"
      
    >
    
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
    
        padding:140px 8% 110px;
    
        box-sizing:border-box;
    
        position:relative;
    
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
    
    /* =========================
       Tablet
    ========================= */
    @media (max-width: 900px) {
    
    .booklet-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    }
    
    @media (max-width: 768px) {
    
    .precamp-page {
      padding: 130px 6% 80px;
    }
    
    .page-title {
      font-size: 2.8rem;
      margin-bottom: 50px;
    }
    
    .page-subtitle {
      margin-top: -25px;
      margin-bottom: 45px;
    }
    
    .booklet-grid {
      grid-template-columns: 1fr;
      gap: 25px;
    }
    
    .book-card p {
      min-height: 0;
    }
    
    }
    
    /* =========================
       Mobile Phones
    ========================= */
    @media (max-width: 480px) {
    
    .precamp-page {
      padding: 120px 5% 70px;
    }
    
    .page-title {
      font-size: 2.1rem;
    }
    
    .page-subtitle {
      font-size: 1rem;
    }
    
    .book-card {
      padding: 32px 22px;
    }
    
    .card-icon {
      font-size: 2.8rem;
      margin-bottom: 14px;
    }
    
    }
    
    </style>
