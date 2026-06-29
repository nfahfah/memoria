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
                 Getting Here!
            </h2>
    
            <p class="intro">
                Please arrive at the camp venue on time and safely. You can find the reporting time and venues for the 3 days below!
            </p>
    
        <div class="getting-container">
    
        <!-- SFAH -->
        <div class="getting-card">
    
            <h3 class="day-title">
                Day 1
            </h3>
    
            <div class="reporting-venue">
    
                <h4 class="venue-label">Reporting Venue: SFAH Auditorium</h4>

                <h4 class="venue-label">Reporting Time: </h4>
    
                <div class="address-row">
    
                    <p class="address-text">
                        11 Kent Ridge Dr, #01-02, Singapore 119244
                    </p>
    
                    <button
                        class="copy-btn"
                        @click="copyAddress('11 Kent Ridge Dr, #01-02, Singapore 119244', 'day1')"
                    >
                        {{ copiedKey === 'day1' ? "Copied!" : "Copy" }}
                    </button>
    
                </div>
    
            </div>
    
            <div class="transport">
                <h4>🚇 From: Kent Ridge MRT Station (Circle Line)</h4>
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
                <h4>🚇 Clementi MRT (Green Line)</h4>
                <p>
                    We recommend making your way to Kent Ridge MRT first before transferring to the appropriate Internal Shuttle Bus.
                </p>
                <p class="extra-note">
                    Take the lift or the stairs up to level 2 and you will be greeted by our lovely organising committee. Look out for those wearing pink-yellow lanyards!
                </p>
            </div>
    
        </div>
    
        <!-- Techno Edge -->
        <div class="getting-card">
    
            <h3 class="day-title">
                Day 2
            </h3>
    
            <div class="reporting-venue">
    
                <h4 class="venue-label">Reporting Venue: Techno Edge Canteen</h4>

                <h4 class="venue-label">Reporting Time: </h4>
    
                <div class="address-row">
    
                    <p class="address-text">
                        2 Engineering Drive 4, Singapore 117584
                    </p>
    
                    <button
                        class="copy-btn"
                        @click="copyAddress('2 Engineering Drive 4, Singapore 117584', 'day2')"
                    >
                        {{ copiedKey === 'day2' ? "Copied!" : "Copy" }}
                    </button>
    
                </div>
    
            </div>
    
            <div class="transport">
                <h4>🚇 Kent Ridge MRT Station (Circle Line)</h4>
                <p>
                    Transfer to the <strong>A1 / K Internal Shuttle Bus (ISB)</strong> outside Exit A / NUH and alight at <strong>CLB</strong>. Cross the road and walk through the tree-lined pathway and down the stairs to Techno Edge.
                </p>
            </div>
    
            <div class="transport">
                <h4>🚇 Clementi MRT (Green Line)</h4>
                <p>
                    Take bus <strong>96</strong> from Clementi Interchange and alight at <strong>IT Bus Stop</strong>. Walk through the tree-lined pathway and down the stairs to Techno Edge.
                </p>
            </div>

            <div class="transport">
                <h4>🏠 Prince George's Park Residences</h4>

                <p class="option-label">Option 1: Bus R2</p>
                <p>
                    Take bus <strong>R2 (ISB)</strong> from Opposite PGP and alight at <strong>IT Bus Stop</strong>. Walk through the tree-lined pathway and down the stairs to Techno Edge.
                </p>

                <p class="option-label">Option 2: Bus A1 / K</p>
                <p>
                    Take bus <strong>A1 / K Internal Shuttle Bus (ISB)</strong> from Opposite PGP and alight at <strong>CLB</strong>. Cross the road and walk through the tree-lined pathway and down the stairs to Techno Edge.
                </p>
            </div>
        </div>
        <!-- UTown -->
        <div class="getting-card">
    
            <h3 class="day-title">
                Day 3
            </h3>
    
            <div class="transport">
                <h4>🏠 Overnight</h4>
                <p>
                    After check-out, do head to your respective breakfast location with your OGLs.
                </p><br><br>
                <h4>🚇 Non-Overnight</h4>
                <p>
                    Do head to your respective breakfast location at the reporting time specified by your OGLs.
                </p>
            </div>
        </div>

    
    </div>
    
    </section>
    
    </template>
        
        <script setup>
        import { ref } from "vue";
        
        const copiedKey = ref(null);
        
        async function copyAddress(address, key) {
            if (navigator.clipboard && window.isSecureContext) {
                try {
                    await navigator.clipboard.writeText(address);
                    showCopied(key);
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
                showCopied(key);
            } catch (err) {
                console.error("Fallback copy failed:", err);
            }
        }
        
        function showCopied(key) {
            copiedKey.value = key;
            setTimeout(() => {
                if (copiedKey.value === key) {
                    copiedKey.value = null;
                }
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
        
            animation:twinkle 3s infinite;
        
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
    
        .intro{
    
            position:relative;
    
            z-index:1;
    
            text-align:center;
    
            max-width:800px;
    
            margin:0 auto 50px;
    
            color:#555;
    
            font-size:1.1rem;
    
            line-height:1.8;
    
        }
    
        .getting-container{
    
            position:relative;
    
            z-index:1;
    
            display:grid;
    
            grid-template-columns:1fr;
    
            gap:30px;
    
            max-width:900px;
    
            margin:auto;
    
        }
        
        .getting-card{
        
            background:white;
        
            padding:40px;
        
            border-radius:28px;
        
            box-shadow:0 15px 30px rgba(0,0,0,.08);
        
        }
    
        .getting-card h3{
    
            color:#402B6D;
    
            font-size:1.3rem;
    
            margin-bottom:20px;
    
        }
    
        .reporting-venue{
    
            background:#FFF4E8;
    
            border-radius:16px;
    
            padding:18px 20px;
    
            margin-bottom:25px;
    
        }

        .transport p.option-label{

            font-weight:bold;

            color:#402B6D;

            margin-top:14px;

            margin-bottom:4px;

            font-size:0.9rem;

        }
    
        .venue-label{
    
            color:#402B6D;
    
            font-size:0.95rem;
    
            margin-bottom:8px;
    
        }
        
        .transport{
        
            margin-bottom:25px;
        
        }
        
        .transport h4{
        
            color:#402B6D;
    
            font-size:0.95rem;
        
            margin-bottom:8px;
        
        }
        
        .transport p{
        
            color:#555;
        
            line-height:1.7;
    
            font-size:0.95rem;
        
        }
        
        .address-row{
        
            display:flex;
    
            flex-direction:row;
        
            align-items:center;
    
            flex-wrap:wrap;
        
            gap:16px;
        
        }
        
        .address-text{
        
            color:#555;
        
            line-height:1.6;
    
            font-size:0.95rem;
        
            margin:0;
        
        }

        .getting-card .day-title{

            font-family:"Luckiest Guy";

            color:#402B6D;

            font-size:2.2rem;

            margin-bottom:15px;

        }

        .transport p.extra-note{

            margin-top:12px;

            font-weight:bold;

            color:#402B6D;

        }
        
        .copy-btn{
        
            flex-shrink:0;
        
            padding:8px 18px;
        
            background:#402B6D;
        
            color:white;
        
            border:none;
        
            border-radius:999px;
        
            font-size:0.85rem;
        
            font-weight:bold;
        
            cursor:pointer;
        
            transition:.25s;
        
        }
        
        .copy-btn:hover{
        
            background:#573A99;
        
        }
    
        @media (max-width: 480px) {
        
        .getting-card {
          padding: 28px;
        }
    
        .address-row {
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }
        
        }

        @keyframes twinkle {

          0%,100%{
            opacity:.1;
            transform:scale(1);
          }

          50%{
            opacity:.4;
            transform:scale(1.4);
          }

        }
        
      </style>