<template>

<section
    id="getting-here"
    class="getting-page"
>

<div class="stars">
          <span class="star s1">✦</span>
          <span class="star s2">✧</span>
          <span class="star s3">⋆</span>
          <span class="star s4">✦</span>
          <span class="star s5">✧</span>
          <span class="star s6">⋆</span>
          <span class="star s7">✦</span>
          <span class="star s8">✧</span>
          <span class="star s9">⋆</span>
        </div>

    <h2 class="section-title">
             Getting Here (Day 1)!
        </h2>
    
        <div class="getting-card1">
    
            <p class="intro">
                Please arrive at the camp venue on time and safely. Here are some ways to get to NUS. Take note that this is only for Day 1!
            </p>
    
            <div class="transport">
    
                <h3>Reporting Venue</h3>
    
                <div class="address-row">
    
                    <p class="address-text">
                        11 Kent Ridge Dr, #01-02, Singapore 119244
                    </p>
    
                    <button
                        class="copy-btn"
                        @click="copyAddress"
                    >
                        {{ copied ? "Copied!" : "Copy" }}
                    </button>
    
                </div>
    
          </div>
        </div>


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
    import { ref } from "vue";
    
    const address = "11 Kent Ridge Dr, #01-02, Singapore 119244";
    const copied = ref(false);
    
    async function copyAddress() {
        if (navigator.clipboard && window.isSecureContext) {
            try {
                await navigator.clipboard.writeText(address);
                showCopied();
                return;
            } catch (err) {
                console.error("Clipboard API failed:", err);
            }
        }
    
        // Fallback for non-secure contexts or unsupported browsers
        try {
            const textarea = document.createElement("textarea");
            textarea.value = address;
            textarea.style.position = "fixed";
            textarea.style.opacity = "0";
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            showCopied();
        } catch (err) {
            console.error("Fallback copy failed:", err);
        }
    }
    
    function showCopied() {
        copied.value = true;
        setTimeout(() => {
            copied.value = false;
        }, 2000);
    }
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
    
    <script setup>
    import { ref } from "vue";
    
    const address = "11 Kent Ridge Dr, #01-02, Singapore 119244";
    const copied = ref(false);
    
    async function copyAddress() {
        if (navigator.clipboard && window.isSecureContext) {
            try {
                await navigator.clipboard.writeText(address);
                showCopied();
                return;
            } catch (err) {
                console.error("Clipboard API failed:", err);
            }
        }
    
        // Fallback for non-secure contexts or unsupported browsers
        try {
            const textarea = document.createElement("textarea");
            textarea.value = address;
            textarea.style.position = "fixed";
            textarea.style.opacity = "0";
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            showCopied();
        } catch (err) {
            console.error("Fallback copy failed:", err);
        }
    }
    
    function showCopied() {
        copied.value = true;
        setTimeout(() => {
            copied.value = false;
        }, 2000);
    }
    </script>
    
    <style scoped>
    
.getting-page{
    
        min-height:100vh;
    
        padding:120px 10%;
    
        box-sizing:border-box;
    
        background: #FFF4E8;
    
        position:relative;
    
        overflow:hidden;
    
}
    
.stars{
    
        position:absolute;
    
        top:0;
    
        left:0;
    
        right:0;
    
        bottom:0;
    
        pointer-events:none;
    
        z-index:0;
    
  }
    
  .star{
    
        position:absolute;
    
        color:#F0954D;
    
        opacity:.3;
    
        font-size:1.8rem;
    
        text-shadow:0 0 12px rgba(240,149,77,.4);
    
  }
    
    .s1{
        top:8%;
        left:8%;
        font-size:3.0rem;
    }
    
    .s2{
        top:15%;
        right:10%;
        font-size:3.6rem;
    }
    
    .s3{
        top:40%;
        left:4%;
        font-size:5.6rem;
    }
    
    .s4{
        top:55%;
        right:6%;
        font-size:3.2rem;
    }
    
    .s5{
        top:75%;
        left:10%;
        font-size:2.8rem;
    }
    
    .s6{
        top:88%;
        right:14%;
        font-size:3.4rem;
    }
    
    .s7{
        top:30%;
        left:22%;
        font-size:2.5rem;
    }
    
    .s8{
        top:65%;
        right:28%;
        font-size:2.9rem;
    }
    
    .s9{
        top:5%;
        left:45%;
        font-size:4.0rem;
    }
    
    .section-title{
    
        position:relative;
    
        z-index:1;
    
        font-family:"Luckiest Guy";
    
        font-size:3rem;
    
        color:#402B6D;
    
        text-align:center;
    
        margin-bottom:50px;
    
    }
    
    .getting-card{
    
        position:relative;
    
        z-index:1;
    
        max-width:900px;
    
        margin:auto;
    
        background:white;
    
        padding:50px;
    
        border-radius:28px;
    
        box-shadow:0 15px 30px rgba(0,0,0,.08);
    
    }
    
    .intro{
    
        font-size:1.15rem;
    
        line-height:1.8;
    
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
    
    .address-row{
    
        display:flex;
    
        align-items:center;
    
        gap:16px;
    
        flex-wrap:wrap;
    
    }
    
    .address-text{
    
        color:#555;
    
        line-height:1.8;
    
        margin:0;
    
    }
    
    .copy-btn{
    
        flex-shrink:0;
    
        padding:8px 18px;
    
        background:#402B6D;
    
        color:white;
    
        border:none;
    
        border-radius:999px;
    
        font-size:0.9rem;
    
        font-weight:bold;
    
        cursor:pointer;
    
        transition:.25s;
    
    }
    
    .copy-btn:hover{
    
        background:#573A99;
    
    }
    
    @media (max-width: 480px) {
    
    .address-row {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
    
    .copy-btn {
      align-self: flex-start;
    }
    
    }
    
  </style>
