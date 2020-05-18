<template>
  <div id="app">
    <ConnectingConstellations />
    <v-app>
      <v-content>
        <v-container fluid fill-height>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ConnectingConstellations from "@/components/animated-background/connecting-constellations/ConnectingConstellations.vue";

@Component({
  components: {
    ConnectingConstellations,
  },
})
export default class App extends Vue {}
</script>

<style lang="stylus">
@import '~@/assets/styles/theme.styl';

// TODO: CLeanup and pull background animation out to a new component.
// TODO: Add mouse interactions

html, body
  height: 100%;
  width: 100%;

#app
  background-color: var(--v-background-base) !important;
  background: linear-gradient(174deg, rgba(24,16,75,1) 0%, rgba(57,39,89,1) 54%, rgba(68,0,78,1) 100%);
  box-shadow: inset 0 0 0 1000000px rgba(0,0,0,.2);
</style>
