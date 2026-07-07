<template>
  <section
    id="academics"
    class="academics-page"
  >

    <img
      :src="academicsHeader"
      alt="Academics"
      class="page-title-image"
      v-if="academicsHeader"
    />
    <h2 v-else class="page-title">Academics</h2>

    <p class="page-subtitle">
      Everything you need to survive CourseReg (and thrive).
    </p>

    <div class="cards-grid">

      <!-- Academic Calendar -->
      <div class="info-card">
        <h3>📅 Academic Calendar</h3>
        <p>
          For the complete calendar for AY25/26,
          <a href="https://nus.edu.sg/registrar/docs/default-source/calendar/ay2026-2027.pdf" target="_blank" rel="noopener">click here!</a>
        </p>
      </div>

      <!-- Guide to CourseReg -->
      <div class="info-card">
        <h3>📝 Guide to CourseReg</h3>
        <p>
          You can check the full course registration schedule
          <a href="https://www.nus.edu.sg/coursereg/docs/UGCPE_CourseRegSchedule.pdf" target="_blank" rel="noopener">here</a>.
        </p>
      </div>

      <!-- Academic Declaration -->
      <div class="info-card wide">
        <h3>📌 Academic Declaration</h3>
        <p class="path-tag">MyEduRec &gt; Academics &gt; Registration & Declarations</p>

        <ol class="steps-list">
          <li>Select courses rounds — if needed, select courses</li>
          <li>
            Check tutorial/lab schedules for all your courses and use
            <a href="https://nusmods.com" target="_blank" rel="noopener">NUSMods</a>
            to create your desired timetable(s)
          </li>
          <li>Select tutorial/lab rounds — use the method above to rank your desired sessions</li>
          <li>Make sure you have all the required tutorial and lab sessions</li>
          <li>Add/swap tutorials — only if needed</li>
        </ol>

        <p class="note">
          💡 Do note: Check your Outlook email for info on number of rounds and respective deadlines.
        </p>
      </div>

      <!-- Mod Info -->
      <div class="info-card wide">
        <h3>ℹ️ Mod Info</h3>
        <p class="highlight">
          Important website: <a href="https://nusmods.com" target="_blank" rel="noopener">nusmods.com</a>
          — search course info and plan your timetable!
        </p>
        <p>
          When "bidding" for courses later on, priority is given based on various factors,
          such as seniority. One factor that gives you priority over someone else is your
          declared major/minor, and whether the course is tied to it.
        </p>
        <p class="note">
          🎓 CHS students: To determine your class schedule each semester, check if your
          matriculation number falls into the odd or even bracket — e.g. if it ends in an
          odd digit like E******3, you're in the odd bracket.
        </p>
      </div>

      <!-- How to Rank Mods -->
      <div class="info-card wide">
        <h3>🎯 How to Rank Mods</h3>
        <p>
          For example, you have 4 different mods — A, B, C and D — and it's according to
          the mod which first-choice tutorial slot you want the most. Choose 3 tutorial
          slots for each mod (1, 2 and 3, by preference). A suggested way to rank all
          your tutorial slots:
        </p>

        <ol class="rank-list">
          <li>A1</li><li>B1</li><li>C1</li><li>D1</li>
          <li>D2</li><li>C2</li><li>B2</li><li>A2</li>
          <li>A3</li><li>B3</li><li>C3</li><li>D3</li>
        </ol>

        <p class="note">
          If needed, there's always add/drop and online swaps, and worst case manual
          registration. It's all part of student life! But if you follow the above,
          you're more likely to get your desired slots 🙂
        </p>
      </div>

    </div>

  </section>
</template>

<script setup>
// If you have a title graphic like the other pages (a.png, c.png, pc.png),
// drop it in assets/images and uncomment the import below.
// import academicsHeader from "../assets/images/academics.png";
const academicsHeader = null;
</script>

<style scoped>

.academics-section{

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

    margin-top:20px;

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

    margin-bottom:14px;

    letter-spacing:.5px;

}

.info-card p{

    color:#444;

    line-height:1.7;

    font-size:1rem;

    margin-bottom:10px;

}

.info-card a{

    color:#6C4AB6;

    font-weight:bold;

    text-decoration:underline;

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

.highlight{

    background:#EDE4FA;

    padding:12px 16px;

    border-radius:14px;

    font-weight:600;

    color:#402B6D;

}

.note{

    background:#FDEFD8;

    border-left:4px solid #E8B14F;

    padding:10px 16px;

    border-radius:8px;

    font-size:.92rem;

    color:#5a4a2a;

    margin-top:14px;

}

.steps-list{

    padding-left:20px;

    color:#444;

    line-height:1.9;

}

.steps-list li{

    margin-bottom:6px;

}

.steps-list a{

    color:#6C4AB6;

    font-weight:bold;

}

.rank-list{

    display:grid;

    grid-template-columns:repeat(6, 1fr);

    gap:10px;

    list-style:none;

    padding:0;

    margin:16px 0;

    counter-reset:rank;

}

.rank-list li{

    counter-increment:rank;

    background:#402B6D;

    color:white;

    text-align:center;

    font-weight:bold;

    padding:10px 0;

    border-radius:10px;

    position:relative;

    font-size:.95rem;

}

.rank-list li::before{

    content:counter(rank);

    position:absolute;

    top:-8px;

    left:-8px;

    background:#E8B14F;

    color:#402B6D;

    width:20px;

    height:20px;

    border-radius:50%;

    font-size:.7rem;

    display:flex;

    align-items:center;

    justify-content:center;

}

/* =========================
   Tablet
========================= */
@media (max-width: 768px) {

.academics-section {
  padding: 80px 6%;
}

.page-title-image {
  height: 100px;
}

.page-title {
  font-size: 2.2rem;
  margin-top:20px;
}

.page-subtitle {
  margin-bottom: 40px;
}

.cards-grid {
  grid-template-columns: 1fr;
  gap: 20px;
}

.info-card {
  padding: 22px 22px;
}

.rank-list {
  grid-template-columns: repeat(4, 1fr);
}

}

/* =========================
   Mobile Phones
========================= */
@media (max-width: 480px) {

.academics-section {
  padding: 60px 6%;             /* slightly wider side padding, was 5% */
}

.page-title {
  font-size: 1.8rem;
  margin-top:20px;
}

.page-subtitle {
  font-size: 0.9rem;
  margin-bottom: 28px;
}

.cards-grid {
  grid-template-columns: 1fr;
  gap: 14px;                    /* was implicit 20px from tablet — tighter now */
  max-width: 92%;               /* NEW — keeps cards from stretching edge-to-edge */
  margin: 0 auto;               /* NEW — centers the narrower grid */
}

.info-card {
  padding: 14px 16px;           /* was 18px 18px — noticeably smaller */
  border-radius: 14px;          /* was 16px */
}

.info-card h3 {
  font-size: 0.95rem;           /* was 1.1rem */
  margin-bottom: 8px;
}

.info-card p {
  font-size: 0.82rem;           /* was 0.92rem */
  line-height: 1.5;
  margin-bottom: 6px;
}

.path-tag {
  font-size: 0.68rem;           /* was 0.78rem */
  padding: 4px 10px;
  margin-bottom: 10px;
}

.highlight {
  padding: 8px 12px;
  font-size: 0.82rem;
}

.note {
  padding: 6px 10px;
  font-size: 0.72rem;
  margin-top: 10px;
}

.steps-list {
  padding-left: 14px;
  line-height: 1.5;
  font-size: 0.82rem;
}

.rank-list {
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
}

.rank-list li {
  font-size: 0.75rem;
  padding: 6px 0;
}

.rank-list li::before {
  width: 14px;
  height: 14px;
  font-size: 0.6rem;
  top: -6px;
  left: -6px;
}

}

</style>