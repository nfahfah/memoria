<template>
  <section
    id="musollahs"
    class="musollahs-page"
  >

    <img
      :src="musollahsHeader"
      alt="Musollahs & Masjids"
      class="page-title-image"
      v-if="musollahsHeader"
    />
    <h2 v-else class="page-title">Musollahs & Masjids</h2>

    <p class="page-subtitle">
      There are over 20 musollahs in NUS — here's where to find them.
    </p>

    <a
    href="https://t.me/nus_musollah_finder_bot"
      target="_blank"
      rel="noopener"
      class="bot-button"
    >
      🤖 Find your nearest musollah via Telegram Bot →
    </a>
    

    <p class="halal-link-wrap">
      🕌 Check out <a href="https://www.instagram.com/nus.musollah" target="_blank" rel="noopener">@nus.musollah</a> on Instagram
      or <a href="https://www.nusms.org.sg/musollahs" target="_blank" rel="noopener">nusms.org.sg/musollah</a> for detailed directions to each area.
    </p>

    <!-- Musollahs -->
    <h3 class="group-heading">📍 Musollahs by Area</h3>

    <div class="cards-grid">

      <div class="info-card">
        <h3>🔬 Science</h3>
        <p class="path-tag">Faculty of Science</p>
      </div>

      <div class="info-card">
        <h3>🏙️ UTown</h3>
        <p class="path-tag">ERC · SRC</p>
      </div>

      <div class="info-card">
        <h3>💻 Computing / Biz</h3>
        <p class="path-tag">Design & Engineering</p>
        <div class="stall-tags">
          <span class="stall-tag">EA</span>
          <span class="stall-tag">E3</span>
          <span class="stall-tag">E5</span>
          <span class="stall-tag">SDE3</span>
        </div>
      </div>

      <div class="info-card">
        <h3>📚 FASS</h3>
        <p class="path-tag">Arts, Business and Computing</p>
        <div class="stall-tags">
          <span class="stall-tag">AS3</span>
          <span class="stall-tag">AS4</span>
          <span class="stall-tag">AS6</span>
          <span class="stall-tag">Central Library</span>
          <span class="stall-tag">BIZ2</span>
          <span class="stall-tag">COM1</span>
          <span class="stall-tag">HSSML</span>
        </div>
      </div>

      <div class="info-card">
        <h3>🩺 Medicine / Nursing</h3>
        <p class="path-tag">Medicine and Science</p>
        <div class="stall-tags">
          <span class="stall-tag">MD3</span>
          <span class="stall-tag">MD6</span>
          <span class="stall-tag">Medsci Library</span>
          <span class="stall-tag">S1A</span>
          <span class="stall-tag">S5</span>
        </div>
      </div>

      <div class="info-card">
        <h3>🏫 Others</h3>
        <p class="path-tag">MPSH1 · UHall · Bukit Timah Campus</p>
        <div class="stall-tags">
          <span class="stall-tag">MPSH1</span>
          <span class="stall-tag">UHall</span>
          <span class="stall-tag">Bukit Timah Campus Blk B</span>
        </div>
      </div>

    </div>

    <!-- Masjids -->
    <h3 class="group-heading">🕌 Nearby Masjids</h3>
    <p class="section-note">
      Tap the postal code to copy it — paste straight into Grab/Google Maps.
    </p>

    <div class="cards-grid">

      <div
        class="masjid-card"
        v-for="masjid in masjids"
        :key="masjid.name"
      >
        <h4>{{ masjid.name }}</h4>
        <p class="masjid-address">{{ masjid.address }}</p>

        <button
          class="postal-btn"
          @click="copyPostal(masjid.postal)"
        >
          📮 {{ masjid.postal }}
          <span class="copy-hint">{{ copiedCode === masjid.postal ? 'Copied!' : 'Tap to copy' }}</span>
        </button>
      </div>

    </div>

  </section>
</template>

<script setup>
import { ref } from "vue";

// If you have a title graphic like the other pages (a.png, c.png, pc.png),
// drop it in assets/images and uncomment the import below.
// import musollahsHeader from "../assets/images/musollahs.png";
const musollahsHeader = null;

// PLACEHOLDER DATA — swap in the real masjid list + postal codes
const masjids = [
  { name: "Masjid Name 1", address: "Address line goes here", postal: "123456" },
  { name: "Masjid Name 2", address: "Address line goes here", postal: "234567" },
  { name: "Masjid Name 3", address: "Address line goes here", postal: "345678" },
];

const copiedCode = ref(null);

async function copyPostal(code) {
  try {
    await navigator.clipboard.writeText(code);
    copiedCode.value = code;
    setTimeout(() => {
      if (copiedCode.value === code) copiedCode.value = null;
    }, 1500);
  } catch (err) {
    console.error("Copy failed:", err);
  }
}
</script>

<style scoped>

.musollahs-page{

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

    margin-bottom:24px;

}

.halal-link-wrap{

    text-align:center;

    color:#402B6D;

    background:#EDE4FA;

    max-width:650px;

    margin:0 auto 50px;

    padding:12px 20px;

    border-radius:999px;

    font-size:.95rem;

    font-weight:600;

}

.halal-link-wrap a{

    color:#6C4AB6;

    text-decoration:underline;

    font-weight:bold;

}

.group-heading{

    font-family:"Luckiest Guy", cursive;

    color:#402B6D;

    font-size:1.6rem;

    max-width:1000px;

    margin:50px auto 6px;

    letter-spacing:.5px;

}

.section-note{

    max-width:1000px;

    margin:0 auto 24px;

    color:#5E4D88;

    font-size:.9rem;

}

.cards-grid{

    display:grid;

    grid-template-columns:repeat(2, 1fr);

    gap:28px;

    max-width:1000px;

    margin:0 auto;

}

.info-card{

    background:#FFF9E8;

    border-radius:20px;

    padding:28px 30px;

    box-shadow:var(--shadow, 0 8px 20px rgba(0,0,0,.08));

    transition:.25s;

}

.info-card:hover{

    transform:translateY(-4px);

}

.info-card h3{

    font-family:"Luckiest Guy", cursive;

    color:#402B6D;

    font-size:1.3rem;

    margin-bottom:10px;

    letter-spacing:.5px;

}

.bot-button{

    display:block;

    width:fit-content;

    margin:0 auto 30px;

    background:#402B6D;

    color:white;

    text-decoration:none;

    font-weight:bold;

    padding:14px 28px;

    border-radius:999px;

    text-align:center;

    transition:.25s;

    box-shadow:0 8px 20px rgba(64,43,109,.25);

}

.bot-button:hover{

    background:#573A99;

    transform:translateY(-3px);

}

.path-tag{

    display:inline-block;

    background:#EDE4FA;

    color:#6C4AB6;

    font-size:.85rem;

    font-weight:bold;

    padding:6px 14px;

    border-radius:999px;

    margin-bottom:16px;

}

.stall-tags{

    display:flex;

    flex-wrap:wrap;

    gap:8px;

}

.stall-tag{

    background:#402B6D;

    color:white;

    font-size:.85rem;

    font-weight:600;

    padding:7px 14px;

    border-radius:999px;

    white-space:nowrap;

}

.masjid-card{

    background:#FFF9E8;

    border-radius:20px;

    padding:26px 28px;

    box-shadow:var(--shadow, 0 8px 20px rgba(0,0,0,.08));

    transition:.25s;

}

.masjid-card:hover{

    transform:translateY(-4px);

}

.masjid-card h4{

    font-family:"Luckiest Guy", cursive;

    color:#402B6D;

    font-size:1.15rem;

    margin-bottom:8px;

}

.masjid-address{

    color:#555;

    font-size:.92rem;

    margin-bottom:16px;

    line-height:1.5;

}

.postal-btn{

    display:flex;

    align-items:center;

    justify-content:space-between;

    width:100%;

    background:#402B6D;

    color:white;

    border:none;

    padding:12px 18px;

    border-radius:12px;

    font-size:1rem;

    font-weight:bold;

    cursor:pointer;

    transition:.2s;

    font-family:inherit;

}

.postal-btn:hover{

    background:#573A99;

}

.postal-btn:active{

    transform:scale(.97);

}

.copy-hint{

    font-size:.75rem;

    font-weight:600;

    opacity:.8;

    background:rgba(255,255,255,.15);

    padding:4px 10px;

    border-radius:999px;

}

/* =========================
   Tablet
========================= */
@media (max-width: 768px) {

.bot-button{
  font-size:.9rem;
  padding:12px 22px;
}

.musollahs-page {
  padding: 80px 6%;
}

.page-title-image {
  height: 100px;
}

.page-title {
  font-size: 2.2rem;
}

.page-subtitle {
  margin-bottom: 18px;
}

.halal-link-wrap {
  margin-bottom: 40px;
  font-size: .9rem;
}

.group-heading {
  font-size: 1.35rem;
  margin: 40px auto 6px;
}

.cards-grid {
  grid-template-columns: 1fr;
  gap: 20px;
}

.info-card {
  padding: 22px 22px;
}

}

/* =========================
   Mobile Phones
========================= */
@media (max-width: 480px) {

.musollahs-page {
  padding: 60px 5%;
}

.page-title {
  font-size: 1.8rem;
}

.page-subtitle {
  font-size: 0.95rem;
  margin-bottom: 16px;
}

.halal-link-wrap {
  font-size: .85rem;
  padding: 10px 16px;
}

.group-heading {
  font-size: 1.2rem;
}

.section-note {
  font-size: .82rem;
}

.info-card, .masjid-card {
  padding: 18px 18px;
  border-radius: 16px;
}

.info-card h3, .masjid-card h4 {
  font-size: 1.05rem;
}

.postal-btn {
  padding: 10px 14px;
  font-size: .92rem;
}

.copy-hint {
  font-size: .68rem;
  padding: 3px 8px;
}

}

</style>