<template>
  <div>
    <main>
      <div class="kivimyynti">
        <p class="top-name">Infrarakentaminen</p>
        <p class="top-slogan">Infrakohteiden luotettava kivirakentaja</p>
        <p>
          Kivi ja siitä rakennetut rakennukset sekä kaupunkiympäristöt ovat osa kaupunkimaisemaa. Kadut ja kulkuväylät, torit ja aukiot ovat tyypillisiä kivipäällysteisiä rakenteita.
        </p>
        <p>
           Kivi on kestävää ja sen muut ns. tekniset ominaisuudet tekevät siitä materiaalina erinomaisen ympäristön ja infran rakentamiseen. Se on kovaa kulutusta kestävä materiaali, joka kestää suomalaisia sääolosuhteita ja materiaaliin kohdistuvaa kemiallista rasitusta. Kivi myös säilyttää muotonsa. Näiden ominaisuuksiensa vuoksi kivi on elinkaariajattelun mukaan edullinen ja kaupunkiympäristön infrarakentamiseen erinomaisesti soveltuva materiaali.
        </p>
        <p>
           Kivipaasi Oy:llä on vuosikymmenten kokemus kivimateriaalin käytöstä infrarakentamisessa. Olemme olleet mukana useissa kaupunkirakentamiskohteissa ja toteuttaneet eri tyyppisiä, vaativiakin infrarakentamiskohteita. Referenssit-sivulla löydät enemmän tietoja kohteistamme.
        </p>
        
      </div>
    </main>

    <div class="wrap-tab"> 
    <tabs
      :tabs="tabs"
      :currentTab="currentTab"
      :wrapper-class="'default-tabs'"
      :tab-class="'default-tabs__item'"
      :tab-active-class="'default-tabs__item_active'"
      :line-class="'default-tabs__active-line'"
      @onClick="handleClick"
      
    />   

      <div v-if="currentTab === 'tab1'">
        <div id="one" class="tab-item">
            <div  class="tab-item__content" >
               <transition name="fade">
                  <div v-if="showTab1">
                     <br>
                     Luonnonkivestä lohkotut kiviportaat luovat sekä ulkoalueille, että sisätiloihin näyttävän, tyylikkään ja arvokkaan yleisilmeen. Porraskivi on kestävää ja sen kunnossapito on vaivatonta. Kiviportaat ovat oiva ratkaisu suomalaisiin sääolosuhteiden ja lämpötilojen vaihteluihin.<br />
                        Graniittia käytetään usein kiviporrasratkaisuissa sen kestävyyden ja tyylikkyyden vuoksi. <br /><br />
                        Kivilaatoituksia käytetään infrarakentamisessa erilaisissa laatoituksissa. Laatoituksia voidaan toteuttaa esimerkiksi rakennusten seiniin, portaisiin ja lattioihin. Luonnonkivet sopivat erinomaisesti myös pihalaatoitukseen. Lattioiden, seinien, ikkunapenkkien ja portaiden laatoituksella saadaan aikaan vaikuttavia kokonaisuuksia.<br><br>
                        <span>Kivipaasi Oy tekee porras- ja laatoitustyöt infrakohteisiin kokeeneesti ja ammattitaitoisesti, jolloin lopputulos on näyttävä, kulutusta hyvin kestävä ja laadukas.</span><br /><br />
                     <img 
                        src="dist/images/capella-infra.jpg"
                        alt="capella-infra"
                     />
                  </div>
               </transition>
            </div>
         </div>
      </div>
      <div v-if="currentTab === 'tab2'">
         <div  class="tab-item">
            <div class="tab-item__content">
               <transition name="fade">
                  <div v-if="showTab2">
                     <br>
                     Muurikivetyksiä käytetään infrarakentamisessa tyypillisesti rajaamaan alueita. Näyttävää kivimuuria käytetään myös maisemointiin ja sillä voidaan pengertää, porrastaa ja reunustaa alueita. Infrarakentamisessa muurikiviä hyödynnetään korkeiden muurien rakentamisessa.<br><br>
                     <span>Kivipaasi Oy toteuttaa infrarakentamisessa kohteeseen sopivia muurikivirakennelmia, jolloin saadaan aikaan vaikuttavia ja kestäviä kokonaisuuksia.</span>
                     <br><br>
                     <img
                        src="dist/images/kivimuurit.jpg"
                        alt="kivimuurit"
                     />
                  </div>
               </transition>
            </div>
         </div>
      </div>
      <div v-if="currentTab === 'tab3'">
         <div id="one" class="tab-item">
            <div class="tab-item__content">
               <transition name="fade">
                  <div v-if="showTab3">
                     <br>
                     Noppa- ja nupukiviä hyödynnetään lähes kaikenlaisessa ympäristörakentamisessa. Ne sopivat mainiosti erilaisten alueiden, kuten torien, aukioiden ja piha-alueiden päällystämiseen. Niitä käytetään paljon myös katurakentamisessa. Noppa- ja nupukivillä voidaan toteuttaa kaunista ja vaihtelevaa kuviointia päällystyspintoihin ympäristöönsä sopivalla tavalla.
                     <br><br>
                     Reunakivetyksellä on monia käyttötarkoituksia. Niillä voidaan luoda esteettisesti kauniita reunuksia, jolloin kohdealue näyttää hoidetulta ja huolitellulta. Se myös tekee helpommaksi esimerkiksi puistoissa istutusalueiden siistimistä ja tukee kivetyksien reuna-alueita.
                     <br><br>
                     <span>Kivipaasi Oy tekee nupu- ja noppakivillä päällystystyöt kaikenlaisiin infrarakentamisen ympäristökohteisiin ja toteuttaa alueisiin sopivia sekä toimivia reunakivetyksiä. Olemme kokeneita ja luotettavia infrarakentamisen ammattilaisia.</span><br><br>
                     <img
                        src="dist/images/koivusaarenmetroasema-infra.jpg"
                        alt="koivusaarenmetroasema-infra"
                     />
                  </div>
               </transition>
              
            </div>
        </div>
      </div>
    </div> 
    <main>
      <div class="kivimyynti">
        <p class="top-name">Talonrakentaminen</p>
        <p class="top-slogan">Talonrakentamisen kivirakennuspalvelut vankkalta ammattilaiselta</p>
        <p>
          Kivipaasi Oy on kivirakentamisen kokenut ammattilainen. Me toimimme talonrakennuksen julkisissa sekä isommissa rakennusliikkeiden projekteissa kivirakentajina. Referenssit-sivulla löydät enemmän tietoja kohteistamme.<br>
         Olemme toimineet pitkään erilaisissa rakennusprojekteissa kivirakentamisen asiantuntijoina ja meillä on kattavat yhteistyöverkostot sekä asiakaslähtöinen työskentelytapa.
        </p>
        <p>
           Me osaamme vaativan kivirakentamisen ja tunnemme kivilajien ominaisuudet sekä soveltuvuudet eri kohteisiin.
        </p>
      </div>
    </main>

    <div class="wrap-tab">
    <tabs
      :tabs="tabs2"
      :currentTab="currentTab2"
      :wrapper-class="'default-tabs'"
      :tab-class="'default-tabs__item'"
      :tab-active-class="'default-tabs__item_active'"
      :line-class="'default-tabs__active-line'"
      @onClick="handleClick2"
    />
    
      <div v-if="currentTab2 === 'tab4'">
        <div id="one" class="tab-item">
            <div class="tab-item__content">
               <transition name="fade">
                  <div v-if="showTab4">
                     <br>
                     Vaatimukset julkisivurakentamisen materiaalien osalta ovat korkeat. Esteettisten tekijöiden lisäksi vaaditaan kestävyyttä ja laadukasta toteutustapaa.
                     <br><br>
                     Julkisivumateriaalilta odotetaan säänkestävyyttä niin teknisiltä, rakenteellisilta kuin visuaalisilta ominaisuuksiltaan. Kohteeseen ja sen käyttötarkoitukseen oikea ja parhaiten soveltuva kivilaji kestää sääolosuhteet, on pitkäikäinen ja suojaa rakennusta useita vuosikymmeniä.
                     <br><br>
                     <span>Kivipaasi Oy on kokenut kivijulkisivujen rakentaja, joka tuntee kivimateriaalit ja osaa löytää asiakkaillensa parhaat ratkaisut rakennuskohteisiin.</span><br><br>
                     <img 
                        src="dist/images/koivusaarenmetroasema.jpg"
                        alt="koivusaarenmetroasema"
                     />
                  </div>
               </transition>
            </div>
        </div>
      </div>
      <div v-if="currentTab2 === 'tab5'">
        <div id="one" class="tab-item">
            <div class="tab-item__content">
               <transition name="fade">
                  <div v-if="showTab5">
                     <br>
                     Lattia- ja seinämateriaalin valinta julkisten tilojen sisustusmateriaaleissa on tärkeää, koska materiaalit joutuvat kovalle kulutukselle. Niiden puhtaanapito, kestävyys ja pitkäikäisyys ovat lattiamateriaalille asetettavia vaatimuksia. Luonnonkivi on usein kohteissa käytettävä materiaali kulutuskestävyytensä vuoksi.<br /><br />
                     Kivimateriaalien pintakäsittely vaikuttaa myös pintojen käyttösopivuuteen, puhtaanapitoon ja estetiikkaan. Hiottu kivi sopii usein parhaiten lattiapintoihin ja portaisiin. Kivi soveltuu käytettäväksi yhdistettynä muihin materiaaleihin, kuten lasiin, teräkseen tai puuhun.
                     <br /><br />
                     <span>Kivipaasi Oy:llä on vuosien kokemus laadukkaiden, kovaa kulutusta kestävien kivilattiapintojen rakentamisesta. Me tunnemme kivimateriaalit ja osaamme suositella parasta ratkaisua asiakkaillemme.</span>
                     <br><br>
                  <img 
                     src="dist/images/koivusaarenmetroasema.jpg"
                     alt="koivusaarenmetroasema"
                  />
                  </div>
               </transition>
            </div>
        </div>
      </div>
      <div v-if="currentTab2 === 'tab6'">
        <div id="one" class="tab-item">
            <div class="tab-item__content">
               <transition name="fade">
                  <div v-if="showTab6">
                     <br>
                     Sokkelirakentamisessa voidaan nykyaikanakin käyttää kivilajeja esimerkiksi sokkelin verhoilun avulla. Kiviverhoilulla saadaan näyttävä lopputulos, joka sopii rakennuksen tyyliin. Kun halutaan jäljitellä vanhaa, sopii lohkograniitti erinomaisesti tähän käyttötarkoitukseen. Kivillä saadaan aikaan persoonallisia ja visuaalisesti hienoja sokkelikiveyksiä..<br /><br />
                     <span>Kivipaasi Oy:n ammattiosaajat toteuttavat laadukkaita sokkeliratkaisuja.</span>
                     <br><br>
                     <img 
                        src="dist/images/muistomuuri.jpg"
                        alt="muistomuuri"
                     />
                  </div>
               </transition>
            </div>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import Tabs from "vue-tabs-with-active-line";

export default {
   components: {
      Tabs,
   },
   data: () => ({
      tabs: [
         { title: "KIVIPORTAT ja<br>LAATOITUKSET", value: "tab1" },
         { title: "KIVIMUURIT", value: "tab2" },
         { title: "NOPPA- ja NUPUKIVEYKSET<br>REUNAKIVET", value: "tab3" },
      ],
      tabs2: [
         { title: "JULKISIVU<br>RAKENTAMINEN", value: "tab4" },
         { title: "LATTIAT", value: "tab5" },
         { title: "SOKKELIT", value: "tab6" },
      ],
      currentTab: "tab1",
      currentTab2: "tab4",
      showTab1: true,
      showTab2: false,
      showTab3: false,
      showTab4: true,
      showTab5: false,
      showTab6: false,
   }),
   methods: {
      handleClick(newTab) {
         this.currentTab = newTab;
         this.showTab1 = false;
         this.showTab2 = false;
         this.showTab3 = false;
         setTimeout(() => this.dellay(), 100);
      },
      handleClick2(newTab2) {
         this.currentTab2 = newTab2;
         this.showTab4 = false;
         this.showTab5 = false;
         this.showTab6 = false;
         setTimeout(() => this.dellay2(), 100);
      },
      dellay() {
         this.showTab1 = !this.showTab1;
         this.showTab2 = !this.showTab2;
         this.showTab3 = !this.showTab3;
      },
      dellay2() {
         this.showTab4 = !this.showTab4;
         this.showTab5 = !this.showTab5;
         this.showTab6 = !this.showTab6;
         }
   },
};
</script>

<style lang="scss">
.wrap-tab {
    max-width: 900px;
    margin: 0 auto;
    .tabs {
      max-width: 900px;
      height: 90px;
      margin: 0 auto;
      list-style: none;
      overflow: hidden;
      padding-left: 6%;
      @media ( max-width: 500px) {
         padding-left: 1%;
      }
    }
}
.tab-item {
    max-width: 900px;
    min-height: 600px;
    margin: 0 auto 100px auto;
    background: #C4C4C4;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 30%) 0px 2px 5px, rgb(0 0 0 / 40%) 0px 2px 4px;
    transition: 0.2s;
    position: relative;
    @media (max-width: 800px) {
        min-height: 500px;
      }
    &__content {
      max-width: 700px;
      font-family: "Roboto", sans-serif;
      padding: 10px 0px;
      color: #26110A;
      line-height: 26px;
      font-size: 16px;
      margin: 0 auto;
      transition: 0.2s;
      @media (max-width: 740px) {
        margin: 0 5px;
      }
      img {
         width: 100%;
         height: auto;
         margin-bottom: 20px;
      }
      span {
         color:#75223C;
         font-weight: 700;
      }
    }
}
.default-tabs {
  position: relative;
  margin: 0 auto;
  transition: 0.2s;
  &__item {
      position: relative;
      display: inline-block;
      float: left;
      width: 30%;
      height: 64px;
      margin-top: 34px;
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      font-weight: 700;
      text-align: center;
      text-decoration: none;
      color: #F1F1F1;
      background: #736356;
      box-shadow: 8px 12px 15px 2px rgb(0 0 0 / 60%);
      border: 0px solid #000000;
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      transition: all 0.2s ease;
      @media (max-width: 500px) {
         width: 32%;
         font-size: 14px;
         box-shadow: 8px 12px 15px 2px rgb(0 0 0 / 30%);
      }
      @media (max-width: 400px) {
         font-size: 12px;
      }
    &:hover {
      margin: 26px 0 0 0;
    }
    &_active {
        margin: 26px 0 0 0;
        padding: 10px 0 10px 0;
        background: #C4C4C4;
        color: #26110A;
        z-index: 4;
        outline: none;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }
    &_active:hover {
       margin: 26px 0 0 0;
    }
    
  }
}
.content {
  margin-top: 30px;
  font-size: 20px;
  transition: 0.2s;
}

.fade-enter-active, .fade-leave-active {
   transition-duration: 400ms;
  transition-property: opacity, transform;
  transition-timing-function: cubic-bezier(.97,.38,.69,.94); 
//   transition:  .5s;
}
.fade-enter, .fade-leave-to {
   opacity: 0;
   transform: scale(0.94);
}

</style>