<template>
  <section
    id="day1"
    class="day1-section"
  >

    <div class="hero">

      <p class="day-number">
        DAY 1
      </p>

      <h1>
        Memories Gone Missing
      </h1>

      <p class="subtitle">
        The journey begins as every memory ball mysteriously disappears from
        Memoria 😱...
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
    time: "8.30 AM",
    title: "Registration",
    venue: "SFAH Auditiorium",
    description: "Meet your OG, collect your camp essentials, and step into an adventure full of core memories!"
},

{
    time: "9.00 AM",
    title: "Opening",
    venue: "SFAH Auditorium",
},

{
    time: "10.00 AM",
    title: "Memory Ball Designing",
    venue: "SFAH Auditorium",
    description: "Get to know your OG-mates and build your team identity by designing your very own memory ball!"
},

{
    time: "11.00 AM",
    title: "Intra-OG Games",
    venue: "Around FASS",
    description: "Compete within your OG in exciting challenges!"
},

{
    time: "12.00 PM",
    title: "Lunch",
    venue: "Around FASS",
},

{
    time: "2.00 PM",
    title: "Zuhr",
    venue: "SFAH Saffron",
},

{
    time: "2.30 PM",
    title: "CCA Performances",
    venue: "SFAH Auditorium",
    description: "performances by Silat, followed by Ilsa Tari and last but not least Dikir Barat!"
},

{
    time: "6.00 PM",
    title: "CCA & MS Committees Showcase",
    venue: "Sports Hall",
    description: "Discover the communities that make NUS feel like home."
},

{
    time: "9.00 PM",
    title: "Memoria Supper Sale",
    venue: "Campus",
    description: "Relax, bond with your OG and end the day together."
}

];

</script>

<style scoped>

.day1-section{

    min-height:100vh;

    background:#EAF5FF;

    padding:100px 8%;

}

.hero{

    text-align:center;

    margin-bottom:80px;

}

.day-number{

    color:#6DB4E8;

    font-weight:700;

    letter-spacing:5px;

    margin-bottom:15px;

}

.hero h1{

    font-family:"Luckiest Guy";

    font-size:4rem;

    color:#2E3A67;

    margin-bottom:20px;

}

.subtitle{

    margin:auto;

    color:#5A6785;

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

    background:#9ED4FF;

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
        #A8DBFF 30%,
        #6DB4E8 75%
    );

    border:5px solid white;

    box-shadow:
        0 0 12px rgba(109,180,232,.45),
        0 0 28px rgba(109,180,232,.35);

    animation:pulseMemory 2.8s ease-in-out infinite;

    z-index:2;

    flex-shrink:0;

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

}

.timeline-item:hover .dot{

    transform:scale(1.25);

}

.time{

    display:inline-block;

    background:#6DB4E8;

    color:white;

    padding:6px 14px;

    border-radius:999px;

    font-size:.85rem;

    font-weight:700;

    margin-bottom:18px;

}

.card h2{

    color:#2E3A67;

    margin-bottom:10px;

}

.venue{

    color:#6DB4E8;

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
            0 0 12px rgba(109,180,232,.45),
            0 0 28px rgba(109,180,232,.35);

    }

    50%{

        transform:scale(1.18);

        box-shadow:
            0 0 18px rgba(109,180,232,.8),
            0 0 42px rgba(109,180,232,.55);

    }

    100%{

        transform:scale(1);

        box-shadow:
            0 0 12px rgba(109,180,232,.45),
            0 0 28px rgba(109,180,232,.35);

    }

}

</style>