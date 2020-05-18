<template>
  <Constellations class="svg-background" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Constellations from "@/assets/images/constellations-pattern.svg?inline";

@Component({
  components: {
    Constellations,
  },
})
export default class ConnectingConstellations extends Vue {}
</script>

<style lang="stylus">

#lines
  stroke-dasharray: 10000;
  animation: drawlines 5s infinite alternate;
  stroke-opacity: .4;
  // animation-delay: -7.5s;

#bullets
  opacity: .4;
  animation: disappear 5s infinite ease-in alternate-reverse;
  animation-delay: -5s;

.svg-background
  position: absolute;
  height: 100%;
  width: 100%;

@keyframes disappear
  to
    opacity: 0;

@keyframes drawlines
  to
    stroke-dashoffset: 10000;
</style>
