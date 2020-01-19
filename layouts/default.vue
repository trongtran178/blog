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
        <v-card-title>Xin chào, tôi là Trọng <img src="https://img.icons8.com/color/24/000000/smiling.png"></v-card-title>
      </v-card>
    </v-navigation-drawer>
    <v-app-bar app src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg">
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <template v-slot:extension>
        <v-text-field outlined color="white" dense>
          <template v-slot:append>
            <v-icon color="white">mdi-search-web</v-icon>
          </template>
        </v-text-field>
        <v-spacer></v-spacer>
        <v-menu bottom origin="center center" offset-y transition="scale-transition">
          <template v-slot:activator="{ on }">
            <v-btn class="mx-2" outlined v-on="on">Lập trình</v-btn>
          </template>
          <v-list>
            <v-list-item v-for="item in programmingItem" :key="item.title">
              <v-list-item-icon>
                <v-icon v-if="item.icon" color="yellow">mdi-star</v-icon>
              </v-list-item-icon>
              <v-list-item-content>{{item.title}}</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn class="mx-2" outlined>Trải nghiệm</v-btn>
      </template>
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
      ],
      programmingItem: [
        {
          title: "FRONTEND",
          icon: "star"
        },
        {
          title: "BACKEND",
          icon: "star"
        },
        {
          title: "DESIGN PATTERN",
          icon: "star"
        },

        {
          title: "ALGORITHM",
          icon: "star"
        }
      ]
    };
  }
};
</script>
