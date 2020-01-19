<template>
  <v-row>
    <v-col cols="12">
      <div class="title">{{ title }}</div>
      <!-- <div>{{ createdAt }} - {{ createdBy }}</div> -->
    </v-col>
    <v-divider></v-divider>
    <v-col cols="12">{{content}}</v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
    description: String,
    createdAt: String,
    createdBy: String,
    updatedAt: String,
    updatedBy: String
  }
};
</script>

