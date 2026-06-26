<template>
  <section class="home">

    <div class="scrapbook-card">

      <p class="small-title">
        Welcome to
      </p>

      <h1>Memoria</h1>

      <p class="tagline">
        Every memory begins somewhere.
      </p>

    </div>

  </section>
</template>

<script setup>

</script>

<style scoped>

.home{

    min-height:100vh;

    padding-top:120px;

    display:flex;

    justify-content:center;

}

.scrapbook-card{

    width:700px;

    background:white;

    border-radius:28px;

    padding:60px;

    box-shadow:var(--shadow);

    text-align:center;

}

.small-title{

    color:#777;

    letter-spacing:3px;

    text-transform:uppercase;

}

h1{

    font-family:"Luckiest Guy", cursive;

    font-size:5rem;

    margin:20px 0;

    color:var(--primary);

}

.tagline{

    font-size:1.2rem;

    color:#666;

}

</style>