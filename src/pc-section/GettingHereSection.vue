<template>

<section
    id="getting-here"
    class="getting-page"
>

    <h2 class="section-title">
         Getting Here
    </h2>

    <div class="getting-container">

    <!-- SFAH -->
    <div class="getting-card">

        <h3>📍 SFAH Auditorium</h3>

        <div class="transport">
            <h4>🚇 Kent Ridge MRT Station (Circle Line)</h4>
            <p>
                Transfer to the <strong>A1 Internal Shuttle Bus (ISB)</strong> at the bus stop outside Exit A / NUH (Lower Kent Ridge Road) and alight at <strong>AS5</strong>. Walk down the hill and the SFAH building will be on your left.
            </p>
        </div>

        <div class="transport">
            <h4>🚇 Opp Kent Ridge MRT Station (Circle Line)</h4>
            <p>
                Transfer to the <strong>A2 Internal Shuttle Bus (ISB)</strong> after the tunnel and alight at <strong>Opp NUSS</strong>. Cross the road and the SFAH building will be there.
            </p>
        </div>

        <div class="transport">
            <h4>🚇 Clementi / Buona Vista / Botanic Gardens MRT</h4>
            <p>
                Please make your way to Kent Ridge MRT first before transferring to the appropriate Internal Shuttle Bus.
            </p>
        </div>

    </div>

    <!-- Techno Edge -->
    <div class="getting-card">

        <h3>📍 Techno Edge Canteen</h3>

        <div class="transport">
            <h4>🚇 Kent Ridge MRT Station (Circle Line)</h4>
            <p>
                Transfer to the <strong>A1 / K Internal Shuttle Bus (ISB)</strong> outside Exit A / NUH and alight at <strong>CLB</strong>. Cross the road and walk through the tree-lined pathway to Techno Edge.
            </p>
        </div>

        <div class="transport">
            <h4>🚇 Clementi / Buona Vista / Botanic Gardens MRT</h4>
            <p>
                Please make your way to Kent Ridge MRT first before transferring to the appropriate Internal Shuttle Bus.
            </p>
        </div>

    </div>

    <!-- UTown -->
    <div class="getting-card">

        <h3>📍 UTown SRC Town Plaza</h3>

        <div class="transport">
            <h4>🚇 Kent Ridge MRT Station</h4>
            <p>
                Transfer to the <strong>D2 Internal Shuttle Bus (ISB)</strong> outside Exit A / NUH and alight at <strong>University Town (UTown)</strong>.
            </p>
        </div>

        <div class="transport">
            <h4>🚇 Clementi MRT Station</h4>
            <p>
                Option 1: Take <strong>Bus 96</strong> from Clementi Bus Interchange and alight at <strong>Yale-NUS</strong>.<br><br>

                Option 2: Take <strong>Bus 183</strong> from Clementi Exit B and alight at <strong>Yale-NUS College</strong>.
            </p>
        </div>

        <div class="transport">
            <h4>🚇 Buona Vista MRT Station</h4>
            <p>
                Take <strong>Bus 196</strong> outside Exit D and alight at <strong>Yale-NUS College</strong>.
            </p>
        </div>

        <div class="transport">
            <h4>🚇 Botanic Gardens / Tan Kah Kee / Sixth Avenue MRT</h4>
            <p>
                Take <strong>Bus 151</strong> and alight at <strong>Yale-NUS College</strong>.
            </p>
        </div>

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

    background:white;

    padding:50px;

    border-radius:28px;

    box-shadow:0 15px 30px rgba(0,0,0,.08);

}

.getting-card h3{

    color:#402B6D;

    margin-bottom:30px;

    font-size:1.5rem;

}

.transport h4{

    color:#402B6D;

    margin-bottom:10px;

}

.getting-container{

    max-width:900px;

    margin:auto;

    display:flex;

    flex-direction:column;

    gap:30px;

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