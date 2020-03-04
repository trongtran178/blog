<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" fixed app dark>
      <!-- avatar card -->
      <v-card
        align="center"
        height="30%"
        width="100%"
        img="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      >
        <v-avatar style="border-radius: 100%;" class="mt-2" width="120px" height="120px">
          <img src="/images/my-avatar.png" />
        </v-avatar>
        <v-card-title>
          Hello, I'm Trong Tran
          <img src="https://img.icons8.com/color/24/000000/smiling.png" />
        </v-card-title>
      </v-card>
    </v-navigation-drawer>
    <v-app-bar app src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg">
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-text-field hide-details outlined color="white" dense>
        <template v-slot:append>
          <v-icon color="white">mdi-search-web</v-icon>
        </template>
      </v-text-field>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer temporary fixed></v-navigation-drawer>
    <v-footer fixed app></v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      navigationDrawerItems: [
        {
          title: "Trang chủ",
          icon: "dashboard"
        }
      ]
    };
  }
};
</script>
