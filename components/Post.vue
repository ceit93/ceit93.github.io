<template>
  <div class="mb-3">
    <v-card class="elevation-5">
      <v-card-title primary-title>
        <v-dialog v-model="dialog2" max-width="40vw">
          <v-btn icon slot="activator">
            <v-avatar :size="50" class="elevation-2">
              <img :src="this.$helper.avatar(postData.user)"
                   :alt="this.$persianJS.userName(postData.user)">
            </v-avatar>
          </v-btn>
          <v-card>
            <v-card-media :src="this.$helper.avatar(postData.user)" height="40vw">
              <v-layout column class="media">
                <v-card-title>
                  <v-btn dark icon @click.native="dialog2 = false">
                    <v-icon color="info">chevron_right</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn dark icon class="mr-3" nuxt :to="postData.user ? postData.user.username : 'undefined'">
                    <v-icon color="info">account_circle</v-icon>
                  </v-btn>
                </v-card-title>
                <v-spacer></v-spacer>
                <v-card-actions class="text-xs-center hidden-xs-only justify-content-center">
                  <h1 class="text-xs-center blue--text iranblack">{{this.$persianJS.userName(postData.user)}}</h1>
                </v-card-actions>
              </v-layout>
            </v-card-media>
          </v-card>
        </v-dialog>
        <h1 class="mr-2 iranblack">{{postData.title}}</h1>
        <v-spacer></v-spacer>

      </v-card-title>
      <v-divider/>
      <img v-if="postData.image"
           :src="postData.image"
           class="ceit-post-image">
      <v-card-text>
        <div style="text-align:justify;" class="pa-2">
          <span class="iranblack">{{this.$persianJS.userName(postData.user)}}:</span>
          <div style="white-space: pre-line;">{{postData.body}}</div>
        </div>
      </v-card-text>
      <div style="clear: both"></div>
    </v-card>

  </div>
</template>

<script>
  export default {
    props: ['postData', 'belongsToLoggedInUser', 'showControls'],
    name: "Post",
    data(){
      return {
        dialog: false,
        dialog2: false
      }
    },
    computed: {
      username() {
          return 'کاربر ناشناس'
      },
      canDelete() {
        return this.showControls && (this.postData.user.username === this.$auth.user.username)
      },
      canApprove() {
        return this.showControls && (!this.postData.approved && this.belongsToLoggedInUser)
      },
      canDisapprove() {
        return this.showControls && (this.postData.approved && this.belongsToLoggedInUser)
      }
    },
    notifications: {
      showError: {
        title: 'خطا',
        message: 'خطایی رخ داد...',
        type: 'error'
      },
      showApprovingSuccess: {
        title: 'انجام شد',
        message: 'دل‌نوشته روی دیوار شما نمایش داده می‌شود.',
        type: 'success'
      },
      showDisapprovingSuccess: {
        title: 'انجام شد',
        message: 'دل‌نوشته روی دیوار شما نمایش داده نمی‌شود.',
        type: 'success'
      },
      showDeletingSuccess: {
        title: 'انجام شد',
        message: 'دل‌نوشته مورد نظر حذف شد.',
        type: 'success'
      }
    },
    methods: {
      deletePost() {
        if (this.canDelete){
          if (this.postData.user.username === this.$auth.user.username) {
            if (window.confirm("آیا مطمئن هستید؟")) {
              this.$axios.delete('/posts/' + this.postData._id)
                .then(e => {
                  this.showDeletingSuccess()
                  this.$emit('deleted')
                }).catch(e => {
                this.showError()
                console.log(e)
              })

            }
          }
        }
      },
      async approvePost() {
        if (this.canApprove) {
          this.$axios.post('/posts/' + this.postData._id, {data: {approved: true}})
            .then(e => {
              this.showApprovingSuccess()
              this.$emit('approved')
            }).catch(e => {
            this.showError()
            console.log(e)
          })
        }
      },
      dissaprovePost() {
        if (this.canDisapprove){
          this.$axios.post('/posts/' + this.postData._id, {data: {approved: false}})
            .then(e => {
              this.showDisapprovingSuccess()
              this.$emit('disapproved')
            }).catch(e => {
            this.showError()
            console.log(e)
          })
        }
      }
    },
  }
</script>

<style scoped>
  @media (max-width: 768px) {
    .ceit-post-image {
      width: 100%;
      float: none;
      margin: 0;
      padding: 10px;
    }
  }

  @media (min-width: 768px) {
    .ceit-post-image {
      width: 400px;
      float: left;
      padding: 16px;
    }
  }
</style>
