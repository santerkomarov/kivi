import Vue from "vue";
import VueRouter from "vue-router";

import Etusivu from "./components/Etusivu"
import Kivimyynti from "./components/Kivimyynti"
import Referenssit from "./components/Referenssit"
import Contact from "./components/Contact"
import Infra from "./components/Infra"


Vue.use( VueRouter );
const router = new VueRouter({
   // mode: "hash",
   mode: "history",
   routes: [
      {
         path: '/',
         redirect: '/etusivu'
      },
      {
         path: '/etusivu', 
         component: Etusivu,
         name: 'etusivu'
      },
      {
         path: '/kivimyynti', 
         component: Kivimyynti,
         name: 'kivimyynti'
      },
      {
         path: '/referenssit', 
         component: Referenssit,
         name: 'referenssit'
      },
      {
         path: '/contact', 
         component: Contact,
         name: 'contact'
      },
      {
         path: '/infra', 
         component: Infra,
         name: 'infra'
      },
   ]
});
setTimeout(() => {
	console.log(router.currentRoute.path);
}, 10);
// router.replace({ path: 'http://archive-project/main-project/kivipaasi/index.html', redirect: '/etusivu' })
export default router;