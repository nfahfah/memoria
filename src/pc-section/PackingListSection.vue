<template>

<section
    id="packing-list"
    class="packing-page"
>

    <h2 class="section-title">
         Packing List
    </h2>

    <div class="packing-card">


    <div class="packing-grid">

        <div class="packing-section">
            <h4>Clothing</h4>
            <ul>
                <li>3–4 shirts</li>
                <li>1 dark-coloured shirt (Day 2 water games)</li>
                <li>4 long pants</li>
                <li>1–2 sets of pyjamas</li>
                <li>Undergarments (as needed)</li>
                <li>Extra covered shoes (water games)</li>
                <li>Slippers / sandals</li>
            </ul>
        </div>

        <div class="packing-section">
            <h4>Personal Essentials</h4>
            <ul>
                <li>Towel (bath-sized)</li>
                <li>Prayer paraphernalia</li>
                <li>Personal medication (as needed)</li>
                <li>Sunscreen</li>
                <li>Toiletries (toothbrush, toothpaste, shampoo, soap, etc.)</li>
                <li>Plastic bags (for soiled clothes)</li>
            </ul>
        </div>

        <div class="packing-section">
            <h4>Daily Items</h4>
            <ul>
                <li>Water bottle</li>
                <li>Day bag</li>
                <li>Phone charging accessories (eg. Portable charger, Charging cable)</li>
                <li>Umbrella / poncho</li>
            </ul>
        </div>

        <div class="packing-section note-card">
            <h4>Accommodation</h4>

            <p>
                A bedsheet, thin blanket and pillow will be provided by CEU.
            </p>
        </div>

        <p class="packing-note">
            <strong>Note:</strong> This packing list serves as a suggested guide. If there are any other personal items you require during camp, feel free to bring them along!
        </p>

    </div>

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

.packing-note{

    grid-column: 1 / -1;

    padding:20px 24px;

    background:#F6FBFF;

    border-radius:16px;

    text-align:center;

    color:#666;

    line-height:1.7;

}

.packing-grid{

    display:grid;

    grid-template-columns:repeat(2,1fr);

    gap:25px;

}

.packing-section{

    background:#F6FBFF;

    padding:25px;

    border-radius:18px;

}

.packing-section h4{

    color:#402B6D;

    margin-bottom:15px;

}

.packing-section ul{

    margin:0;

    padding-left:20px;

    line-height:2;

    color:#555;

}

.note-card{

    display:flex;

    flex-direction:column;

    justify-content:center;

}

.note-card p{

    line-height:1.8;

    color:#555;

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