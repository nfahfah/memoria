<template>

    <section
        id="packing-list"
        class="packing-page"
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
    
        color:#5B9BD5;
    
        opacity:.3;
    
        font-size:1.8rem;
    
        animation:twinkle 3s infinite;
    
    }
    
    .s1{top:8%;left:8%;font-size:3rem;}
    .s2{top:15%;right:10%;font-size:3.6rem;}
    .s3{top:40%;left:4%;font-size:5.6rem;}
    .s4{top:55%;right:6%;font-size:3.2rem;}
    .s5{top:75%;left:10%;font-size:2.8rem;}
    .s6{top:88%;right:14%;font-size:3.4rem;}
    .s7{top:30%;left:22%;font-size:2.5rem;}
    .s8{top:65%;right:28%;font-size:2.9rem;}
    .s9{top:5%;left:45%;font-size:4rem;}
    
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
    
    .section-title{
    
        position:relative;
    
        z-index:1;
    
        font-family:"Luckiest Guy";
    
        font-size:3rem;
    
        color:#402B6D;
    
        text-align:center;
    
        margin-bottom:50px;
    
    }
    
    .packing-card{
    
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