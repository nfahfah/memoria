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
        const target = document.getElementById("welcome");
        if (!target) return;
    
        const header = document.querySelector("header, .site-header, .navbar");
        const headerOffset = header ? header.offsetHeight : 100;
    
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    }
    </script>
    
    <style scoped>
    
    .home{
    
        min-height:85vh;
    
        background:linear-gradient(
            to bottom,
            #402b6d 0%,
            #402b6d 65%,
            #3a2761 85%,
            #2c1d4d 100%
        );
    
        position:relative;
    
        overflow:hidden;
    
        display:flex;
    
        flex-direction:column;
    
        justify-content:center;
    
        align-items:center;
    
        padding-top:120px;
    
        padding-bottom:70px;
    
        box-sizing:border-box;
    
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
    
        left:-5%;
    
        top:50%;
    
        transform:translateY(-50%);
    
        opacity:.18;
    
        pointer-events:none;
    
        width: max(110%, 1200px);
    
        height: auto;
    
        -webkit-mask-image:linear-gradient(to bottom, black 60%, transparent 95%);
    
        mask-image:linear-gradient(to bottom, black 60%, transparent 95%);
    
    }
    
    .memoria-title{
    
        width: min(900px, 90vw);
    
        height: auto;
    
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
    
        margin-top:60px;
    
        display:flex;
    
        flex-direction:column;
    
        align-items:center;
    
        z-index:2;
    
        cursor:pointer;
    
        transition:.25s;
    
    }
    
    
    .scroll-indicator:hover{
    
        transform:translateY(-5px);
    
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
    
    /* =========================
       Tablet
    ========================= */
    @media (max-width: 768px) {
    
    .home {
      padding-top: 90px;
      padding-bottom: 50px;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      min-height: auto;
    }
    
    .scroll-indicator {
      margin-top: 40px;
    }
    
    .track {
      width: 140%;
      left: -20%;
      top: 35%;
      transform: translateY(-50%);
    }
    
    .memoria-title {
      width: 95%;
      max-width: 600px;
    }
    
    h1 {
      font-size: 3rem;
    }
    
    .scroll-text {
      font-size: 0.8rem;
      text-align: center;
    }
    
    .scroll-arrow {
      font-size: 1.6rem;
    }
    
    }
    
    /* =========================
     Mobile Phones
    ========================= */
    @media (max-width: 480px) {
    
    .home {
      padding-top: 80px;
      padding-bottom: 40px;
      padding-left: 1rem;
      padding-right: 1rem;
      min-height: auto;
    }
    
    .scroll-indicator {
      margin-top: 30px;
    }
    
    .track {
      width: 160%;
      left: -25%;
      top: 30%;
      transform: translateY(-20%);
      opacity: 0.14;
    }
    
    .memoria-title {
      width: 100%;
      padding-top: 50px;
    }
    
    h1 {
      font-size: 2.2rem;
    }
    
    .scroll-text {
      font-size: 0.75rem;
      letter-spacing: 1px;
    }
    
    .scroll-arrow {
      font-size: 1.4rem;
    }
    
    }
    </style>