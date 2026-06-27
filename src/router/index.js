import { createRouter, createWebHistory } from "vue-router";

import HomeSection from "../pages/HomeSection.vue";
import WelcomeSection from "../pages/WelcomeSection.vue";
import PreCampSection from "../pages/PreCampSection.vue";

import OverviewSection from "../pages/OverviewSection.vue";
import PackingListSection from "../pages/PackingListSection.vue";
import GettingHereSection from "../pages/GettingHereSection.vue";

import CampGuideSection from "../pages/CampGuideSection.vue";
import Day1Section from "../pages/Day1Section.vue";
import Day2Section from "../pages/Day2Section.vue";
import Day3Section from "../pages/Day3Section.vue";
import OurSponsorsSection from "../pages/OurSponsorsSection.vue";

import NUSGuideSection from "../pages/NUSGuideSection.vue";
import AcademicsSection from "../pages/AcademicsSection.vue";
import NUSMSSection from "../pages/NUSMSSection.vue";
import PBMUKSSection from "../pages/PBMUKSSection.vue";
import CCAsSection from "../pages/CCAsSection.vue";
import EatsSection from "../pages/EatsSection.vue";
import MusollahsSection from "../pages/MusollahsSection.vue";

const routes = [
  { path: "/", component: HomeSection },

  { path: "/precamp", component: PreCampSection },
  { path: "/overview", component: OverviewSection },
  { path: "/packing-list", component: PackingListSection },
  { path: "/getting-here", component: GettingHereSection },

  { path: "/camp-guide", component: CampGuideSection },
  { path: "/day1", component: Day1Section },
  { path: "/day2", component: Day2Section },
  { path: "/day3", component: Day3Section },
  { path: "/our-sponsors", component: OurSponsorsSection },

  { path: "/nus-guide", component: NUSGuideSection },
  { path: "/academics", component: AcademicsSection },
  { path: "/nusms-adhocs", component: NUSMSSection },
  { path: "/pbmuks-adhocs", component: PBMUKSSection },
  { path: "/muda-mudi-ccas", component: CCAsSection },
  { path: "/eats", component: EatsSection },
  { path: "/musollahs-masjids", component: MusollahsSection }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;