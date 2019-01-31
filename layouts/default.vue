<template>
  <v-app app>
    <top-header></top-header>
    <v-content>
      <v-container fluid full-height>
          <nuxt/>
      </v-container>
    </v-content>
    <bottom-footer></bottom-footer>
  </v-app>
</template>

<script>
  import persianJs from 'persianjs';
  import TopHeader from "~/components/TopHeader";
  import BottomFooter from "../components/BottomFooter";
  export default {
    components: {BottomFooter, TopHeader},
    data() {
      return {
        actions: [
          {name: 'profile', icon:'home', to: '/profile', color: 'success', dark: true},
          {name: 'wall', icon:'mdi-account-card-details', to: '/content/wall/', color: 'purple', dark: true},
          // {name: 'register', icon:'mdi-account-plus', to: '/register', color: 'indigo', dark: true}, // TODO: uncomment this line
        ]
      }
    },
    methods: {
      makeParsi(num) {
        return persianJs(num).englishNumber().toString();
      }
    },
  }
</script>

<style>
</style>
