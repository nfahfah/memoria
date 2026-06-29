import { createRouter, createWebHistory } from "vue-router";

import HomeSection from "../pages/HomeSection.vue";
import PreCampSection from "../pages/PreCampSection.vue";
import CampGuideSection from "../pages/CampGuideSection.vue";
import NUSGuideSection from "../pages/NUSGuideSection.vue";
import ImportantContacts from "../pages/ImportantContacts.vue";

const routes = [
  {
    path: "/",
    component: HomeSection
  },
  {
    path: "/precamp",
    component: PreCampSection
  },
  {
    path: "/camp-guide",
    component: CampGuideSection
  },
  {
    path: "/nus-guide",
    component: NUSGuideSection
  },
  {
    path: "/importantcontacts",
    component: ImportantContacts
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth"
      };
    }

    return {
      top: 0
    };
  }
});


export default router;