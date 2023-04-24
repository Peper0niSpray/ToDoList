import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        secondary: '#E5E82E', 
        accent: '#E5E82E', 
        primary: '#E5E82E',
        error: '#E8605D',
        info: '#fff',
        success: '#9A9C27',
        warning: '#E8605D',

      },
    },
  },
});

