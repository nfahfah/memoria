<template>

<section
    id="packing-list"
    class="packing-page"
>

    <h2 class="section-title">
         Packing List
    </h2>

    <div class="packing-card">

        <p class="intro">
            Here's what you should bring for camp!
        </p>

        <ul class="packing-list">
            <li> Comfortable clothes (3 days)</li>
            <li> Extra change of clothes</li>
            <li> Sports shoes</li>
            <li> Slippers</li>
            <li> Toiletries</li>
            <li> Toothbrush & toothpaste</li>
            <li> Water bottle</li>
            <li> Portable charger</li>
            <li> Personal medication</li>
            <li> Prayer attire & prayer mat (if needed)</li>
        </ul>

    </div>

</section>

</template>

<script setup>
</script>

<style scoped>

.packing-page{

    min-height:100vh;

    padding:120px 10%;

    box-sizing:border-box;

    background:#EEF8FF;

}

.section-title{

    font-family:"Luckiest Guy";

    font-size:3rem;

    color:#402B6D;

    text-align:center;

    margin-bottom:50px;

}

.packing-card{

    max-width:900px;

    margin:auto;

    background:white;

    padding:50px;

    border-radius:28px;

    box-shadow:0 15px 30px rgba(0,0,0,.08);

}

.intro{

    font-size:1.2rem;

    margin-bottom:30px;

    color:#555;

}

.packing-list{

    line-height:2.2;

    font-size:1.1rem;

    color:#444;

}

</style>