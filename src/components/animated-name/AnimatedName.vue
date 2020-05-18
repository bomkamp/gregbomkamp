<template>
  <div class="name-animation">
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

.name-animation
  margin: 0px;
  position: relative;
  height: 100px;
  width: 800px;
  display: block;
  margin: auto;

.overlay
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
</style>
