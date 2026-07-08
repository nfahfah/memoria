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

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return new Promise((resolve) => {
        // wait for the DOM (images, layout, etc.) to settle
        // before trying to find and scroll to the element
        setTimeout(() => {
          const el = document.querySelector(to.hash);
          if (el) {
            resolve({
              el: to.hash,
              behavior: "smooth",
              top: 90 // adjust to match your fixed navbar height
            });
          } else {
            resolve({ top: 0 });
          }
        }, 400); // tweak delay if 400ms isn't enough on slower loads
      });
    }

    return { top: 0 };
  }
});

export default router;