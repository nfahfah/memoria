<template>
  <section
    id="day3"
    class="day3-section"
  >

    <div class="hero">

      <p class="day-number">
        DAY 3
      </p>

      <h1>
        Unmask the Culprit
      </h1>

      <p class="subtitle">
        The truth is finally revealed. Together, every OG unites to recover the
        stolen memories and restore the light of Memoria.
      </p>

    </div>

    <div class="timeline">

      <div
        v-for="activity in activities"
        :key="activity.title"
        class="timeline-item"
      >

        <div class="dot"></div>

        <div class="card">

          <span class="time">
            {{ activity.time }}
          </span>

          <h2>
            {{ activity.title }}
          </h2>

          <p class="venue">
            📍 {{ activity.venue }}
          </p>

          <p class="description">
            {{ activity.description }}
          </p>

        </div>

      </div>

    </div>

    <div class="journey-end">

      <h2>✨ Journey Completed ✨</h2>

      <p>
        Every memory has been restored. Thank you for being part of Memoria.
        Although camp comes to an end, your NUS journey is only just beginning.
      </p>

    </div>

  </section>
</template>

<script setup>

const activities = [

{
    time: "8.00 AM",
    title: "Breakfast",
    venue: "Dining Hall",
    description: "Gather with your OG for one final day together."
},

{
    time: "9.00 AM",
    title: "Unmask the Culprit",
    venue: "Around NUS",
    description: "Work together to uncover the truth and recover the missing memory balls."
},

{
    time: "2.00 PM",
    title: "Final Mission",
    venue: "Campus",
    description: "Complete the final challenge and restore Memoria."
},

{
    time: "6.30 PM",
    title: "Finale Night",
    venue: "Main Hall",
    description: "Celebrate every friendship and memory made throughout camp."
}

];

</script>

<style scoped>

.day3-section{

    min-height:100vh;

    background:#FFF8EA;

    padding:100px 8%;

}

.hero{

    text-align:center;

    margin-bottom:80px;

}

.day-number{

    color:#E3A726;

    font-weight:700;

    letter-spacing:5px;

    margin-bottom:15px;

}

.hero h1{

    font-family:"Luckiest Guy";

    font-size:4rem;

    color:#5E4212;

    margin-bottom:20px;

}

.subtitle{

    max-width:650px;

    margin:auto;

    color:#7A6846;

    line-height:1.8;

    font-size:1.05rem;

}

.timeline{

    max-width:850px;

    margin:auto;

    position:relative;

}

.timeline::before{

    content:"";

    position:absolute;

    left:28px;

    top:0;

    bottom:0;

    width:5px;

    background:#F2CF72;

    border-radius:999px;

}

.timeline-item{

    display:flex;

    gap:28px;

    margin-bottom:45px;

    position:relative;

}

.dot{

    width:28px;

    height:28px;

    border-radius:50%;

    background:radial-gradient(

        circle at 35% 35%,

        #FFFFFF,

        #FFE48A 30%,

        #F3C547 75%

    );

    border:5px solid white;

    box-shadow:
        0 0 18px rgba(243,197,71,.5),
        0 0 35px rgba(243,197,71,.35);

    animation:pulseMemory 2.8s ease-in-out infinite;

    flex-shrink:0;

    z-index:2;

}

.timeline-item:nth-child(1) .dot{

    animation-delay:0s;

}

.timeline-item:nth-child(2) .dot{

    animation-delay:.3s;

}

.timeline-item:nth-child(3) .dot{

    animation-delay:.6s;

}

.timeline-item:nth-child(4) .dot{

    animation-delay:.9s;

}

.card{

    flex:1;

    background:white;

    border-radius:22px;

    padding:28px;

    box-shadow:0 10px 25px rgba(0,0,0,.08);

    transition:.25s;

}

.timeline-item:hover .card{

    transform:translateY(-6px);

    box-shadow:0 18px 35px rgba(0,0,0,.12);

}

.timeline-item:hover .dot{

    transform:scale(1.25);

}

.time{

    display:inline-block;

    background:#E3A726;

    color:white;

    padding:6px 14px;

    border-radius:999px;

    font-size:.85rem;

    font-weight:700;

    margin-bottom:18px;

}

.card h2{

    color:#5E4212;

    margin-bottom:10px;

}

.venue{

    color:#C68A18;

    font-weight:600;

    margin-bottom:14px;

}

.description{

    color:#666;

    line-height:1.7;

}

.journey-end{

    max-width:850px;

    margin:80px auto 0;

    background:linear-gradient(

        135deg,

        #FFE8A8,

        #FFF7DD

    );

    padding:45px;

    border-radius:28px;

    text-align:center;

    box-shadow:0 12px 30px rgba(0,0,0,.08);

}

.journey-end h2{

    font-family:"Luckiest Guy";

    color:#B97A0B;

    font-size:2.6rem;

    margin-bottom:20px;

}

.journey-end p{

    color:#6A5730;

    line-height:1.9;

    font-size:1.05rem;

}

@keyframes pulseMemory{

    0%{

        transform:scale(1);

    }

    50%{

        transform:scale(1.18);

        box-shadow:
            0 0 20px rgba(243,197,71,.8),
            0 0 50px rgba(243,197,71,.55);

    }

    100%{

        transform:scale(1);

    }

}

</style>