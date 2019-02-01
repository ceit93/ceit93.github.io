<template>
  <v-toolbar fixed app color="primary" dark>
    <v-btn :to="'/'" nuxt icon class="user-button" style="margin-left: 20px">
      <v-avatar
        :tile="true"
        :size="50">
        <img src="/icon.png" alt="بهترین وب‌اپلیکیشن فارغ‌التحصیلی">
      </v-avatar>
    </v-btn>
    <v-toolbar-title class="title iransharp">فارغ‌التحصیلی ۹۳</v-toolbar-title>
    <v-spacer></v-spacer>
    <!--<v-toolbar-items class="hidden-sm-and-down">-->
      <!--<v-btn flat v-for="item in items" :class="item.color" style="border-radius: 0px" :to="item.to" exact :key="item.title">{{item.title}}</v-btn>-->
    <!--</v-toolbar-items>-->
  </v-toolbar>
</template>

<script>
  export default {
    name: 'TopHeader',
    data () {
      return {
        // items: [
          // { icon: 'mdi-message-text', title: 'آمار', to: '/visualization'},
          // { icon: 'mdi-alert-octagon', title: 'اطلاع‌رسانی', to: '/news'},
          // { icon: 'mdi-account', title: 'پروفایل', to: '/profile'},
//          { icon: 'mdi-account-plus', title: 'ثبت‌نام جشن', to: '/register',color:'green darken-1'},
//           { icon: 'mdi-exit-to-app', title: 'خروج', to: '/logout'},
//         ]
      }
    },
  }
</script>

<style scoped>
  .title {
    overflow: visible;
    font-family: Iran, sans-serif !important;
  }
  .user-avatar {
    width: 45px;
  }
  .user-button {
    margin-left: 20px;
    margin-right: 20px;
  }
  .register{
    background-color: green!important;
  }
</style>
