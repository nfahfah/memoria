<template>
  <aside
    class="sidebar"
    :class="{ open: isOpen }"
  >

    <nav>
      <div
        v-for="item in menu"
        :key="item.title"
        class="menu-section"
      >
        <div
          class="menu-title"
          @click="item.children && toggleSection(item.title)"
        >
          <span>{{ item.title }}</span>

          <span v-if="item.children">
            {{ openSection === item.title ? "▼" : "▶" }}
          </span>
        </div>

        <ul
          v-if="item.children && openSection === item.title"
          class="submenu"
        >
          <li
            v-for="child in item.children"
            :key="child.title"
            @click="activePage = child.title"
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

defineProps({
  isOpen: Boolean
});

const menu = [
  {
    title: "🏠 Home"
  },
  {
    title: "📖 Pre-Camp Booklet",
    children: [
        {
        title: "Overview",
        color: "purple"
        },
        {
        title: "Packing List",
        color: "purple"
        },
        {
        title: "Getting Here",
        color: "purple"
        }
    ]
  },
  {
    title: "🚂 Camp Guide",
    children: [
        {
        title: "Day 1",
        color: "blue"
        },
        {
        title: "Day 2",
        color: "blue"
        },
        {
        title: "Day 3",
        color: "blue"
        },
        {
        title: "Our Sponsors",
        color: "blue"
        }
    ]
  },
  {
    title: "🎓 NUS Guide",
    children: [
        {
        title: "Academics",
        color: "coral"
        },
        {
        title: "NUSMS Adhocs",
        color: "coral"
        },
        {
        title: "PBMUKS Adhocs",
        color: "coral"
        },
        {
        title: "Muda Mudi CCAs",
        color: "coral"
        },
        {
        title: "Eats",
        color: "coral"
        },
        {
        title: "Musollahs & Masjids",
        color: "coral"
        }
    ]
  }
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