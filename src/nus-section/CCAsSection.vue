<template>
  <section
    id="muda-mudi-ccas"
    class="ccas-page"
  >

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

    <div class="cards-grid">

      <div class="cca-card">
        <h3>🥋 NUS Silat</h3>
        
        <a
          href="https://www.instagram.com/nus.silat"
          target="_blank"
          rel="noopener"
          class="handle-tag"
        >
          @nus.silat
        </a>
        <p>
          A Malay martial art that promotes discipline and strength through team spirit.
        </p>
      </div>

      <div class="cca-card">
        <h3>🥁 NUS Dikir Barat</h3>
        
        <a
          href="https://www.instagram.com/nusdikir"
          target="_blank"
          rel="noopener"
          class="handle-tag"
        >
          @nusdikir
        </a>
        <p class="sub-label">Adisiswa & Nuswidya</p>
        <p>
          A traditional Malay art form blending music, poetry and choral singing.
        </p>
      </div>

      <div class="cca-card">
        <h3>💃 Ilsa Tari</h3>
        
        <a
          href="https://www.instagram.com/nusilsatari"
          target="_blank"
          rel="noopener"
          class="handle-tag"
        >
          @nusilsatari
        </a>
        <p>
          Malay dance group that works with both traditional and contemporary dance.
        </p>
      </div>

      <div class="cca-card">
        <h3>📖 NUS Malay Studies Society</h3>
        
        <a
          href="https://www.instagram.com/nusmalaystudiessociety"
          target="_blank"
          rel="noopener"
          class="handle-tag"
        >
          @nusmalaystudiessociety
        </a>
        <p>
          Fostering inclusive, accessible intellectual practice and heritage appreciation via dialogue and collaboration.
        </p>
      </div>

    </div>

  </section>
</template>

<script setup>
// If you have a title graphic like the other pages (a.png, c.png, pc.png),
// drop it in assets/images and uncomment the import below.
// import ccasHeader from "../assets/images/ccas.png";
const ccasHeader = null;
</script>

<style scoped>

.ccas-page{

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

    margin-bottom:60px;

}

.cards-grid{

    display:grid;

    grid-template-columns:repeat(2, 1fr);

    gap:28px;

    max-width:1000px;

    margin:0 auto;

}

.cca-card{

    background:#FFF9E8;

    border-radius:20px;

    padding:28px 30px;

    box-shadow:var(--shadow, 0 8px 20px rgba(0,0,0,.08));

    transition:.25s;

}

.cca-card:hover{

    transform:translateY(-4px);

}

.cca-card h3{

    font-family:"Luckiest Guy", cursive;

    color:#402B6D;

    font-size:1.25rem;

    margin-bottom:12px;

    letter-spacing:.5px;

}

.handle-tag{

    display:inline-block;

    background:#EDE4FA;

    color:#6C4AB6;

    font-size:.85rem;

    font-weight:bold;

    padding:6px 14px;

    border-radius:999px;

    margin-bottom:14px;

    text-decoration:none;

    transition:.2s;

}

.handle-tag:hover{

    background:#402B6D;

    color:white;

}

.sub-label{

    color:#5E4D88;

    font-size:.85rem;

    font-weight:600;

    margin-bottom:8px;

}

.cca-card p{

    color:#444;

    line-height:1.7;

    font-size:1rem;

    margin-bottom:0;

}

/* =========================
   Tablet
========================= */
@media (max-width: 768px) {

.ccas-page {
  padding: 80px 6%;
}

.page-title-image {
  height: 100px;
}

.page-title {
  font-size: 2.2rem;
}

.page-subtitle {
  margin-bottom: 40px;
}

.cards-grid {
  grid-template-columns: 1fr;
  gap: 20px;
}

.cca-card {
  padding: 22px 22px;
}

}

/* =========================
   Mobile Phones
========================= */
@media (max-width: 480px) {

.ccas-page {
  padding: 60px 5%;
}

.page-title {
  font-size: 1.8rem;
}

.page-subtitle {
  font-size: 0.95rem;
  margin-bottom: 32px;
}

.cca-card {
  padding: 18px 18px;
  border-radius: 16px;
}

.cca-card h3 {
  font-size: 1.1rem;
}

.cca-card p {
  font-size: 0.92rem;
}

.handle-tag {
  font-size: 0.78rem;
}

}

</style>