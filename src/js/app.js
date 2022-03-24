import Vue from 'vue'
import "../modules/test";

import Loader from "./components/Loader.vue"
import Slider from "./components/Slider.vue"
import Index from "./components/Index.vue"

import VueGallerySlideshow from 'vue-gallery-slideshow';

import Vuetify from 'vuetify'
import router from "./router";
import VModal from 'vue-js-modal'
Vue.use(VModal);

new Vue({
   el: "#app",
   components: {
      Loader,
      Slider,
      Index,
      VueGallerySlideshow,
      Vuetify,
   },
   router,
   modal: VModal

})
