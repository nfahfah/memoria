<template>

<section
    id="overview"
    class="overview-page"
>

    <h2 class="section-title">
         Overview
    </h2>

    <div class="overview-card">

        <p>

            Welcome to <strong>Memoria</strong>, NUS Muslim Society's Freshmen Orientation Camp!

        </p>

        <p>

            Over the next three days, you'll meet new friends, explore NUS, take part in exciting games and create memories that will last long after camp ends.

        </p>

        <p>

            This booklet contains everything you need before camp starts. Read through it carefully so you'll know what to bring, where to report, and what to expect during camp.

        </p>

    </div>

    <div class="contacts-card">

    <h3 class="card-title">
        Important Contacts
    </h3>

    <div class="contacts-grid">

        <!-- Iffah -->
        <div class="contact-card">
            <h4>Iffah</h4>
            <p>Project Director</p>
            <p>📞 83181773</p>
            <p>💬 @niffahhh</p>
        </div>

        <!-- Batrisyiya -->
        <div class="contact-card">
            <h4>Batrisyiya</h4>
            <p>Assistant Project Director (Programmes)</p>
            <p>📞 Number</p>
            <p>💬 @batrisyiya</p>
        </div>

        <!-- Danial -->
        <div class="contact-card">
            <h4>Danial</h4>
            <p>Assistant Project Director (Finance)</p>
            <p>Chief Safety Officer</p>
            <p>📞 Number</p>
            <p>💬 @dzanefy</p>
        </div>

        <!-- Humairah -->
        <div class="contact-card">
            <h4>Humairah</h4>
            <p>Deputy Chief Safety Officer</p>
            <p>Female Residence IC</p>
            <p>📞 Number</p>
            <p>💬 @</p>
        </div>

        <!-- Syazmi -->
        <div class="contact-card">
            <h4>Syazmi</h4>
            <p>Male Residence IC</p>
            <p>Safety Officer</p>
            <p>📞 Number</p>
            <p>💬 @</p>
        </div>

    </div>
  </div>

</section>

</template>

<script setup>
</script>

<style scoped>

.overview-page{

    min-height:100vh;

    background:#F8F2FF;

    padding:120px 10%;

    box-sizing:border-box;

}

.section-title{

    font-family:"Luckiest Guy";

    font-size:60px;

    color:#402B6D;

    text-align:center;

    margin-bottom:50px;

}

.overview-card{

    max-width:900px;

    margin:auto;

    background:white;

    padding:50px;

    border-radius:28px;

    box-shadow:0 15px 30px rgba(0,0,0,.08);

}

.card-title{
    font-family:"Luckiest Guy";
    color:#402B6D;
    font-size: 40px;
    margin-bottom:25px;
    text-align:center;
}

.contacts-card{

    max-width:900px;
    margin:40px auto 0;

    background:white;

    padding:50px;

    border-radius:28px;

    box-shadow:0 15px 30px rgba(0,0,0,.08);

}

.contacts-grid{

    display:grid;

    grid-template-columns:repeat(2,1fr);

    gap:20px;

}

.contact-card{

    background:#F8F2FF;

    border-radius:18px;

    padding:22px;

}

.contact-card h4{

    color:#402B6D;

    margin-bottom:10px;

}

.contact-card p{

    margin:6px 0;

    color:#555;

    line-height:1.5;

}

.overview-card p{

    font-size:1.1rem;

    line-height:2;

    color:#555;

    margin-bottom:24px;

}

</style>