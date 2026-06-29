<template>

    <section
        id="overview"
        class="overview-page"
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
    
        position:relative;
        overflow:hidden;
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
    
    .overview-card{
    
        max-width:900px;
    
        margin:auto;
    
        background:white;
    
        padding:50px;
    
        border-radius:28px;
    
        box-shadow:0 15px 30px rgba(0,0,0,.08);
    
    }
    
    
    .overview-card p{
    
        font-size:1.1rem;
    
        line-height:2;
    
        color:#555;
    
        margin-bottom:24px;
    
    }
    
    .stars{
        position:absolute;
        inset:0;
        pointer-events:none;
        z-index:0;
    }
    
    .star{
        position:absolute;
        color:#9B6FE0;
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
    
    .section-title,
    .overview-card{
        position:relative;
        z-index:1;
    }

    @media (max-width: 480px) {
  .overview-page {
    padding: 90px 6%;
  }

  .overview-card {
    padding: 32px;
  }

  .section-title {
    font-size: 2.2rem;
  }
}
    
    </style>