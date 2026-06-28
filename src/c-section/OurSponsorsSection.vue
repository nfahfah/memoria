<template>

<section
    id="our-sponsors"
    class="sponsors-section"
>

    <div class="hero">

        <p class="small-title">
            THANK YOU
        </p>

        <h1>
            Our Sponsors
        </h1>

        <p class="subtitle">
            Every journey through Memoria was made possible thanks to the
            generosity and support of our wonderful sponsors.
        </p>

    </div>

    <div class="sponsors-grid">

        <div
            v-for="sponsor in sponsors"
            :key="sponsor.name"
            class="sponsor-card"
        >

            <img
                :src="sponsor.logo"
                :alt="sponsor.name"
            >

            <h2>
                {{ sponsor.name }}
            </h2>

            <p>
                {{ sponsor.tier }}
            </p>

        </div>

    </div>

</section>

</template>

<script setup>

const sponsors = [

{
    name:"Sponsor One",
    tier:"Gold Sponsor",
    logo:"https://placehold.co/250x120?text=Logo"
},

{
    name:"Sponsor Two",
    tier:"Official Partner",
    logo:"https://placehold.co/250x120?text=Logo"
},

{
    name:"Sponsor Three",
    tier:"Official Partner",
    logo:"https://placehold.co/250x120?text=Logo"
},

{
    name:"Sponsor Four",
    tier:"Supporting Sponsor",
    logo:"https://placehold.co/250x120?text=Logo"
}

];

</script>

<style scoped>

.sponsors-section{

    min-height:100vh;

    background:#FFFDF7;

    padding:100px 8%;

}

.hero{

    text-align:center;

    margin-bottom:70px;

}

.small-title{

    color:#C8A54B;

    letter-spacing:5px;

    font-weight:bold;

}

.hero h1{

    font-family:"Luckiest Guy";

    font-size:4rem;

    color:#5A3B13;

    margin:15px 0;

}

.subtitle{

    max-width:650px;

    margin:auto;

    color:#777;

    line-height:1.8;

}

.sponsors-grid{

    display:grid;

    grid-template-columns:repeat(auto-fit,minmax(260px,1fr));

    gap:35px;

    max-width:1100px;

    margin:auto;

}

.sponsor-card{

    background:white;

    border-radius:24px;

    padding:35px;

    text-align:center;

    box-shadow:0 10px 25px rgba(0,0,0,.08);

    transition:.3s;

}

.sponsor-card:hover{

    transform:translateY(-8px);

}

.sponsor-card img{

    width:170px;

    height:100px;

    object-fit:contain;

    margin-bottom:25px;

}

.sponsor-card h2{

    color:#402B6D;

    margin-bottom:10px;

}

.sponsor-card p{

    color:#B58A29;

    font-weight:bold;

}

</style>