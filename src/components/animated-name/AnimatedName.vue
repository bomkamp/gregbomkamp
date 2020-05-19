<template>
  <div class="name-animation-container">
    <GregBomkampSVG class="name-svg over overlay"></GregBomkampSVG>
    <GregBomkampSVG class="name-svg under overlay"></GregBomkampSVG>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GregBomkampSVG from "@/assets/images/gregbomkamp.svg?inline";

@Component({
  components: {
    GregBomkampSVG,
  },
})
export default class AnimatedName extends Vue {}
</script>

<style lang="stylus">
@import './split-colors.styl';

.name-animation-container
  margin: 0px;
  display: block;
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100px;

.overlay
  margin-left: 15%;
  margin-right: 15%;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;

.over
  z-index: 9;
</style>
