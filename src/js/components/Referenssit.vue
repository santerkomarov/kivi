<template>
  <main>
    <div class="kivimyynti">
      <p class="top-name">REFERENSSIT</p>
    </div>
    <div class="banner-middle">
      <p>
        Kivipaasi Oy on kokenut kivirakentamisen ammattilainen. <br />Olemme
        olleet mukana yli viidessä sadassa eri kohteessa kivirakentajana.
        <br />Pääset tutustumaan referenssikohteisiimme täällä.
      </p>
    </div>
    <modal name="my-first-modal" :width="2000" :height="1900" :adaptive="true">
      <div class="pictip-big-wrap">
        <div class="pictip-big-container">
          <div id="pictip-big">
            <v-hotspot2
              :init-options="hotspotConfig2"
              @save-data="saveData"
              @after-delete="afterDelete"
              style="max-width: 800px;"
            />
            <div @click="hide" class="pictip-big-close">X</div>
          </div>
        </div>
      </div>
    </modal>

    <div v-if="showModalMap" class="pictip-big-wrap">
      <div class="pictip-big-container">
        <div>
          <v-hotspot2
            :init-options="hotspotConfig2"
            @save-data="saveData"
            @after-delete="afterDelete"
          />
          <div @click="hide" class="pictip-big-close">X</div>
        </div>
      </div>
    </div>

    <div class="activeMap">
      <div class="pictip-small-wrap">
        <div id="pictip-demo-small" class="hotsport-kartta">
          <v-hotspot
            :init-options="hotspotConfig"
            @save-data="saveData"
            @after-delete="afterDelete"
          />
        </div>
        <div class="pictip-show-big">
          <p>
            Olemme vuosien varrella olleet mukana monien projektien
            rakentamisessa Helsingissä. Tämä kaavio näyttää sijainnit ja
            vihjeet. Napsauta pisteitä ja lue lisää.
          </p>
          <button @click="show">Näytä suuri kaavio.</button>
        </div>
      </div>
    </div>

    <!--  SLIDERS    -->
    <div class="wrap-slider">
      <div class="slider-width">
        <agile class="" ref="main" :options="options1" :as-nav-for="asNavFor1">
          <div
            class="slide"
            v-for="(slide, index) in slides"
            :key="index"
            :class="`slide--${index}`"
          >
            <div class="wrap-img-thimb">
              <img :src="slide" />
              <div class="image-description">
                {{ imm[index] }}
              </div>
            </div>
          </div>
        </agile>

         <agile
            class="thumbnails"
            ref="thumbnails"
            :options="options2"
            :as-nav-for="asNavFor2"
         >
            <div
            class="slide slide--thumbniail"
            v-for="(slide, index) in slides"
            :key="index"
            :class="`slide--${index}`"
            @click="$refs.thumbnails.goTo(index)"
            >
            <div class="wrap-img-thimb second">
               <img :src="slide" />
               <div class="image-description">
                  {{ imm[index] }}
               </div>
            </div>
          </div>
          <template slot="prevButton">&#8249;</template>
          <template slot="nextButton">&#8250;</template>
        </agile>
      </div>
    </div>
  </main>
</template>

<script>
import VueHotspot from "vue-hotspot";
import { VueAgile } from "vue-agile";

export default {
  components: {
    "v-hotspot": VueHotspot,
    "v-hotspot2": VueHotspot,
    agile: VueAgile,
  },
  data() {
    return {
      asNavFor1: [],
      asNavFor2: [],

      options1: {
        dots: false,
        fade: true,
        navButtons: false,
      },
      options2: {
         autoplay: true,
         centerMode: true,
         dots: false,
         navButtons: true,
         slidesToShow: 3,
         responsive: [
            {
               breakpoint: 600,
               settings: {
               slidesToShow: 5,
            },
            },
            {
               breakpoint: 1000,
               settings: {
                  navButtons: true,
               },
            },
        ],
      },
      slides: [
        "dist/images/capella1.jpg",
        "dist/images/capella2.jpg",
        "dist/images/capella3.jpg",
        "dist/images/isosilta1.jpg",
        "dist/images/isosilta2.jpg",
        "dist/images/isosilta3.jpg",
        "dist/images/koivusaarenmetroasema1.jpg",
        "dist/images/koivusaarenmetroasema2.jpg",
        "dist/images/koivusaarenmetroasema3.jpg",
        "dist/images/muistomuuri1.jpg",
        "dist/images/muistomuuri2.jpg",
        "dist/images/muistomuuri3.jpg",
        "dist/images/verkkosaarenkanava1.jpg",
        "dist/images/verkkosaarenkanava2.jpg",
        "dist/images/verkkosaarenkanava3.jpg",

      ],
      imm: ["Capella 1", "Capella 2", "Capella 3", "Isosilta 1","Isosilta 2","Isosilta 3","Koivusaarenmetroasema 1", "Koivusaarenmetroasema 2", "Koivusaarenmetroasema 3","Muistomuuri 1", "Muistomuuri 2", "Muistomuuri 3", "Verkkosaarenkanava 1", "Verkkosaarenkanava 2","Verkkosaarenkanava 3"],
      currentSlide: 0,
      captions: [
        "This is slide 1",
        "This is the second slide",
        "This is a third and final slide",
        "This is a third and final slide",
        "This is a third and final slide",
        "This is a third and final slide",
        "This is a third and final slide",
      ],

      showModalMap: false,
      hotspotConfig: {
        image: "dist/images/helsinki-5-1.jpg",
        editable: false,
        interactivity: "hover",
        data: [
            //! Remember that this order of objects is important that avoids showing circles above tips. 
            { Message: "2017", Title: "Verkkosaari", x: 82, y: 8 },
            { Message: "2018", Title: "Capellan aukio", x: 80, y: 13 },
            {
            Message: "Kasarmikatu 21 ja Koivusaaren metroasema",
            Title: "Kasarmikatu",
            x: 53,
            y: 54,
          },
          { Message: "2019", Title: "Jätkäsaari", x: 15, y: 80 },
          {
            Message: "2015, kiveykset ",
            Title: "Mannerheimintie, 30",
            x: 44,
            y: 50,
          },
          { Message: "2015", Title: "Kalasatama", x: 78, y: 22 },
          {
            Message: "2016-2017, graniiti",
            Title: "Iso Robertinkatu",
            x: 46,
            y: 56,
          },
          {
            Message:
              "Isoisän silta maatuet. Talvisodan muistomerkin jalustakiveys.",
            Title: "Sompasaari vaihe 1",
            x: 76,
            y: 30,
          },
        ],
        hotspotColor: "#00FF00",
        messageBoxColor: "#fff",
        textColor: "#333",
        opacity: 0.9,
      },
      hotspotConfig2: {
        image: "dist/images/helsinki-5-5.jpg",
        editable: false,
        interactivity: "hover",
        data: [
          //! Remember that this order of objects is important that avoids showing circles above tips. 
            { Message: "2017", Title: "Verkkosaari", x: 82, y: 8 },
            { Message: "2018", Title: "Capellan aukio", x: 80, y: 13 },
            {
            Message: "Kasarmikatu 21 ja Koivusaaren metroasema",
            Title: "Kasarmikatu",
            x: 53,
            y: 54,
          },
          { Message: "2019", Title: "Jätkäsaari", x: 15, y: 80 },
          {
            Message: "2015, kiveykset ",
            Title: "Mannerheimintie, 30",
            x: 44,
            y: 50,
          },
          { Message: "2015", Title: "Kalasatama", x: 78, y: 22 },
          {
            Message: "2016-2017, graniiti",
            Title: "Iso Robertinkatu",
            x: 46,
            y: 56,
          },
          {
            Message:
              "Isoisän silta maatuet. Talvisodan muistomerkin jalustakiveys.",
            Title: "Sompasaari vaihe 1",
            x: 76,
            y: 30,
          },
        ],
        hotspotColor: "#00FF00",
        messageBoxColor: "#fff",
        textColor: "#333",
        opacity: 0.9,
      },
    };
  },
  methods: {
   
    showBigMap() {
      this.showModalMap = true;
    },
    closeModal() {
      this.showModalMap = false;
    },
    show() {
      this.$modal.show("my-first-modal");
    },
    hide() {
      this.$modal.hide("my-first-modal");
    },
  },
  mounted() {
    this.asNavFor1.push(this.$refs.thumbnails);
    this.asNavFor2.push(this.$refs.main);
  },
};
</script> 

<style>
.hotspot {
  width: 400px;
}
.hotsport-kartta {
  max-width: 300px;
}
.wrap-slider {
  position: relative;
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background-color: #c1c1c1;
  box-shadow: rgb(0 0 0 / 30%) 0px 2px 5px, rgb(0 0 0 / 40%) 0px 2px 4px;
  margin-bottom: 80px;
  border-radius: 8px;
}

.agile__actions {
  margin-bottom: 10px;
}
.agile__nav-button {
  background: rgba(255, 255, 255, 0.6);
  padding: 6px 10px 10px 10px;
  color: rgba(117, 34, 60, 0.9);
  cursor: pointer;
  font-size: 46px;
  font-weight: 900;
  transition-duration: 0.3s;
}
.agile__nav-button:hover {
  color: #26110a;
}
.agile__nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.agile__nav-button--prev {
  left: 5px;
}
.agile__nav-button--next {
  right: 5px;
}

.agile__dot--current button,
.agile__dot:hover button {
  background-color: green;
}

.slide {
  align-items: center;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  justify-content: center;
}
.slider-width {
  max-width: 824px;
  margin: 0 auto;
}
.thumbniail {
  cursor: pointer;
  height: 100px;
  padding: 0 5px;
  transition: opacity 0.3s;
}
.slide--thumbniail:hover {
  opacity: 0.75;
}
.slide img {
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  width: 100%;
}
.second {
  max-height: 100px;
}
.wrap-img-thimb {
  position: relative;
}
.wrap-img-thimb img {
  display: block;
  padding: 2px;
}
.second img {
  display: block;
  padding: 2px;
  cursor: pointer;
}
.image-description {
  background-color: rgba(117, 34, 60, 1);
  color: #fff;
  position: absolute;
  font-size: 12px;
  padding: 2px;
  bottom: 1%;
  left: 1%;
  margin-bottom: 0;
}
.vm--modal {
   background-color: transparent;
}
.modal-enter {
  opacity: 0.5;
}
.modal-leave-active {
  opacity: 0.7;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.4);
  transform: scale(1.4);
}
</style>