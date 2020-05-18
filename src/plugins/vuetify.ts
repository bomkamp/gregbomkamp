import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        // primary: Colors.blue.lighten3,
        // accent: Colors.lightBlue.accent1,
        // secondary: Colors.blue.darken2,
        background: "#011932",
      },
    },
  },
});
