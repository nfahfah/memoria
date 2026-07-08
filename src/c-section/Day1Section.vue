<template>
  <section
    id="day1"
    class="day1-section"
    ref="sectionRef"
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

    <div
      class="timeline"
      ref="timelineRef"
    >

      <svg
        class="track-svg"
        :width="svgSize.width"
        :height="svgSize.height"
        :viewBox="`0 0 ${svgSize.width} ${svgSize.height}`"
      >
        <path
          :d="ribbonPath"
          class="rail-ribbon"
        />
        <path
          :d="leftEdgePath"
          class="rail-edge"
        />
        <path
          :d="rightEdgePath"
          class="rail-edge"
        />
        <polygon
          v-for="(tie, i) in ties"
          :key="i"
          :points="tie"
          class="rail-tie"
        />
      </svg>

      <div
        v-for="(activity, i) in activities"
        :key="activity.title"
        class="timeline-item"
        :class="i % 2 === 0 ? 'item-left' : 'item-right'"
      >
        <div
          class="dot"
          :ref="el => setDotRef(el, i)"
        >
          <img
            :src="trainPoint"
            alt=""
            class="pin-icon"
          />
        </div>
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
          <p
            v-if="activity.description"
            class="description"
          >
            {{ activity.description }}
          </p>
        </div>
      </div>

    </div>

    <button class="back-to-top" @click="scrollToTop">
      <span class="arrow-icon">↑</span>
      <span class="back-to-top-label">Back to Top</span>
    </button>

  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, nextTick } from "vue";
import trainPoint from "../assets/images/day1-trainpoint.png";

const sectionRef = ref(null);

function scrollToTop() {
  sectionRef.value?.scrollIntoView({ behavior: "smooth", block: "start" });
}

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
    venue: "SFAH",
  },
  {
    time: "2.30 PM",
    title: "CCA Performances",
    venue: "SFAH Auditorium",
    description: "Performances by Silat, followed by Ilsa Tari and last but not least Dikir Barat!"
  },
  {
    time: "3.45 PM",
    title: "CCA & MS Committees Showcase",
    venue: "Sports Hall",
    description: "An opportunity for you to discover your talents and passions!"
  },
  {
    time: "5.00 PM",
    title: "Asar",
    venue: "SFAH"
  },
  {
    time: "6.45 PM",
    title: "Dinner",
    venue: "Frontier Canteen",
  },
  {
    time: "7.45 PM",
    title: "Maghrib",
    venue: "S16 Multipurpose Room",
  },
  {
    time: "8.10 PM",
    title: "Memoria Supper Sale",
    venue: "Frontier Canteen",
    description: "Will Joy or Disgust take over? Bid your points for mystery supper items, but beware.. not every reward will make you smile!"
  },
  {
    time: "9.30 PM",
    title: "Freshmen Dismissal & Movement to PGP",
    venue: "Frontier Canteen",
  }
];

const timelineRef = ref(null);
const dotEls = [];

const svgSize = reactive({ width: 0, height: 0 });
const ribbonPath = ref("");
const leftEdgePath = ref("");
const rightEdgePath = ref("");
const ties = ref([]);

let resizeObserver;

function setDotRef(el, i) {
  if (el) dotEls[i] = el;
}

// ===== bezier helpers =====
function cubicPoint(p0, c1, c2, p3, t) {
  const mt = 1 - t;
  return {
    x: mt ** 3 * p0.x + 3 * mt ** 2 * t * c1.x + 3 * mt * t ** 2 * c2.x + t ** 3 * p3.x,
    y: mt ** 3 * p0.y + 3 * mt ** 2 * t * c1.y + 3 * mt * t ** 2 * c2.y + t ** 3 * p3.y,
  };
}

function cubicTangent(p0, c1, c2, p3, t) {
  const mt = 1 - t;
  return {
    x: 3 * mt ** 2 * (c1.x - p0.x) + 6 * mt * t * (c2.x - c1.x) + 3 * t ** 2 * (p3.x - c2.x),
    y: 3 * mt ** 2 * (c1.y - p0.y) + 6 * mt * t * (c2.y - c1.y) + 3 * t ** 2 * (p3.y - c2.y),
  };
}

// track geometry constants — tweak these to change thickness / tie spacing
const RAIL_HALF_WIDTH = 13;   // half the total track thickness, in px
const SAMPLES_PER_SEGMENT = 32;
const TIE_EVERY = 4;          // place a tie every N samples
const TIE_HALF_THICKNESS = 4; // how thick each tie bar is along the rail direction

function toPoints(arr) {
  return arr.map((p) => `${p.x},${p.y}`).join(" ");
}

// Measures every dot's real on-screen position, then walks the curve
// through them sample-by-sample, computing the local tangent/normal at
// each point so the two rail edges and every tie stay perpendicular to
// the direction of travel — even through the bends.
function updateTrack() {
  const container = timelineRef.value;
  if (!container) return;

  svgSize.width = container.clientWidth;
  svgSize.height = container.scrollHeight;

  const containerRect = container.getBoundingClientRect();
  const dotPoints = dotEls
    .filter(Boolean)
    .map((el) => {
      const r = el.getBoundingClientRect();
      return {
        x: r.left + r.width / 2 - containerRect.left,
        y: r.top + r.height / 2 - containerRect.top,
      };
    });

  if (dotPoints.length < 2) return;

  const leftPoints = [];
  const rightPoints = [];
  const centers = [];

  for (let i = 0; i < dotPoints.length - 1; i++) {
    const p0 = dotPoints[i];
    const p3 = dotPoints[i + 1];
    const midY = (p0.y + p3.y) / 2;
    const c1 = { x: p0.x, y: midY };
    const c2 = { x: p3.x, y: midY };

    const startSample = i === 0 ? 0 : 1; // skip duplicate shared endpoint
    for (let s = startSample; s <= SAMPLES_PER_SEGMENT; s++) {
      const t = s / SAMPLES_PER_SEGMENT;
      const pos = cubicPoint(p0, c1, c2, p3, t);
      const tan = cubicTangent(p0, c1, c2, p3, t);
      const len = Math.hypot(tan.x, tan.y) || 1;
      const tx = tan.x / len;
      const ty = tan.y / len;
      const nx = -ty;
      const ny = tx;

      leftPoints.push({ x: pos.x + nx * RAIL_HALF_WIDTH, y: pos.y + ny * RAIL_HALF_WIDTH });
      rightPoints.push({ x: pos.x - nx * RAIL_HALF_WIDTH, y: pos.y - ny * RAIL_HALF_WIDTH });
      centers.push({ pos, tx, ty, nx, ny });
    }
  }

  // filled ribbon: left edge forward, then right edge backward, closed
  ribbonPath.value =
    `M ${toPoints(leftPoints).replace(/ /g, " L ")} ` +
    `L ${toPoints(rightPoints.slice().reverse()).replace(/ /g, " L ")} Z`;

  leftEdgePath.value = `M ${toPoints(leftPoints).replace(/ /g, " L ")}`;
  rightEdgePath.value = `M ${toPoints(rightPoints).replace(/ /g, " L ")}`;

  const tiePolygons = [];
  for (let i = 0; i < centers.length; i += TIE_EVERY) {
    const { pos, tx, ty, nx, ny } = centers[i];
    const a = { x: pos.x + nx * RAIL_HALF_WIDTH + tx * TIE_HALF_THICKNESS, y: pos.y + ny * RAIL_HALF_WIDTH + ty * TIE_HALF_THICKNESS };
    const b = { x: pos.x + nx * RAIL_HALF_WIDTH - tx * TIE_HALF_THICKNESS, y: pos.y + ny * RAIL_HALF_WIDTH - ty * TIE_HALF_THICKNESS };
    const c = { x: pos.x - nx * RAIL_HALF_WIDTH - tx * TIE_HALF_THICKNESS, y: pos.y - ny * RAIL_HALF_WIDTH - ty * TIE_HALF_THICKNESS };
    const d = { x: pos.x - nx * RAIL_HALF_WIDTH + tx * TIE_HALF_THICKNESS, y: pos.y - ny * RAIL_HALF_WIDTH + ty * TIE_HALF_THICKNESS };
    tiePolygons.push(toPoints([a, b, c, d]));
  }
  ties.value = tiePolygons;
}

onMounted(async () => {
  await nextTick();
  updateTrack();
  // fonts/images loading after mount can still shift layout slightly
  setTimeout(updateTrack, 300);

  resizeObserver = new ResizeObserver(() => updateTrack());
  resizeObserver.observe(timelineRef.value);
});

onUnmounted(() => {
  if (resizeObserver) resizeObserver.disconnect();
});
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
    max-width:900px;
    margin:auto;
    position:relative;
}

/* ===== winding rail track background ===== */

.track-svg{
    position:absolute;
    top:0;
    left:0;
    z-index:0;
    pointer-events:none;
}

.rail-ribbon{
    fill:#8B6F47;
    stroke:none;
}

.rail-edge{
    fill:none;
    stroke:#5E4A30;
    stroke-width:3;
    stroke-linecap:round;
}

/* ties are filled with the section's own background so they read as
   gaps cut into the track, same trick as the landing-page rail-track */
.rail-tie{
    fill:#EAF5FF;
}

/* ===== alternating timeline items ===== */

.timeline-item{
    position:relative;
    z-index:1;
    width:44%;
    margin-bottom:56px;
}

.timeline-item.item-left{
    margin-right:auto;
}

.timeline-item.item-right{
    margin-left:auto;
}

.dot{
    position:absolute;
    top:26px;
    width:2px;
    height:2px;
    z-index:2;
}

.item-left .dot{
    right:-38px;   /* was -38px — more breathing room */
}

.item-right .dot{
    left:-38px;    /* was -38px */
}

.pin-icon{
    --pin-tx: 0px;
    position:absolute;
    left:0;
    top:0;
    width:60px;    /* was 60px — small enough to fit the gap */
    height:auto;
    transform:translate(var(--pin-tx), -92%);
    filter:drop-shadow(0 6px 10px rgba(0,0,0,.25));
    animation:pinBob 2.8s ease-in-out infinite;
    transform-origin:bottom center;
}

.item-left .pin-icon{
    --pin-tx: -57px;   /* centers it in the card-side portion of the gap */
}

.item-right .pin-icon{
    --pin-tx: -2px;
}

@keyframes pinBob{
    0%, 100%{ transform:translate(var(--pin-tx), -92%) scale(1); }
    50%{ transform:translate(var(--pin-tx), -92%) scale(1.1); }
}

.timeline-item:hover .pin-icon{
    transform:translate(var(--pin-tx), -92%) scale(1.2);
}


.card{
    position:relative;
    background:linear-gradient(160deg, #ffffff 0%, #F3FAFF 100%);
    border-radius:20px;
    padding:28px;
    box-shadow:0 12px 26px rgba(46,58,103,.12);
    border:2px solid #266bac;
    transition:transform .3s ease, box-shadow .3s ease;
    overflow:hidden;
}

/* punched "ticket" notch on the edge facing the track */
.card::before{
    content:"";
    position:absolute;
    top:26px;
    width:24px;
    height:24px;
    background:#266bac;
    border-radius:50%;
    transform:translateY(-50%);
    z-index:1;
}

.item-left .card::before{
    right:-12px;
}

.item-right .card::before{
    left:-12px;
}

/* dashed perforation line just inside the notch */
.card::after{
    content:"";
    position:absolute;
    top:14px;
    bottom:14px;
    width:0;
    border-left:2px dashed #266bac;
}

.item-left .card{
    padding-right:38px;
}

.item-left .card::after{
    right:14px;
}

.item-right .card{
    padding-left:38px;
}

.item-right .card::after{
    left:14px;
}

.timeline-item:hover .card{
    transform:translateY(-6px);
    box-shadow:0 18px 34px rgba(46,58,103,.18);
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

.back-to-top{
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:6px;
    margin:70px auto 0;
    background:none;
    border:none;
    cursor:pointer;
    color:#2E3A67;
    font-family:inherit;
}

.back-to-top .arrow-icon{
    font-size:2rem;
    line-height:1;
    animation:bounce 2s infinite;
}

.back-to-top .back-to-top-label{
    font-size:.95rem;
    font-weight:600;
    letter-spacing:1px;
    color:#5A6785;
}

.back-to-top:hover .arrow-icon{
    color:#6DB4E8;
}

/* =========================
   Mobile: collapse back to a plain straight list,
   the winding two-column layout gets too tight on narrow screens
========================= */
@media (max-width: 768px) {

  .track-svg{
      display:none;
  }

  .timeline::before{
      content:"";
      position:absolute;
      left:14px;
      top:0;
      bottom:0;
      width:5px;
      background:#9ED4FF;
      border-radius:999px;
      z-index:0;
  }

  .timeline-item{
    width:calc(100% - 44px);
    margin-left:44px !important;
    margin-right:0 !important;
}

  .item-left .dot,
  .item-right .dot{
      left:-38px;
      right:auto;
  }

  .card::before,
  .card::after{
      display:none;
  }

  .item-left .card,
  .item-right .card{
      padding-left:28px;
      padding-right:28px;
  }

  .back-to-top .arrow-icon{
      font-size:1.4rem;
  }
  .back-to-top .back-to-top-label{
      font-size:.85rem;
  }


.item-left .pin-icon{
    --pin-tx: -45px;   /* centers it in the card-side portion of the gap */
}

.item-right .pin-icon{
    --pin-tx: -45px;
}

@media (max-width: 480px) {

.day1-section{
    padding:60px 6%;
}

.hero{
    margin-bottom:36px;
}

.day-number{
    font-size:.75rem;
    letter-spacing:2px;
}

.hero h1{
    font-size:1.7rem;
    margin-bottom:10px;
    line-height:1.25;
}

.subtitle{
    font-size:.85rem;
}

.timeline-item{
    width:calc(100% - 36px);
    margin-left:36px !important;
    margin-bottom:28px;
}

.timeline::before{
    left:10px;
    width:4px;
}

.dot{
    width:1px;
    height:1px;
}

.item-left .dot,
.item-right .dot{
    left:-30px;
}

.pin-icon{
    width:36px;
}

.item-left .pin-icon,
.item-right .pin-icon{
    --pin-tx: -36px;
}

.card{
    padding:14px;
    border-radius:12px;
}

.item-left .card,
.item-right .card{
    padding-left:14px;
    padding-right:px;
}

.time{
    padding:3px 9px;
    font-size:.7rem;
    margin-bottom:8px;
}

.card h2{
    font-size:1.02rem;
    margin-bottom:5px;
}

.venue{
    font-size:.78rem;
    margin-bottom:6px;
}

.description{
    font-size:.8rem;
    line-height:1.45;
}

}
}

</style>