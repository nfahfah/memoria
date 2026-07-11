import { createApp } from "vue";
import App from "./App.vue";
import { inject } from '@vercel/analytics'

import router from "./router";

import "./styles/global.css";

createApp(App)
  .use(router)
  .mount("#app");

inject()
