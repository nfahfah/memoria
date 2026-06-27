<template>

<section class="home">

    <img
        class="track"
        src="../assets/images/train-track.png"
        alt="Train Track"
    />

    <img
        class="memoria-title"
        src="../assets/images/memoria-title.png"
        alt="Memoria"
    />

    <div
        class="scroll-indicator"
        @click="scrollToWelcome"
    >

        <p class="scroll-text">
            Your Journey Starts Here
        </p>

        <div class="scroll-arrow">
            ﹀
        </div>

    </div>

</section>

<WelcomeSection />

</template>

<script setup>
import WelcomeSection from "./WelcomeSection.vue";

function scrollToWelcome() {
    document.getElementById("welcome")?.scrollIntoView({
        behavior: "smooth"
    });
}
</script>

<style scoped>

.home{

    min-height:100vh;

    background:#402b6d;

    position:relative;

    overflow:hidden;

    display:flex;

    justify-content:center;

    align-items:flex-start;

    padding-top:120px;

}



.home::before{

    content:"";

    position:absolute;

    inset:0;

    background:

    radial-gradient(
        circle at top left,
        rgba(255,223,120,.14),
        transparent 40%
    ),

    radial-gradient(
        circle at bottom right,
        rgba(255,223,120,.20),
        transparent 42%
    );

    pointer-events:none;


}

.track{

    position:absolute;

    width:110%;

    left:-5%;

    top:0;

    opacity:.18;

    pointer-events:none;

}

.memoria-title{

    width:min(900px, 80vw);

    position:relative;

    z-index:2;

}

.small-title{

    color:#777;

    letter-spacing:3px;

    text-transform:uppercase;

}

h1{

    font-family:"Luckiest Guy";

    font-size:5rem;

    margin:20px 0;

    color:var(--primary);

}

.tagline{

    font-size:1.2rem;

    color:#666;

}

.scroll-indicator{

    position:absolute;

    bottom:40px;

    left:50%;

    transform:translateX(-50%);

    display:flex;

    flex-direction:column;

    align-items:center;

    z-index:2;

    cursor:pointer;

    transition:.25s;

}


.scroll-indicator:hover{

    transform:translateX(-50%) translateY(-5px);

}

.scroll-text{

    color:white;

    letter-spacing:2px;

    font-size:.9rem;

    opacity:.75;

    margin-bottom:8px;

}

.scroll-arrow{

    color:white;

    font-size:2rem;

    animation:bounce 2s infinite;

}

@keyframes bounce{

    0%,100%{
        transform:translateY(0);
    }

    50%{
        transform:translateY(8px);
    }

}

</style>