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