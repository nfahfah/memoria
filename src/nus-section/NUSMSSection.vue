<template>
  <section
    id="nusms-adhocs"
    class="nusms-page"
  >

    <img
      :src="nusmsHeader"
      alt="NUSMS"
      class="page-title-image"
      v-if="nusmsHeader"
    />
    <h2 v-else class="page-title">NUSMS</h2>

    <p class="page-subtitle">
      Established in 1963 to serve the Muslim community on campus — from volunteering to camps.
    </p>

    <div class="socials-wrap">
      <a href="https://www.instagram.com/nusms" target="_blank" rel="noopener" class="social-tag">
        📷 @nusms
      </a>
      <a href="https://t.me/nusms" target="_blank" rel="noopener" class="social-tag">
        ✈️ t.me/nusms
      </a>
    </div>

    <h3 class="group-heading">Committees</h3>

    <div class="cards-grid">

      <div class="cca-card">
        <h3>🚂 FOC</h3>
        <a href="https://www.instagram.com/nusms.pbmuks.foc" target="_blank" rel="noopener" class="handle-tag">
          @nusms.pbmuks.foc
        </a>
        <p>Malay/Muslim freshman orientation camp.</p>
      </div>

      <div class="cca-card">
        <h3>🌏 OCIP</h3>
        <a href="https://www.instagram.com/nusms.ocip" target="_blank" rel="noopener" class="handle-tag">
          @nusms.ocip
        </a>
        <p>Overseas Community Involvement Project.</p>
      </div>

      <div class="cca-card">
        <h3>⚽ Rihlah</h3>
        <a href="https://www.instagram.com/nusms.rihlah" target="_blank" rel="noopener" class="handle-tag">
          @nusms.rihlah
        </a>
        <p>Sports outreach to instill worthwhile values and empower youth.</p>
      </div>

      <div class="cca-card">
        <h3>🌟 Valour</h3>
        <a href="https://www.instagram.com/nusms.valour" target="_blank" rel="noopener" class="handle-tag">
          @nusms.valour
        </a>
        <p>Youth outreach adhoc committed to fostering the holistic development of youths.</p>
      </div>

      <div class="cca-card">
        <h3>🕋 IAS</h3>
        <a href="https://www.instagram.com/nusms.ias" target="_blank" rel="noopener" class="handle-tag">
          @nusms.ias
        </a>
        <p>A safe space for everyone to learn more about Islam together.</p>
      </div>

      <div class="cca-card">
        <h3>📗 QTIO</h3>
        <a href="https://www.instagram.com/nusms.qtio" target="_blank" rel="noopener" class="handle-tag">
          @nusms.qtio
        </a>
        <p>Build a community with love for the Qur'an.</p>
      </div>

      <div class="cca-card">
        <h3>🤝 beKhayr</h3>
        <a href="https://www.instagram.com/nusms.bekhayr" target="_blank" rel="noopener" class="handle-tag">
          @nusms.bekhayr
        </a>
        <p>Local humanitarian project aiming to uplift underprivileged communities.</p>
      </div>

      <div class="cca-card">
        <h3>🏔️ FitDeen</h3>
        <a href="https://www.instagram.com/nusms.fitdeen" target="_blank" rel="noopener" class="handle-tag">
          @nusms.fitdeen
        </a>
        <p>Bridging spirituality with adventure and exploration.</p>
      </div>

      <div class="cca-card">
        <h3>☪️ PBUH</h3>
        <a href="https://www.instagram.com/nusms.pbuh" target="_blank" rel="noopener" class="handle-tag">
          @nusms.pbuh
        </a>
        <p>Increase knowledge about our Prophet Muhammad s.a.w. in various aspects.</p>
      </div>

      <div class="cca-card">
        <h3>🌸 Nisaa</h3>
        <a href="https://www.instagram.com/nusms.nisaa" target="_blank" rel="noopener" class="handle-tag">
          @nusms.nisaa
        </a>
        <p>For Ladies, By Ladies: strengthen & embrace identity as Muslim Women.</p>
      </div>

      <div class="cca-card">
        <h3>🕌 Musollah</h3>
        <a href="https://www.instagram.com/nusms.musollah" target="_blank" rel="noopener" class="handle-tag">
          @nusms.musollah
        </a>
        <p>Maintain the prayer spaces in NUS.</p>
      </div>

    </div>

  </section>
</template>

<script setup>
// If you have a title graphic like the other pages (a.png, c.png, pc.png),
// drop it in assets/images and uncomment the import below.
// import nusmsHeader from "../assets/images/nusms.png";
const nusmsHeader = null;
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

.nusms-page {
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

.nusms-page {
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