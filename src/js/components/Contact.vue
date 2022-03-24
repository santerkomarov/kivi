<template>
  <div>
    <main>
      <div class="kivimyynti">
        <p class="top-name">OTA YHTIÖTTÄ</p>
        <span
          >Kivipaasi Oy tarjoaa kivimyynti- ja asennuspalveluita sekä infra- ja
          talonrakennuksen kivirakentamisen palveluita etupäässä
          rakennusliikkeille ja julkisille toimijoille.<br /><br />
          Ota yhteyttä ja pyydä kivityötarjous meiltä!</span
        >
      </div>
      <div class="johtajuutta-wrap">
        <div class="johtajuutta">
          <div class="johtajuutta-name">Ari Mikkola</div>
          <div class="johtajuutta-asentoon">
            <p>Tarjouspyynnöt, urakkalaskenta</p>
            <p>Puh.050 3898008</p>
            <p>ari.mikkola@kivipaasi.fi</p>
          </div>
        </div>

        <div class="johtajuutta">
          <div class="johtajuutta-name">Jarkko Kumpumäki</div>
          <div class="johtajuutta-asentoon">
            <p>Työnjohto</p>
            <p>Puh.040 7340 637</p>
            <p>jarkko.kumpumaki@kivipaasi.fi</p>
          </div>
        </div>

        <div class="johtajuutta">
          <div class="johtajuutta-name">Kari Parviainen</div>
          <div class="johtajuutta-asentoon">
            <p>Työnjohto</p>
            <p>Puh.050 4414 100</p>
            <p>kari.parviainen@kivipaasi.fi</p>
          </div>
        </div>
      </div>

      <div class="wrap-yhtiotta">
        <div class="container">
          <div class="form">
            <p>Lähetä tiedustelu</p>
            <div class="radiobutton">
              <div class="radiobutton-simple">
                <input
                  v-model="showBusinessPanel"
                  @click="showB = !showB"
                  type="radio"
                  id="simple2"
                  name="b"
                  value="hidden"
                />
                <label for="simple2">Yksinkertainen</label>
              </div>
              <div class="radiobutton-request">
                <input
                  v-model="showBusinessPanel"
                  @click="showB = !showB"
                  type="radio"
                  id="request2"
                  name="b"
                  value="display"
                />
                <label for="request2">Yrityspyyntö</label>
              </div>
            </div>
            <div class="top">
              <div class="top-block">
                <span id="yritys-tip">Yritys</span>
                <input
                  v-model="yritys"
                  class="top-input"
                  id="yritys"
                  name="yritys"
                  type="text"
                  maxlength="35"
                  placeholder="Yrityksen nimi"
                  onfocus="this.placeholder=''"
                  onblur="this.placeholder='Yrityksen nimi'"
                />
                <span v-if="virhe['yritys']" class="input-error">{{
                  virhe["yritys"]
                }}</span>
              </div>
              <div class="top-block">
                <span id="nimi-tip">Nimi</span>
                <input
                  v-model="nimi"
                  name="nimi"
                  class="top-input"
                  id="nimi"
                  type="text"
                  maxlength="35"
                  placeholder="Yhteyshenkilö"
                  onfocus="this.placeholder=''"
                  onblur="this.placeholder='Yhteyshenkilö'"
                />
                <span v-if="virhe['nimi']" class="input-error">{{
                  virhe["nimi"]
                }}</span>
              </div>
              <div class="top-block">
                <span id="sahkoposti-tip">Sähköposti</span>
                <input
                  v-model="sahkoposti"
                  class="top-input"
                  id="sahkoposti"
                  type="text"
                  maxlength="60"
                  placeholder="Sähköposti"
                  onfocus="this.placeholder=''"
                  onblur="this.placeholder='Sähköposti'"
                />
                <span v-if="virhe['sahkoposti']" class="input-error">{{
                  virhe["sahkoposti"]
                }}</span>
              </div>
              <div class="top-block">
                <span id="puh-tip">Puhelin</span>
                <input
                  v-model="puhelin"
                  class="top-input"
                  id="puhelin"
                  type="text"
                  maxlength="16"
                  placeholder="Puhelin 	numero"
                  onfocus="this.placeholder=''"
                  onblur="this.placeholder='Puhelin numero'"
                />
                <span v-if="virhe['puhelin']" class="input-error">{{
                  virhe["puhelin"]
                }}</span>
              </div>
            </div>

            <transition name="showB">
              <div class="business" v-if="showB" id="business">
                <div class="business-select">
                  <span class="business-option" id="b"
                    >Tarvittavat palvelut</span
                  >
                  <div class="select">
                    <select v-model="service" name="slctt1" id="service">
                      <option value="-" disabled selected hidden>
                        Valita palvelut
                      </option>
                      <option value="Kivimyynti">Kivimyynti</option>
                      <option value="Kiviasennus">Kiviasennus</option>
                      <option value="Infrarakentaminen">
                        Infrarakentaminen
                      </option>
                      <option value="Talonrakentaminen">
                        Talonrakentaminen
                      </option>
                      <option value="Muut">Muut</option>
                    </select>
                  </div>
                </div>

                <div class="business-select">
                  <span class="business-option">Valita budjetti</span>
                  <div class="select">
                    <select v-model="budjet" name="slct2" id="budjet">
                      <option value="-" disabled selected hidden>&euro;</option>
                      <option value="1000 - 3000 euro">
                        1000 - 3000 &euro;
                      </option>
                      <option value="3000 - 6000 euro">
                        3000 - 6000 &euro;
                      </option>
                      <option value="6000 - 12000 euro">
                        6000 - 12000 &euro;
                      </option>
                      <option value="> 12000 euro">> 12000 &euro;</option>
                    </select>
                  </div>
                </div>
              </div>
            </transition>

            <div class="bottom">
              <div class="bottom-text-btn">
                <textarea
                  v-model="viesti"
                  name="viesti"
                  id="viesti"
                  cols="30"
                  rows="10"
                  placeholder="Viesti"
                  onfocus="this.placeholder=''"
                  onblur="this.placeholder='Viesti'"
                ></textarea>
                <span v-if="virhe['viesti']" class="textarea-error">{{
                  virhe["viesti"]
                }}</span>
              </div>
              <div class="bottom-spam">
                <div class="bottom-spam-wrap">
                  <div class="__sending" v-bind:style="{ visibility: v, height: h}"  id="sending">
                    <img
                      src="dist/images/clock3.gif"
                      width="80"
                      height="80"
                      alt="loader_clock"
                    />
                  </div>
                  <div class="bottom-protection-wrap">
                    <label for="randomCheck">Roska sujoa</label>
                    <span id="randomInput">{{ random }}</span>
                    <input
                      v-model="inputRandom"
                      id="randomCheck"
                      class="bottom-protection"
                      v-bind:class="{ randomError: isActiveError }"
                      type="text"
                      placeholder="Kirjoittaa numero"
                      onfocus="this.placeholder=''"
                      onblur="this.placeholder='Kirjoittaa numero'"
                    />
                  </div>
                </div>
                <button @click="validateForm" id="sendButton">LÄHETÄ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <transition name="final-report">
      <div id="modal" v-if="showM" class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <div @click="closeM" class="closeModal">×</div>
          </div>
          <div class="modal-body">
            <p>HUOM! Tämä vain simuloida viestin lähettämistä</p>
            <ul class="report-ul">
              <li>
                Yrityksen nimi: <span>{{ yritys }}</span>
              </li>
              <li>
                Yhteyshenkilö: <span>{{ nimi }}</span>
              </li>
              <li>
                Sähköposti: <span>{{ sahkoposti }}</span>
              </li>
              <li>
                Puhelin: <span>{{ puhelin }}</span>
              </li>
              <li>
                Tarvittavat palvelut: <span>{{ service }}</span>
              </li>
              <li>
                Budjetti: <span>{{ budjet }}</span>
              </li>
            </ul>
            <span class="report-head-textarea">Viesti</span>
            <p>{{ viesti }}</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errors: 0,
      isActiveError: false,
      v: "hidden", // sending clock visibility 
      h: "0", // sending clock height
      virhe: {
        yritys: null,
        nimi: null,
        sahkoposti: null,
        puhelin: null,
        viesti: null,
      },
      yritys: null,
      nimi: null,
      sahkoposti: null,
      puhelin: null,
      viesti: null,
      service: null,
      budjet: null,
      strNumError: null,
      random: 0,
      inputRandom: null,
      isActive: false,
      showBusinessPanel: "hidden",
      showB: false,
      showM: false,
    };
  },
  mounted() {
    // generate random Integer between min & max
    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    this.random = randomIntFromInterval(100, 900);
  },
  methods: {
    checkEmail(e) {
      var emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (e.match(emailRegExp)) {
        if (e.length < 8 || e.length > 60) {
          return `sähköposti on väärä`;
        }
        return false;
      }
      return "sähköposti on virheellinen";
    },
    checkPhone(p) {
      var phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]{9,15}$/g;
      if (p.match(phoneRegExp)) {
        return false;
      }
      return `puhelin on väärä`;
    },
    checkStringNumber(x) {
      this.strNumError = null;
      var stringNumber = /^[0-9a-zA-ZäÄöÖ\s]+$/;
      if (x.match(stringNumber)) {
        if (x.length < 3 || x.length > 10) {
          return ` lyhyt tai pitka`;
        }
        return "";
      }
      return `vain kirjaimia ja numeroita`;
    },
    checkTextArea(t) {
      if (t.length < 5) {
        return "Riittääkö tämä?";
      }
      if (t.length > 2000) {
        return "2000 merkin rajoitus";
      }
      return false;
    },
    // check random
    checkRandom() {
      if (this.random == this.inputRandom) {
        return true;
      }
      return false;
    },
    validateForm() {
      this.errors = 0;
      this.virhe = {
        yritys: this.yritys,
        nimi: this.nimi,
        sahkoposti: this.sahkoposti,
        puhelin: this.puhelin,
        viesti: this.viesti,
      };
      Object.keys(this.virhe).forEach((key) => {
        if (this.virhe[key]) {
          if (key == "viesti") {
            this.virhe["viesti"] = this.checkTextArea(this.virhe["viesti"]);
          } else if (key == "sahkoposti") {
            this.virhe["sahkoposti"] = this.checkEmail(
              this.virhe["sahkoposti"]
            );
          } else if (key == "puhelin") {
            this.virhe["puhelin"] = this.checkPhone(this.virhe["puhelin"]);
          } else {
            this.virhe[key] = this.checkStringNumber(this.virhe[key]);
          }
        } else {
          this.virhe[key] = "rivi on tuhja";
          this.errors += 1;
        }
      });
      if (this.errors == 0 && this.checkRandom()) {
         // turn on sending immitation
         this.v = "visible";
         this.h = "100%";
         setTimeout(() => this.afterCheckingInputs(), 1000);
      } else if ( this.checkRandom() ) {
         this.isActiveError = false; // input is the same as random number, so red border is hidden
      }  else {
        this.showM = false;
        this.isActiveError = true;
      }
   },
   afterCheckingInputs() {
      this.isActiveError = false;
      this.showM = true;
    },
    closeM() {
      this.showM = false; // close modal
      // reset form inputs
      this.yritys = null;
      this.nimi = null;
      this.sahkoposti = null;
      this.puhelin = null;
      this.viesti = null;
      this.service = null;
      this.budjet = null;
      // hide sending immitation
      this.v = "hidden";
      this.h = "0";
    },
  },
};
</script>

<style>
.input-error {
  position: absolute;
  bottom: 10px;
  left: 30px;
  color: red;
}
@media ( max-width: 700px) {
   .input-error {
      bottom: 0;
      left: 18px;
   }
}
.textarea-error {
  position: absolute;
  z-index: 2;
  top: 30px;
  left: 24%;
  color: red;
}
.randomError {
   border: 2px solid red;
}
.hideLoader {
   visibility: visible;
   height: 100%;
}

.showB-enter-active,
.showB-leave-active {
  transition: all 0.4s ease;
}

.showB-enter,
.showB-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
.final-report-enter-active,
.final-report-leave-active {
  transition: all 0.4s ease;
}

.final-report-enter,
.final-report-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  height: 100%;
  display: block;
  /* Скрыто по умолчанию */
  background-color: rgba(0, 0, 0, 0.8);
  /* Полупрозрачное затемнение */
  z-index: 9000;
  /* Фон на нижнем слое */
  overflow: auto;
  /* При необходимости, то появиться прокрутка */
}
.modal .modal-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 500px;
  height: 500px;
  color: white;
  margin: 150px auto 0 auto;
  border: 2px solid #fff;
  background-color: #75223c;
  animation-name: animate;
  animation-duration: 0.5s;
}
@media (max-width: 700px) {
  .modal .modal-content {
    margin: 50px auto 0 auto;
    height: 600px;
  }
}
.modal .modal-content .modal-header {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.modal .modal-content .closeModal {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}
.modal .modal-content .closeModal:hover {
  transform-origin: center;
  transform: rotate(90deg);
  color: #c4c4c4;
}
.modal .modal-content .close:hover {
  color: #ffe6e6;
}
.modal .modal-content .modal-body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.modal .modal-content .modal-body p {
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}
.modal .modal-content .modal-body #report-viesti {
  font-size: 14px;
}
.modal .modal-content .modal-body .report-ul li {
  font-size: 14px;
  color: #c4c4c4;
  margin-bottom: 10px;
}
.modal .modal-content .modal-body .report-ul li span {
  color: #fff;
  padding: 15px;
}
.modal .modal-content .modal-body .report-head-textarea {
  color: #c4c4c4;
  padding: 10px;
}
</style>