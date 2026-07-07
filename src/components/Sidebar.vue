<template>
  <aside
    class="sidebar"
    :class="{ open: isOpen }"
    @click.stop
  >

    <nav>
      <div
        v-for="item in menu"
        :key="item.title"
        class="menu-section"
      >
        <div
          class="menu-title"
          @click="handleMenuClick(item)"
        >
          <span>{{ item.title }}</span>

          <span
            v-if="item.children"
            class="arrow-icon"
            :class="{ 'arrow-open': openSection === item.title }"
          ></span>
        </div>

        <ul
          v-if="item.children && openSection === item.title"
          class="submenu"
        >
          <li
            v-for="child in item.children"
            :key="child.title"
            @click="goToPage(child)"
          >
            <span
                class="orb"
                :class="[
                    child.color,
                    { active: activePage === child.title }
                ]"
            ></span>

            {{ child.title }}
          </li>
        </ul>
      </div>
    </nav>

  </aside>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

defineProps({
  isOpen: Boolean
});

const emit = defineEmits(["close-sidebar"]);

const menu = [
  {
    title: "Home",
    route:"/"
  },
  {
    title: "Pre-Camp Booklet",
    route: "/precamp",
    children: [
        {
        title: "Overview",
        color: "purple",
        route: "/precamp#overview"
        },
        {
        title: "Packing List",
        color: "purple",
        route: "/precamp#packing-list"
        },
        {
        title: "Getting Here",
        color: "purple",
        route: "/precamp#getting-here"
        }
    ]
  },
  {
    title: "Camp Guide",
    route: "/camp-guide",
    children: [
        {
        title: "Day 1",
        color: "blue",
        route: "/camp-guide#day1"
        },
        {
        title: "Day 2",
        color: "blue",
        route: "/camp-guide#day2"
        },
        {
        title: "Day 3",
        color: "blue",
        route: "/camp-guide#day3"
        },
        {
        title: "Our Sponsors",
        color: "blue",
        route: "/camp-guide#our-sponsors"
        }
    ]
  },
  {
    title: "NUS Guide",
    route: "/nus-guide",
    children: [
        {
        title: "Academics",
        color: "coral",
        route: "/nus-guide#academics"
        },
        {
        title: "NUSMS Adhocs",
        color: "coral",
        route: "/nus-guide#nusms-adhocs"
        },
        {
        title: "PBMUKS Adhocs",
        color: "coral",
        route: "/nus-guide#pbmuks-adhocs"
        },
        {
        title: "Muda Mudi CCAs",
        color: "coral",
        route: "/nus-guide#muda-mudi-ccas"
        },
        {
        title: "Eats",
        color: "coral",
        route: "/nus-guide#eats"
        },
        {
        title: "Musollahs & Masjids",
        color: "coral",
        route: "/nus-guide#musollahs-masjids"
        },
    ]
  },
  {
    title: "Important Contacts",
    route:"/importantcontacts"
  },
];

const openSection = ref(null);
const activePage = ref(null);

function toggleSection(title) {
  if (openSection.value === title) {
    openSection.value = null;
  } else {
    openSection.value = title;
  }
}


function handleMenuClick(item) {

  if (item.children) {
    toggleSection(item.title);
  }

  if (item.route) {
    router.push(item.route);
  }

  // only close if it's Home
  if (!item.children) {
    emit("close-sidebar");
  }

}

function goToPage(child) {

  activePage.value = child.title;

  const [path, hash] = child.route.split("#");

  router.push({
    path,
    hash: hash ? "#" + hash : ""
  });

  emit("close-sidebar");
}

</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 80px;
  left: 0;

  z-index: 1001;

  width: 300px;
  height: calc(100vh - 80px);

  background: var(--card);

  transform: translateX(-100%);
  transition: transform .35s ease;

  padding: 2rem;
  box-sizing: border-box;

  overflow-y: auto;

  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;

  box-shadow: var(--shadow);
}

.sidebar.open {
  transform: translateX(0);
}

h2 {
  font-family: "Nunito", sans-serif;
  font-size: 2rem;
  color: var(--primary);

  margin-bottom: 2rem;
}

.menu-section {
  margin-bottom: 1.5rem;
}

.menu-title{
    display:flex;
    justify-content:space-between;
    align-items:center;

    padding:12px 16px;

    border-radius:12px;

    border-left:4px solid transparent;

    cursor:pointer;

    font-weight:700;

    transition:.25s;
}

.menu-title:hover{

    background:var(--primary-light);

    border-left:4px solid var(--primary);

}

/* CSS-drawn triangle arrow, replaces the old ▼/▶ text characters
   so it never renders as a colorful emoji glyph on iOS/Android */
.arrow-icon{

    width:0;

    height:0;

    border-top:5px solid transparent;

    border-bottom:5px solid transparent;

    border-left:7px solid var(--primary, #402B6D);

    display:inline-block;

    flex-shrink:0;

    transition:transform .2s ease;

}

.arrow-icon.arrow-open{

    transform:rotate(90deg);

}

.submenu {
    list-style: none;

    margin-top: .5rem;

    padding: .5rem 1rem;

    background: var(--card-light);

    border-radius: 14px;
}

.submenu li{

    font-size:.95rem;

    border-radius:8px;

    padding:10px 12px;

}


.submenu li:hover{

    background:white;

    color:var(--primary);

    transform:translateX(6px);

}

.orb {
  width: 10px;
  height: 10px;

  border-radius: 50%;

  background: #D8D8D8;

  display: inline-block;

  margin-right: 10px;

  transition: 0.3s;
}

.orb.active {
  animation: pulse 1.5s infinite;
}

.orb.purple.active {
  background: #9B59B6;
  box-shadow: 0 0 15px rgba(155, 89, 182, 0.7);
}

.orb.blue.active {
  background: #6DB4E8;
  box-shadow: 0 0 15px rgba(109, 180, 232, 0.7);
}

.orb.coral.active {
  background: #FF6B6B;
  box-shadow: 0 0 15px rgba(255, 107, 107, 0.7);
}

@keyframes pulse {

  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.3);
  }

  100% {
    transform: scale(1);
  }

}

</style>