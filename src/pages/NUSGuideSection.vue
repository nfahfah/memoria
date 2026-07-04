<template>
  <section id="nus-guide-landing" class="nus-guide-page console-theme">

    <h2 class="page-title-text">NUS Guide</h2>
    <p class="page-subtitle">Pick a button. Press it. Find out everything.</p>

    <div class="console-wrap">

      <div class="console-glow"></div>

      <!-- the organic blob-shaped console body -->
      <div class="console-blob">

        <!-- scattered tiny decorative buttons/dials -->
        <div class="deco-field">
          <div
            v-for="(deco, i) in decoButtons"
            :key="i"
            class="deco-btn"
            :style="{ background: deco.color, top: deco.top, left: deco.left, width: deco.size, height: deco.size }"
          ></div>
        </div>

        <!-- decorative mini keypad grid, like the little key cluster in the reference -->
        <div class="keypad-grid">
          <div
            v-for="n in 20"
            :key="'k' + n"
            class="keypad-key"
          ></div>
        </div>

        <!-- decorative big dial, purely visual -->
        <div class="deco-dial">
          <div class="dial-ring"></div>
          <div class="dial-ring dial-ring-inner"></div>
        </div>

        <!-- the real, clickable button cluster -->
        <div class="button-pod">

          <button class="console-btn academics-btn" @click="scrollToSection('academics')">
            <span class="btn-icon">📚</span>
            <span class="btn-label">Academics</span>
          </button>

          <button class="console-btn nusms-btn" @click="scrollToSection('nusms')">
            <span class="btn-icon">🕌</span>
            <span class="btn-label">NUSMS</span>
          </button>

          <button class="console-btn pbmuks-btn" @click="scrollToSection('pbmuks')">
            <span class="btn-icon">🎭</span>
            <span class="btn-label">PBMUKS</span>
          </button>

          <button class="console-btn ccas-btn" @click="scrollToSection('ccas')">
            <span class="btn-icon">🥋</span>
            <span class="btn-label">CCAs</span>
          </button>

          <button class="console-btn eats-btn" @click="scrollToSection('eats')">
            <span class="btn-icon">🍜</span>
            <span class="btn-label">Eats</span>
          </button>

          <button class="console-btn musollahs-btn" @click="scrollToSection('musollahs')">
            <span class="btn-icon">🤲</span>
            <span class="btn-label">Musollahs</span>
          </button>

        </div>

      </div>

      <!-- pedestal stand beneath the console -->
      <div class="console-neck"></div>
      <div class="console-pedestal"></div>

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
import AcademicsSection from "../nus-section/AcademicsSection.vue";
import NUSMSSection from "../nus-section/NUSMSSection.vue";
import PBMUKSSection from "../nus-section/PBMUKSSection.vue";
import CCAsSection from "../nus-section/CCAsSection.vue";
import EatsSection from "../nus-section/EatsSection.vue";
import MusollahsSection from "../nus-section/MusollahsSection.vue";

// generates a scattered field of small decorative (non-clickable) buttons/lights
const decoColors = ["#8BD3F0", "#FFD87A", "#FF9A8B", "#B29CF0", "#7EE8B8", "#F0A6D8", "#FFFFFF"];

const decoButtons = Array.from({ length: 34 }).map((_, i) => {
  return {
    // scattered across the right two-thirds of the blob, avoiding the button-pod area on the left
    top: `${10 + ((i * 37) % 80)}%`,
    left: `${42 + ((i * 53) % 54)}%`,
    size: `${7 + (i % 3) * 4}px`,
    color: decoColors[i % decoColors.length],
  };
});

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
    background:radial-gradient(circle at top, #6B5B9A 0%, #4A3B78 55%, #2E2350 100%);
    padding:110px 8% 100px;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    align-items:center;
}

.page-title-text{
    text-align:center;
    font-family:"Luckiest Guy", cursive;
    color:#FFDF78;
    font-size:3rem;
    margin-bottom:10px;
}

.page-subtitle{
    text-align:center;
    color:#E5DAFF;
    font-size:1.05rem;
    margin-bottom:70px;
}

.console-wrap{
    position:relative;
    width:100%;
    max-width:1000px;
    display:flex;
    flex-direction:column;
    align-items:center;
}

.console-glow{
    position:absolute;
    top:-30px;
    left:50%;
    transform:translateX(-50%);
    width:80%;
    height:120px;
    background:radial-gradient(ellipse at center, rgba(255,223,120,.2), transparent 70%);
    pointer-events:none;
    animation:pulse 3s ease-in-out infinite;
    z-index:0;
}

@keyframes pulse{
    0%,100%{ opacity:.5; }
    50%{ opacity:1; }
}

/* organic kidney/blob shaped console body */
.console-blob{
    position:relative;
    width:100%;
    aspect-ratio:1.9 / 1;
    background:linear-gradient(155deg, #C9A9DC 0%, #B48FCB 45%, #9C76B8 100%);
    border-radius:38% 62% 55% 45% / 60% 45% 55% 40%;
    box-shadow:
        0 30px 55px rgba(0,0,0,.45),
        inset 0 6px 12px rgba(255,255,255,.35),
        inset 0 -14px 24px rgba(0,0,0,.2);
    z-index:2;
    overflow:hidden;
}

.deco-field{
    position:absolute;
    inset:0;
}

.deco-btn{
    position:absolute;
    border-radius:50%;
    box-shadow:
        0 2px 0 rgba(0,0,0,.3),
        inset 0 1px 2px rgba(255,255,255,.6);
    opacity:.9;
    pointer-events:none;
}

.keypad-grid{
    position:absolute;
    top:12%;
    right:6%;
    width:26%;
    display:grid;
    grid-template-columns:repeat(5, 1fr);
    gap:6%;
    pointer-events:none;
}

.keypad-key{
    aspect-ratio:1 / 1;
    background:linear-gradient(#F4EBFA, #D8C4E8);
    border-radius:4px;
    box-shadow:0 2px 0 rgba(0,0,0,.25), inset 0 1px 1px rgba(255,255,255,.8);
}

.deco-dial{
    position:absolute;
    bottom:10%;
    right:10%;
    width:15%;
    aspect-ratio:1/1;
    pointer-events:none;
}

.dial-ring{
    position:absolute;
    inset:0;
    border-radius:50%;
    background:conic-gradient(#E86C6C, #F0C24B, #6FBF73, #5B9BD5, #B084CC, #E86C6C);
    box-shadow:0 3px 8px rgba(0,0,0,.3);
}

.dial-ring-inner{
    inset:22%;
    background:#F4EBFA;
    box-shadow:inset 0 2px 4px rgba(0,0,0,.25);
}

/* pod holding the 6 real clickable buttons, top-left of the blob like the reference image's main cluster */
.button-pod{
    position:absolute;
    top:8%;
    left:5%;
    width:52%;
    height:84%;
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    grid-template-rows:repeat(2, 1fr);
    gap:4%;
    align-items:center;
    justify-items:center;
}

.console-btn{
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:6px;
    width:100%;
    height:100%;
    border:3px solid rgba(255,255,255,.6);
    border-radius:50%;
    cursor:pointer;
    font-family:inherit;
    box-shadow:
        0 6px 0 rgba(0,0,0,.3),
        0 10px 16px rgba(0,0,0,.3),
        inset 0 4px 8px rgba(255,255,255,.35),
        inset 0 -6px 10px rgba(0,0,0,.25);
    transition:transform .12s ease, box-shadow .12s ease;
}

.console-btn:hover{
    transform:translateY(-4px) scale(1.05);
    filter:brightness(1.15);
}

.console-btn:active{
    transform:translateY(3px) scale(1);
    box-shadow:
        0 3px 0 rgba(0,0,0,.3),
        0 4px 8px rgba(0,0,0,.3),
        inset 0 4px 8px rgba(255,255,255,.35),
        inset 0 -6px 10px rgba(0,0,0,.25);
}

.academics-btn{ background:radial-gradient(circle at 35% 30%, #CE93D8, #7B1FA2); }
.nusms-btn{ background:radial-gradient(circle at 35% 30%, #90CAF9, #1565C0); }
.pbmuks-btn{ background:radial-gradient(circle at 35% 30%, #FFAB91, #D84315); }
.ccas-btn{ background:radial-gradient(circle at 35% 30%, #EF9A9A, #C62828); }
.eats-btn{ background:radial-gradient(circle at 35% 30%, #FFF176, #F9A825); }
.musollahs-btn{ background:radial-gradient(circle at 35% 30%, #A5D6A7, #2E7D32); }

.btn-icon{
    font-size:1.6rem;
}

.btn-label{
    font-family:"Luckiest Guy", cursive;
    color:white;
    font-size:.62rem;
    text-shadow:0 2px 4px rgba(0,0,0,.4);
    text-align:center;
    line-height:1.1;
}

/* neck connecting console to pedestal */
.console-neck{
    width:14%;
    height:34px;
    background:linear-gradient(#4A3B78, #362459);
    z-index:1;
    margin-top:-6px;
}

/* rounded pedestal seat beneath, like the console standing on a stool */
.console-pedestal{
    width:46%;
    height:60px;
    background:radial-gradient(ellipse at top, #5E4A8C, #362459);
    border-radius:50%;
    box-shadow:0 20px 30px rgba(0,0,0,.4);
    margin-top:-10px;
}

@media (max-width: 768px) {

.nus-guide-page{ padding:80px 6% 80px; }
.page-title-text{ font-size:2.2rem; }
.page-subtitle{ margin-bottom:50px; }
.console-blob{ aspect-ratio:1.5 / 1; }
.btn-icon{ font-size:1.2rem; }
.btn-label{ font-size:.52rem; }
.keypad-grid{ width:24%; }
.deco-dial{ width:16%; }
.console-neck{ height:26px; }
.console-pedestal{ width:50%; height:44px; }

}

@media (max-width: 480px) {

.nus-guide-page{ padding:60px 5% 60px; }
.page-title-text{ font-size:1.8rem; }
.page-subtitle{ font-size:.9rem; margin-bottom:40px; }
.console-glow{ height:80px; top:-20px; }
.console-blob{ aspect-ratio:1.25 / 1; border-radius:42% 58% 55% 45% / 55% 48% 52% 45%; }
.button-pod{ top:6%; left:4%; width:58%; height:88%; gap:3%; }
.console-btn{ border-width:2px; box-shadow:0 4px 0 rgba(0,0,0,.3), 0 6px 12px rgba(0,0,0,.3), inset 0 3px 6px rgba(255,255,255,.35), inset 0 -4px 8px rgba(0,0,0,.25); }
.btn-icon{ font-size:.95rem; }
.btn-label{ font-size:.44rem; }
.keypad-grid{ width:22%; right:5%; }
.deco-dial{ width:18%; }
.console-neck{ height:20px; width:16%; }
.console-pedestal{ width:56%; height:36px; }

}

</style>