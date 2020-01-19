<template>
  <v-breadcrumbs :items="items"></v-breadcrumbs>
</template>


<script>
export default {
  props: {
    items: Array
    // [       {
    //     text: 'Dashboard',
    //     disabled: false,
    //     href: 'breadcrumbs_dashboard',
    //   },
    //   {
    //     text: 'Link 1',
    //     disabled: false,
    //     href: 'breadcrumbs_link_1',
    //   },]
  }
};
</script>