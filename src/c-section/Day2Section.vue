<template>
  <section
    id="day2"
    class="day2-section"
  >

    <div class="hero">

      <p class="day-number">
        DAY 2
      </p>

      <h1>
        Trust Starts Breaking
      </h1>

      <p class="subtitle">
        Doubt begins to spread throughout Memoria. As suspicions grow, every
        challenge tests not only your abilities, but also your trust in one
        another.
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

  </section>
</template>

<script setup>

const activities = [

{
    time: "8.00 AM",
    title: "Breakfast",
    venue: "Dining Hall",
    description: "Recharge before another day of searching for the missing memories."
},

{
    time: "9.00 AM",
    title: "Trust Starts Breaking",
    venue: "Around NUS",
    description: "Follow the clues as suspicions begin to rise among the OGs."
},

{
    time: "2.00 PM",
    title: "Wet Games",
    venue: "Sports Field",
    description: "Compete in exciting challenges that test teamwork and resilience."
},

{
    time: "6.30 PM",
    title: "MSS & PBMUKS Showcase",
    venue: "LT",
    description: "Discover the student community while the mystery continues."
},

{
    time: "9.00 PM",
    title: "Night Activity",
    venue: "Campus",
    description: "End the day reflecting on the friendships built despite growing uncertainty."
}

];

</script>

<style scoped>

.day2-section{

    min-height:100vh;

    background:#E4EDF4;

    padding:100px 8%;

}

.hero{

    text-align:center;

    margin-bottom:80px;

}

.day-number{

    color:#597A97;

    font-weight:700;

    letter-spacing:5px;

    margin-bottom:15px;

}

.hero h1{

    font-family:"Luckiest Guy";

    font-size:4rem;

    color:#324B63;

    margin-bottom:20px;

}

.subtitle{

    max-width:650px;

    margin:auto;

    color:#5F7286;

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

    background:#8FA8BF;

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
        #AFC2D4 35%,
        #597A97 75%
    );

    border:5px solid white;

    box-shadow:
        0 0 12px rgba(89,122,151,.35),
        0 0 28px rgba(89,122,151,.25);

    animation:pulseMemory 2.8s ease-in-out infinite;

    z-index:2;

    flex-shrink:0;

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

.timeline-item:nth-child(5) .dot{
    animation-delay:1.2s;
}

.card{

    flex:1;

    background:#F8FBFD;

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

    background:#597A97;

    color:white;

    padding:6px 14px;

    border-radius:999px;

    font-size:.85rem;

    font-weight:700;

    margin-bottom:18px;

}

.card h2{

    color:#324B63;

    margin-bottom:10px;

}

.venue{

    color:#597A97;

    font-weight:600;

    margin-bottom:14px;

}

.description{

    color:#666;

    line-height:1.7;

}

@keyframes pulseMemory{

    0%{

        transform:scale(1);

        box-shadow:
            0 0 12px rgba(89,122,151,.35),
            0 0 28px rgba(89,122,151,.25);

    }

    50%{

        transform:scale(1.18);

        box-shadow:
            0 0 18px rgba(89,122,151,.6),
            0 0 42px rgba(89,122,151,.45);

    }

    100%{

        transform:scale(1);

        box-shadow:
            0 0 12px rgba(89,122,151,.35),
            0 0 28px rgba(89,122,151,.25);

    }

}

</style>