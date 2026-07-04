<template>
  <section
    id="pbmuks"
    class="pbmuks-page"
  >

    <img
      :src="pbmuksHeader"
      alt="PBMUKS"
      class="page-title-image"
      v-if="pbmuksHeader"
    />
    <h2 v-else class="page-title">PBMUKS</h2>

    <p class="page-subtitle">
      The NUS Malay Language Society — cultivating critical thinkers on Malay language and culture, and students concerned about community development.
    </p>

    <div class="socials-wrap">
      <a href="https://www.instagram.com/pbmuks" target="_blank" rel="noopener" class="social-tag">
        📷 @pbmuks
      </a>
      <a href="https://t.me/nuspbmuks" target="_blank" rel="noopener" class="social-tag">
        ✈️ t.me/nuspbmuks
      </a>
    </div>

    <h3 class="group-heading">Committees</h3>

    <div class="cards-grid">

      <div class="cca-card">
        <h3>🎭 Pentas Budaya</h3>
        <a href="https://www.instagram.com/nuspentasbudaya" target="_blank" rel="noopener" class="handle-tag">
          @nuspentasbudaya
        </a>
        <p>A theatre production that seeks to discuss social issues and phenomena.</p>
      </div>

      <div class="cca-card">
        <h3>✍️ Bisikan Pena</h3>
        <a href="https://www.instagram.com/nusbisikanpena" target="_blank" rel="noopener" class="handle-tag">
          @nusbisikanpena
        </a>
        <p>For youths to deliver social commentary through their Malay literary works.</p>
      </div>

      <div class="cca-card">
        <h3>🚂 FOC</h3>
        <a href="https://www.instagram.com/nusms.pbmuks.foc" target="_blank" rel="noopener" class="handle-tag">
          @nusms.pbmuks.foc
        </a>
        <p>Malay/Muslim Freshmen Orientation Camp.</p>
      </div>

      <div class="cca-card">
        <h3>🎵 Merdu</h3>
        <a href="https://www.instagram.com/merdu2024" target="_blank" rel="noopener" class="handle-tag">
          @merdu2024
        </a>
        <p>Song-writing and collaboration with Malay youths of Singapore.</p>
      </div>

      <div class="cca-card">
        <h3>🌱 Mekar</h3>
        <a href="https://www.instagram.com/nusmekar" target="_blank" rel="noopener" class="handle-tag">
          @nusmekar
        </a>
        <p>An outreach programme dedicated to empowering the special needs and autism community.</p>
      </div>

    </div>

  </section>
</template>

<script setup>
// If you have a title graphic like the other pages (a.png, c.png, pc.png),
// drop it in assets/images and uncomment the import below.
// import pbmuksHeader from "../assets/images/pbmuks.png";
const pbmuksHeader = null;
</script>

<style scoped>

.pbmuks-page{

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

    margin-bottom:26px;

    max-width:650px;

    margin-left:auto;

    margin-right:auto;

}

.socials-wrap{

    display:flex;

    justify-content:center;

    gap:14px;

    margin-bottom:50px;

    flex-wrap:wrap;

}

.social-tag{

    display:inline-block;

    background:#402B6D;

    color:white;

    text-decoration:none;

    font-weight:bold;

    font-size:.9rem;

    padding:10px 20px;

    border-radius:999px;

    transition:.25s;

    box-shadow:0 8px 20px rgba(64,43,109,.2);

}

.social-tag:hover{

    background:#573A99;

    transform:translateY(-3px);

}

.group-heading{

    font-family:"Luckiest Guy", cursive;

    color:#402B6D;

    font-size:1.6rem;

    max-width:1000px;

    margin:0 auto 24px;

    letter-spacing:.5px;

}

.cards-grid{

    display:grid;

    grid-template-columns:repeat(3, 1fr);

    gap:24px;

    max-width:1100px;

    margin:0 auto;

}

.cca-card{

    background:#FFF9E8;

    border-radius:20px;

    padding:26px 26px;

    box-shadow:var(--shadow, 0 8px 20px rgba(0,0,0,.08));

    transition:.25s;

}

.cca-card:hover{

    transform:translateY(-4px);

}

.cca-card h3{

    font-family:"Luckiest Guy", cursive;

    color:#402B6D;

    font-size:1.15rem;

    margin-bottom:12px;

    letter-spacing:.5px;

}

.handle-tag{

    display:inline-block;

    background:#EDE4FA;

    color:#6C4AB6;

    font-size:.8rem;

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

.cca-card p{

    color:#444;

    line-height:1.6;

    font-size:.92rem;

    margin-bottom:0;

}

/* =========================
   Tablet
========================= */
@media (max-width: 768px) {

.pbmuks-page {
  padding: 80px 6%;
}

.page-title-image {
  height: 100px;
}

.page-title {
  font-size: 2.2rem;
}

.page-subtitle {
  margin-bottom: 20px;
}

.socials-wrap {
  margin-bottom: 40px;
}

.group-heading {
  font-size: 1.35rem;
}

.cards-grid {
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.cca-card {
  padding: 20px 20px;
}

}

/* =========================
   Mobile Phones
========================= */
@media (max-width: 480px) {

.pbmuks-page {
  padding: 60px 5%;
}

.page-title {
  font-size: 1.8rem;
}

.page-subtitle {
  font-size: 0.95rem;
  margin-bottom: 16px;
}

.social-tag {
  font-size: .82rem;
  padding: 8px 16px;
}

.group-heading {
  font-size: 1.2rem;
}

.cards-grid {
  grid-template-columns: 1fr;
  gap: 14px;
}

.cca-card {
  padding: 18px 18px;
  border-radius: 16px;
}

.cca-card h3 {
  font-size: 1.05rem;
}

.cca-card p {
  font-size: 0.88rem;
}

}

</style>