<template>
  <v-content>
    <v-container>
      <v-layout row wrap align-center justify-center class="mb-3">
        <v-flex xs11 class="text-xs-center">
          <h1 class="iranblack blue--text text--darken-3">جامعه دانش‌آموختگان ورودی سال ۱۳۹۳</h1>
          <h2 class="iranblack">دانشکده مهندسی کامپیوتر و فناوری اطلاعات</h2>
          <h3 class="iranblack">دانشگاه صنعتی امیرکبیر (پلی‌تکنیک تهران)</h3>
        </v-flex>
      </v-layout>
      <v-layout row wrap align-center justify-center>
        <!--<v-flex xs6 sm4 md3 lg2 v-for="(item, index) in studentsArray" :key="index">-->
          <!--<div class="text-xs-center no-underline">-->
            <!--<nuxt-link :to="'/' + item.username">-->
              <!--<v-avatar size="80%">-->
                <!--<img-->
                  <!--class="elevation-7 mb-1"-->
                  <!--width="100%"-->
                  <!--:src="$helper.avatar(item)">-->
              <!--</v-avatar>-->
              <!--<h3 class="iranblack light-blue&#45;&#45;text text&#45;&#45;darken-3">{{$persianJS.userName(item)}}</h3>-->
              <!--<p class="iranblack caption text-xs-center grey&#45;&#45;text pt-1 pb-3">{{$persianJS.englishNumber(item.std_numbers)}}</p>-->
            <!--</nuxt-link>-->
          <!--</div>-->
        <!--</v-flex>-->
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {

}
</script>
