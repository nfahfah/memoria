<template>
  <section
    id="day3"
    class="day3-section"
      ref="sectionRef"
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
        stolen memories and restore the light of Memoria ✊.
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

    <div class="journey-end">
      <h2>✨ Journey Completed ✨</h2>
      <p>
        Every memory has been restored! 
        Thank you for being part of Memoria. 
        As this chapter comes to an end, a new one begins; your NUS journey! 
        We wish you all the very best, and may the friendships, experiences, and core memories you've made stay with you for years to come.
      </p>
    </div>

    <button class="back-to-top" @click="scrollToTop">
      <span class="arrow-icon">↑</span>
      <span class="back-to-top-label">Back to Top</span>
    </button>

  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, nextTick } from "vue";
import trainPoint from "../assets/images/day3-trainpoint.png";

const sectionRef = ref(null);

function scrollToTop() {
  sectionRef.value?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const activities = [
  {
    time: "8.30 AM",
    title: "Checkout for Overnighters & Reporting Time for Non-Overnight",
    venue: "PGP Foyer"
  },
  {
    time: "8.45 AM",
    title: "Breakfast",
    venue: "UTown"
  },
  {
    time: "10.55 AM",
    title: "Sharing by MSS and PBMUKS AdHocs",
    venue: "UTown SRC",
    description: "Get to know about the different causes MSS/PBMUKS support!"
  },
  {
    time: "12.20 PM",
    title: "Lunch",
    venue: "MPSH4"
  },
  {
      time: "1.30 PM",
      title: "Zuhr",
      venue: "MPSH4",
  },
  {
      time: "2.15 PM",
      title: "Day 3 Station Games",
      venue: "MPSH4",
      description: "Meet fellow freshmen from other OGs through exciting games, laughter, and friendly competition!"
  },
  {
      time: "4.45 PM",
      title: "Asar",
      venue: "UTown SRC"
  },
  {
      time: "5.00 PM",
      title: "Thank You Session & Keychain Making Segment",
      venue: "UTown Green",
      description: "Reflect on your camp journey, share your favourite memories, and craft a keepsake to take home!"
  },
  {
      time: "5.45 PM",
      title: "Picnic Dinner",
      venue: "UTown Green"
  },
  {
      time: "7.10 PM",
      title: "Maghrib",
      venue: "UTown SRC"
  },
  {
      time: "7.40 PM",
      title: "Finale Night",
      venue: "UTown Audi 3",
      description: "Take the stage to showcase the performance you've been preparing, and cheer on the amazing performances from other OGs!"
  },
  {
      time: "10.00 PM",
      title: "Dismissal",
      venue: "UTown Audi 3"
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
    fill:#FFF8EA;
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
    right:-38px;
}

.item-right .dot{
    left:-38px;
}

.pin-icon{
    --pin-tx: 0px;
    position:absolute;
    left:0;
    top:0;
    width:60px;
    height:auto;
    transform:translate(var(--pin-tx), -92%);
    filter:drop-shadow(0 6px 10px rgba(0,0,0,.25));
    animation:pinBob 2.8s ease-in-out infinite;
    transform-origin:bottom center;
}

.item-left .pin-icon{
    --pin-tx: -57px;
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
    background:linear-gradient(160deg, #ffffff 0%, #FFFAEC 100%);
    border-radius:20px;
    padding:28px;
    box-shadow:0 12px 26px rgba(94,66,18,.12);
    border:2px solid #E3A726;
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
    background:#E3A726;
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
    border-left:2px dashed #E3A726;
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
    box-shadow:0 18px 34px rgba(94,66,18,.18);
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
    max-width:900px;
    margin:80px auto 0;
    background:linear-gradient(135deg, #FFE8A8, #FFF7DD);
    padding:45px;
    border-radius:28px;
    text-align:center;
    box-shadow:0 12px 30px rgba(0,0,0,.08);
    position:relative;
    z-index:1;
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

.back-to-top{
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:6px;
    margin:70px auto 0;
    background:none;
    border:none;
    cursor:pointer;
    color:#B97A0B;
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
    color:#C68A18;
}

.back-to-top:hover .arrow-icon{
    color:#F3C547;
}

@keyframes bounce{
    0%, 100%{ transform:translateY(0); }
    50%{ transform:translateY(-8px); }
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
      background:#F2CF72;
      border-radius:999px;
      z-index:0;
  }

  .timeline-item{
      width:100%;
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


}

</style>