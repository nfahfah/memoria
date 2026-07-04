<template>
  <section
    id="eats"
    class="eats-page"
  >

    <img
      :src="eatsHeader"
      alt="Eats"
      class="page-title-image"
      v-if="eatsHeader"
    />
    <h2 v-else class="page-title">Eats</h2>

    <p class="page-subtitle">
      Halal makan spots around campus, sorted by area.
    </p>

    <p class="halal-link-wrap">
      🍽️ For the full halal food list & locations, visit
      <a href="https://www.nusms.org.sg/halal-food" target="_blank" rel="noopener">nusms.org.sg/halal-food</a>
    </p>

    <div class="cards-grid">

      <!-- FASS -->
      <div class="info-card">
        <h3>📚 FASS</h3>
        <p class="path-tag">The Deck · CLB Forum</p>

        <div class="canteen-block">
          <h4>The Deck</h4>
          <div class="stall-tags">
            <span class="stall-tag">Western Stall</span>
            <span class="stall-tag">Muslim Stall</span>
            <span class="stall-tag">Fong Seng Nasi Lemak</span>
          </div>
        </div>

        <div class="canteen-block">
          <h4>Forum</h4>
          <div class="stall-tags">
            <span class="stall-tag">The Soup Spoon X Anna's</span>
            <span class="stall-tag">Hotbake Vending Machine</span>
            <span class="stall-tag">InstaChef Vending Machine</span>
            <span class="stall-tag">Shake Salad Vending Machine</span>
          </div>
        </div>
      </div>

      <!-- CDE -->
      <div class="info-card">
        <h3>🏗️ College of Design & Engineering</h3>
        <p class="path-tag">Techno Edge</p>

        <div class="canteen-block">
          <div class="stall-tags">
            <span class="stall-tag">Nasi Padang Stall</span>
            <span class="stall-tag">Mala Hotpot</span>
            <span class="stall-tag">Bistro Box</span>
            <span class="stall-tag">Shake Salad Vending Machine</span>
            <span class="stall-tag">Tteokbokki Vending Machine</span>
          </div>
        </div>
      </div>

      <!-- FOS -->
      <div class="info-card">
        <h3>🔬 FOS</h3>
        <p class="path-tag">Frontier</p>

        <div class="canteen-block">
          <div class="stall-tags">
            <span class="stall-tag">Muslim Stall</span>
            <span class="stall-tag">Western Stall</span>
            <span class="stall-tag">Uncle Penyet Fusion</span>
            <span class="stall-tag">Eighteen Chefs</span>
          </div>
        </div>


        <div class="canteen-block">
          <h4>Medicine-Science Library</h4>
          <div class="stall-tags">
            <span class="stall-tag">Good Day Cafe</span>
          </div>
        </div>
      </div>

      <!-- Computing -->
      <div class="info-card">
        <h3>💻 Computing</h3>
        <p class="path-tag">Level 1 & The Terrace @ COM3</p>

        <div class="canteen-block">
          <div class="stall-tags">
            <span class="stall-tag">The Coffee Bean & Tea Leaf</span>
            <span class="stall-tag">Makan Boleh</span>
            <span class="stall-tag">InstaChef Vending Machine</span>
          </div>
        </div>
      </div>

      <!-- UTown -->
      <div class="info-card wide">
        <h3>🏙️ UTown</h3>
        <p class="path-tag">Flavours · FineFood · SRC & Town Plaza · ERC</p>

        <div class="canteen-grid">

          <div class="canteen-block">
            <h4>Flavours</h4>
            <div class="stall-tags">
              <span class="stall-tag">Pondok Nasi Lemak</span>
              <span class="stall-tag">Yong Tau Foo</span>
              <span class="stall-tag">Indian Stall</span>
            </div>
          </div>

          <div class="canteen-block">
            <h4>FineFood</h4>
            <div class="stall-tags">
              <span class="stall-tag">Japanese Fusion Stall</span>
              <span class="stall-tag">Western Stall</span>
              <span class="stall-tag">Thai Stall</span>
              <span class="stall-tag">Korean Stall</span>
            </div>
          </div>

          <div class="canteen-block">
            <h4>SRC / Town Plaza</h4>
            <div class="stall-tags">
              <span class="stall-tag">Bismillah Biryani Restaurant</span>
              <span class="stall-tag">Subway</span>
              <span class="stall-tag">The Royals Bistro</span>
              <span class="stall-tag">Triplets Bakery</span>
              <span class="stall-tag">Mala</span>
              <span class="stall-tag">Mr Bean</span>
              <span class="stall-tag">Jollibee</span>
            </div>
          </div>

          <div class="canteen-block">
            <h4>ERC</h4>
            <div class="stall-tags">
              <span class="stall-tag">Chef-in-a-box Vending Machine</span>
              <span class="stall-tag">Shake Salad vending machine</span>
            </div>
          </div>

        </div>
      </div>

      <!-- Yusof Ishak House -->
      <div class="info-card">
        <h3>🌳 Yusof Ishak House</h3>
        <p class="path-tag">Canteen · Kiosks </p>

        <div class="canteen-block">
            <h4>Canteen</h4>
            <div class="stall-tags">
              <span class="stall-tag">Muslim Stall</span>
            </div>
        </div>
        
        <div class="canteen-block">
            <h4>Kiosks</h4>
            <div class="stall-tags">
              <span class="stall-tag">Wok Express</span>
              <span class="stall-tag">Hotbake Vending Machine</span>
            </div>
        </div>
        
      </div>


      <!-- Residences -->
      <div class="info-card">
        <h3>🏡 Residences</h3>
        <p class="path-tag">PGP · Valour House </p>

        <div class="canteen-block">
            <h4>PGP</h4>
            <div class="stall-tags">
              <span class="stall-tag">Shake Salad Vending Machine</span>
              <span class="stall-tag">Hotbake Vending Machine</span>
              <span class="stall-tag">Tteokbokki Machine</span>
            </div>
        </div>
        
        <div class="canteen-block">
            <h4>Valour House</h4>
            <div class="stall-tags">
              <span class="stall-tag">Shake Salad Vending Machine</span>
            </div>
        </div>
        
      </div>

    </div>

  </section>
</template>

<script setup>
// If you have a title graphic like the other pages (a.png, c.png, pc.png),
// drop it in assets/images and uncomment the import below.
// import eatsHeader from "../assets/images/eats.png";
const eatsHeader = null;
</script>

<style scoped>

.eats-page{

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

    max-width:600px;

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

.info-card.wide{

    grid-column:1 / -1;

}

.info-card h3{

    font-family:"Luckiest Guy", cursive;

    color:#402B6D;

    font-size:1.3rem;

    margin-bottom:10px;

    letter-spacing:.5px;

}

.path-tag{

    display:inline-block;

    background:#EDE4FA;

    color:#6C4AB6;

    font-size:.85rem;

    font-weight:bold;

    padding:6px 14px;

    border-radius:999px;

    margin-bottom:18px;

}

.canteen-grid{

    display:grid;

    grid-template-columns:repeat(3, 1fr);

    gap:20px;

}

.canteen-block{

    margin-bottom:16px;

}

.canteen-block:last-child{

    margin-bottom:0;

}

.canteen-block h4{

    color:#402B6D;

    font-size:1rem;

    margin-bottom:10px;

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

/* =========================
   Tablet
========================= */
@media (max-width: 768px) {

.eats-page {
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

.cards-grid {
  grid-template-columns: 1fr;
  gap: 20px;
}

.info-card {
  padding: 22px 22px;
}

.canteen-grid {
  grid-template-columns: 1fr;
  gap: 4px;
}

}

/* =========================
   Mobile Phones
========================= */
@media (max-width: 480px) {

.eats-page {
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

.info-card {
  padding: 18px 18px;
  border-radius: 16px;
}

.info-card h3 {
  font-size: 1.1rem;
}

.path-tag {
  font-size: 0.78rem;
}

.stall-tag {
  font-size: 0.78rem;
  padding: 6px 12px;
}

}

</style>