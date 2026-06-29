<template>
  <section
    id="welcome"
    class="welcome-page"
  >
    <h1 class="welcome-title">
      Welcome to Memoria
    </h1>

    <div class="welcome-content">

      <div class="polaroid">

        <div class="tape"></div>

        <img
          :src="pdPhoto"
          alt="PD Team"
        />

      </div>

      <div class="message-card">

        <p class="message">
          Welcome onboard Memoria! We are so excited to have you join us as you begin your NUS journey. We hope these three days will be filled with laughter, friendships and unforgettable memories. Enjoy every moment and don't be afraid to step out of your comfort zone. We can't wait to meet all of you! 😊
        </p>

        <p class="signature">
          With love,<br>
          Iffah • Danial-Zanefy • Batrisyiya<br>
          <span>PDs of Memoria 🚂</span>
        </p>

      </div>

    </div>

  <div
    class="next-button"
    @click="goToPreCamp"
    >
        Continue to Pre-Camp Booklet →
  </div>

  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import pdPhoto from "../assets/images/pd-photo.jpg";

const router = useRouter();

function goToPreCamp() {
    router.push("/precamp");
}
</script>

<style scoped>

.welcome-page{

    min-height:100vh;

    background:#F5E05D;

    display:flex;

    flex-direction:column;

    justify-content:center;

    align-items:center;

    padding:80px 8%;

    box-sizing:border-box;

}

.welcome-title{

    font-family:"Luckiest Guy";

    font-weight:700;

    font-size:4.5rem;

    color:#402B6D;

    margin-bottom:70px;

    text-align:center;

    letter-spacing:1px;

}

.welcome-content{

    display:flex;

    justify-content:center;

    align-items:center;

    gap:80px;

    width:100%;

    max-width:1100px;

}

.polaroid{

    position:relative;

    background:white;

    padding:18px 18px 70px;

    border-radius:8px;

    box-shadow:0 12px 25px rgba(0,0,0,.18);

    transform:rotate(-4deg);

}

.tape{

    position:absolute;

    width:90px;

    height:28px;

    background:rgba(255,255,255,.45);

    top:-12px;

    left:50%;

    transform:translateX(-50%) rotate(-6deg);

    border-radius:4px;

}

.polaroid img{

    width:320px;

    display:block;

    border-radius:4px;

    object-fit:cover;

}

.message-card{

    background:#FFF9E8;

    padding:40px;

    border-radius:24px;

    max-width:550px;

    box-shadow:0 10px 25px rgba(0,0,0,.08);

}

.message{

    font-size:1.1rem;

    line-height:1.8;

    color:#444;

}

.signature{

    margin-top:30px;

    color:#402B6D;

    font-weight:bold;

    line-height:1.7;

}

.signature span{

    color:#6C4AB6;

}

.next-button{

    margin-top:60px;

    padding:16px 36px;

    background:#402B6D;

    color:white;

    border-radius:999px;

    cursor:pointer;

    font-weight:bold;

    transition:.3s;

}

.next-button:hover{

    background:#573A99;

    transform:translateY(-3px);

}

/* =========================
   Tablet
========================= */
@media (max-width: 768px) {

.welcome-page {
  padding: 60px 6%;
}

.welcome-title {
  font-size: 3rem;
  margin-bottom: 45px;
  padding-top: 30px;
}

.welcome-content {
  flex-direction: column;
  gap: 45px;
}

.polaroid img {
  width: 260px;
}

.message-card {
  max-width: 100%;
  padding: 32px;
}

.next-button {
  margin-top: 45px;
}

}

/* =========================
   Mobile Phones
========================= */
@media (max-width: 480px) {

.welcome-page {
  padding: 50px 5%;
}

.welcome-title {
  font-size: 2.2rem;
  letter-spacing: 0.5px;
  margin-bottom: 35px;
  padding-top: 20px;
}

.welcome-content {
  gap: 35px;
}

.polaroid {
  padding: 14px 14px 55px;
}

.polaroid img {
  width: 70vw;
  max-width: 240px;
}

.message-card {
  padding: 24px;
  border-radius: 18px;
}

.message {
  font-size: 1rem;
}

.next-button {
  padding: 14px 28px;
  font-size: 0.95rem;
  text-align: center;
}

}

</style>