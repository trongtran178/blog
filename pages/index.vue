<template>
  <v-container>
    <v-row>
      <post :title="title" :content="content"></post>
      <v-divider></v-divider>
      <post :title="title" :content="content"></post>
      <v-divider></v-divider>
      <post :title="title" :content="content"></post>
      <v-divider></v-divider>
      <post :title="title" :content="content"></post>
      <v-divider></v-divider>
      <post :title="title" :content="content"></post>
      <v-divider></v-divider>
      <post :title="title" :content="content"></post>
      <v-divider></v-divider>
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
