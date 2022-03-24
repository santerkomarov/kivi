<template>
   <div class="kivimyynti">
      <p>Kivimyynti</p>
      <app-tabs class="" :tabList="tabList">
      <template v-slot:tabPanel-1> Content 1 
         <img src="dist/images/capella2.jpg" alt="">
      </template>
      <template v-slot:tabPanel-2> Content 2 </template>
      <template v-slot:tabPanel-3> Content 3 </template>
      <template v-slot:tabPanel-4> Content 4 </template>
    </app-tabs>
   </div>
</template>

<script>
   import AppTabs from "./AppTabs";

export default {
  components: {
    AppTabs,
  },
  data() {
    return {
      tabList: ["Tab 1", "Tab 2", "Tab 3", "Tab 4"],
    };
  },
};
</script>

<style scoped>  
   .kivimyynti {
      padding-top: 30px;
   }
</style>