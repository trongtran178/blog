<template>
  <v-container>
    <v-row>
      <v-col cols="6" md="4">
        <v-card
          style="border-radius: 20px;"
          min-height="200"
          class="d-flex flex-column justify-center align-center"
          img="images/background/category-card/programming-in-night2.png"
        >
          <div class="text-center title font-weight-medium px-3">Lập trình</div>
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card
          style="border-radius: 20px;"
          min-height="200"
          class="d-flex flex-column justify-center align-center"
        >
          <div class="text-center title font-weight-medium px-3">Tiếng Anh</div>
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card
          style="border-radius: 20px;"
          min-height="200"
          class="d-flex flex-column justify-center align-center"
        >
          <div class="text-center title font-weight-medium px-3">Âm nhạc</div>
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card
          style="border-radius: 20px;"
          min-height="200"
          class="d-flex flex-column justify-center align-center"
        >
          <div class="text-center title font-weight-medium px-3">Sách</div>
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card
          style="border-radius: 20px;"
          min-height="200"
          class="d-flex flex-column justify-center align-center"
           img="images/background/category-card/journey.png"
        >
          <div class="text-center title font-weight-medium px-3">Những chuyến đi & Trải nghiệm</div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { firebaseDb } from "~/plugins/firebase.js";
import Post from "@/components/post.vue";
export default {
  components: {
    Post
  },
  data: function() {
    return {
      title: "Hãy cho tôi thấy cánh tay của các bạn đi nào ...",
      content:
        "Hãy cho tôi thấy cánh tay của các bạn đi nào Hãy cho tôi thấy cánh tay của các bạn đi nào Hãy cho tôi thấy cánh tay của các bạn đi nào Hãy cho tôi thấy cánh tay của các bạn đi nào Hãy cho tôi thấy cánh tay của các bạn đi nào Hãy cho tôi thấy cánh tay của các bạn đi nào Hãy cho tôi thấy cánh tay của các bạn đi nào Hãy cho tôi thấy cánh tay của các bạn đi nào Hãy cho tôi thấy cánh tay của các bạn đi nào "
    };
  },

  async mounted() {
    let snap;
    try {
      const ref = firebaseDb
        .collection("Posts")
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            console.log(doc.data());
          });
        });
    } catch (exception) {
      console.error(e);
    }
  }
};
</script>
