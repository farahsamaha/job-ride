import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#880E4',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c'
      },
      dark: {
        primary: colors.grey.darken4,
        background: colors.grey.darken3,
        info: colors.teal.lighten1
      }
    }
  }
})
