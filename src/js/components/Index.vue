<template>
   <div>
      <div class="wrap">
         <header>
		   	<div class="top">
		   		<div class="logo">
		   			<img src="dist/images/logo1.png" height="40" width="46" alt="logo">
		   			<p>kivipaasi oy</p>
		   		</div>
		   		<p id="phone">Puh. 0503898008</p>
               <a href="https://facebook.com" rel="noopener" target="_blank"><img src="dist/images/facebook.png" height="40" width="40" alt="icon facebook"></a>
		   	</div>

		   	<div class="top-mobail">
		   		<div class="logo-mobail">
		   			<img src="dist/images/logo1.png" height="40" width="46" alt="logo">
		   			<p>kivipaasi oy</p>
		   		</div>
		   		<img @click="showMobailMenu" src="dist/images/burger.png" height="30" width="30" alt="burger">
		   	</div>
		   </header>
      <nav id="nav" v-bind:style="{ left:navMenu }">
			<ul>
            <li @click="hideMobilMenu('etusivu'); scrollToTop()" v-bind:style= " isActive=='etusivu' ? bg : ''">
               <router-link  :to="{ name: 'etusivu' }">ETUSIVU</router-link>
            </li>
            <li @click="hideMobilMenu('kivimyynti'); scrollToTop()" v-bind:style= "isActive=='kivimyynti' ? bg : ''">
               <router-link :to="{ name: 'kivimyynti' }">KIVIMYYNTI JA<br>ASENNUSPALVELUT</router-link>
            </li>
            <li @click="hideMobilMenu('infra'); scrollToTop()" v-bind:style= "isActive=='infra' ? bg : ''">
               <router-link :to="{ name: 'infra' }">INFRA- JA<br>TALONRAKENTAMISEN PALVELUT</router-link>
            </li>
            <li  @click="hideMobilMenu('referenssit'); scrollToTop()" v-bind:style= "isActive=='referenssit' ? bg : ''">
               <router-link :to="{ name: 'referenssit' }">REFERENSSIT</router-link>
            </li>
            <li @click="hideMobilMenu('contact'); scrollToTop()" v-bind:style= "isActive=='contact' ? bg : ''">
               <router-link :to="{ name: 'contact' }">OTA YHTIÖTTÄ</router-link>
            </li>
			</ul>
         <div class="white-line"></div>
		</nav>
   </div>
      <router-view default="{name: 'etusivu'}"></router-view>
      <div class="wrap">
         <footer>
            <p>Kivipaasi Oy
               <br><br>
               Y-tunnus: 2029563-5
            </p>
            <p>Lampitie 45
               <br><br>
               01810, LUHTAJOKI
               <br><br>
            </p>
            <p>Puh. 0503898008
               <br><br>
               toimisto@kivipaasi.fi
            </p>
         </footer>
         <div class="created-by">
            <div>
               ©{{ new Date().getFullYear() }} Created by <a href="https://www.abergan.ru" target="_blank" rel="noopener">BERGAN</a>
            </div>
         </div>
      </div>
   </div>
</template>

<script>

export default {
   data() {
      return {
         navMenu: "-100%;",
         bg: "background:#736356", // const
         isActive: "", // start page "etusivu"
      }
   },
   mounted(){
      // assigne to etusivu-page backgroun-color at start
      this.isActive = this.currentRouteName();
      setTimeout(() => {
	      console.log("router.currentRoute.path  " +router.currentRoute.path);
      }, 10);
   },
   methods: {
      showMobailMenu() {
         if ( this.navMenu == "0%" ) {
            return this.navMenu = "-100%";
         }
         return this.navMenu = "0%";
      },
      hideMobilMenu(page) {
         this.isActive = page;
         return this.navMenu = "-100%";
      },
      currentRouteName() {
         return this.$route.name;
      },
      // scroll to the position after changing page
      scrollToTop() {
         window.scrollTo({
            top: 43,// height of the very top block with Logo & phone
            left: 0,
            // behavior: 'smooth'
         });
      }
   },
   
}
</script>

<style>
   #app {
      min-width: 100%;
   }
   /* white line under nav block that separates header from body */
   .white-line {
      width: 100%;
      height: 1px;
      background-color: #fff;
   }
</style>