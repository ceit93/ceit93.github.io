<template>
  <v-content>
    <v-container>
      <v-layout row wrap class="text-xs-center">
        <v-flex xs12 md3>
          <div class="text-xs-center">
            <v-avatar tile size="95%">
              <img
                class="elevation-5 mb-1"
                :src="this.$helper.avatar(user)">
            </v-avatar>
            <h1 class="iranblack light-blue--text text--darken-3 mt-2">{{this.$persianJS.userName(user)}}</h1>
            <div class="iranblack text-xs-center pt-2">{{this.$persianJS.englishNumber(user.std_numbers)}}</div>
            <div class="iranblack text-xs-center pb-3"><a :href="`mailto:${user.email}`" target="_blank">{{user.email}}</a> </div>
            <div class="pb-5">
              <span class="caption">عنو‌ان‌های برتر:</span>
              <div class="light-blue--text" v-for="(tarin, index) in user.topTarin.topTarins" :key="index"
                   v-bind:style="{fontSize: 25-2*index + 'px' }">
                #{{tarin.name}}
              </div>
            </div>
            <div v-for="interview in user.interviews" v-if="$helper.isValid(interview.answer)" :key="interview._id" class="text-xs-right mr-3">
              <span class="caption iranblack text-xs-center blue-grey--text">{{interview.question.text}}؟</span>&nbsp;
              <span class="caption blue-grey--text text--darken-4">{{interview.answer}}</span>
            </div>
          </div>
        </v-flex>
        <v-flex xs12 md9>
          <div v-for="post in user.posts" :key="post._id">
            <post
              v-if="post.approved"
              :postData="post"
              :belongsToLoggedInUser="false"
              :showControls="false">
            </post>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import Post from '@/components/Post.vue'
export default {
  name: "slug",
  components: {Post},
  async asyncData(context) {
    let username = context.params.slug
    return context.$axios.get('/people/'+username+'.json')
      .then((res) => {
        return {user: res.data}
      }).catch(e => {
        context.error({statusCode: 404, message: e})
      })
  },
}
</script>

<style scoped>

</style>
