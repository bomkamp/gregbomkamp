<template>
  <v-container class="home-container" fill-height>
    <v-row align="center" justify="center">
      <v-col>
        <div class="title-banner">
          <AnimatedName class="animated-name" />
          <div class="banner-contact">
            <a href="https://github.com/bomkamp/gregbomkamp" target="_blank"
              ><GitHubIcon class="banner-icon"
            /></a>
            <a href="https://www.instagram.com/voidgreg/" target="_blank"
              ><InstragramIcon class="banner-icon"
            /></a>
            <a
              href="https://open.spotify.com/user/1225786075?si=cVX0fj-EQE-4n8tPBYSUtA"
              target="_blank"
              ><SpotifyIcon class="banner-icon"
            /></a>
            <a><EmailIcon @click="openMail" class="banner-icon" /></a>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AnimatedName from "@/components/animated-name/AnimatedName.vue";
import GitHubIcon from "@/assets/images/github.svg?inline";
import InstragramIcon from "@/assets/images/instagram.svg?inline";
import EmailIcon from "@/assets/images/paper-plane.svg?inline";
import SpotifyIcon from "@/assets/images/spotify.svg?inline";

@Component({
  components: {
    AnimatedName,
    GitHubIcon,
    EmailIcon,
    SpotifyIcon,
    InstragramIcon,
  },
})
export default class Home extends Vue {
  // May as well protect my email from any simple scraper
  private openMail(): void {
    window.open(
      `mailto:${atob("Z3JlZ29yeS5ib21rYW1wQGdtYWlsLmNvbQ==")}`,
      "_blank"
    );
  }
}
</script>

<style lang="stylus">
.animated-name
  margin-bottom: .2vh;

.banner-contact
  margin: 0 10%;

.title-banner
  text-align: center;
  margin-bottom: 40px;

.banner-icon
  width: 50px;
  height: 50px;
  margin: 30px;

  vertical-align: align-self auto;

.banner-icon path
  stroke: white;
  fill: white;

.container
  height: 100%;
  width: 100%;
</style>
