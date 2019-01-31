import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

Vue.use(Vuetify, {
  rtl: true,
  iconfont: 'fa',
  theme: {
    primary: colors.lightBlue.darken4, // a color that is not in the material colors palette
    bottom: colors.lightBlue.darken3
    // accent: colors.grey.darken3,
    // secondary: colors.amber.darken3,
    // info: colors.teal.lighten1,
    // warning: colors.amber.base,
    // error: colors.deepOrange.accent4,
    // success: colors.green.accent3
  }
})
