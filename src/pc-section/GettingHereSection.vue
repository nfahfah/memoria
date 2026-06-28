<template>

<section
    id="getting-here"
    class="getting-page"
>

    <h2 class="section-title">
         Getting Here
    </h2>

    <div class="getting-card">

        <p class="intro">
            Please arrive at the camp venue on time. Here are some ways to get to NUS.
        </p>

        <div class="transport">

            <h3>🚇 MRT + Bus</h3>

            <p>
                Take the Circle Line or East-West Line to the nearest MRT station,
                then transfer to the appropriate NUS shuttle bus or public bus.
            </p>

        </div>

        <div class="transport">

            <h3>🚌 Public Bus</h3>

            <p>
                Several public buses serve NUS, including 95, 96, 151, 183 and 198.
            </p>

        </div>

        <div class="transport">

            <h3>🚗 Grab / Taxi</h3>

            <p>
                Set your destination to the reporting venue provided by the organising committee.
            </p>

        </div>

        <div class="transport">

            <h3>📍 Reporting Venue</h3>

            <p>
                <strong>To be announced.</strong>
            </p>

        </div>

    </div>

</section>

</template>

<script setup>
</script>

<style scoped>

.getting-page{

    min-height:100vh;

    padding:120px 10%;

    box-sizing:border-box;

    background: #FFF4E8;

}

.section-title{

    font-family:"Luckiest Guy";

    font-size:3rem;

    color:#402B6D;

    text-align:center;

    margin-bottom:50px;

}

.getting-card{

    max-width:900px;

    margin:auto;

    background:white;

    padding:50px;

    border-radius:28px;

    box-shadow:0 15px 30px rgba(0,0,0,.08);

}

.intro{

    font-size:1.15rem;

    margin-bottom:35px;

    color:#555;

}

.transport{

    margin-bottom:35px;

}

.transport h3{

    color:#402B6D;

    margin-bottom:10px;

}

.transport p{

    color:#555;

    line-height:1.8;

}

</style>