<template>
    <div v-if="page" id="container" class="w-80 f3-ns f4 mh2 center mv2 mh6-l mv3-l  pv3-ns pv3 fw4">
      <h2 class="f1 page-title">{{ page.title }}</h2>
      <div v-html="page.content" class="mh6-ns"></div>
    </div>
  </template>
  
<script setup>
import { ref, onMounted, watch } from 'vue';
import { usePage } from '../composables/usePage';
import { useRoute } from 'vue-router';

// const page = ref(null);
const route = useRoute();
const { data: pages } = usePages();

const page = computed(() =>
  pages.value?.find((page) => page.slug === route.params.page)
);
// const page = computed(() => {
//   return pages.find((page) => page.slug === route.params.page);
// });
// const pageID = computed(() => {
//   return pages.find((page) => page.slug === 'services')?.id;
// });

// const { data: page } = usePage(pageID.value);
</script>
  
  <style lang="scss" scoped>
  #container {
    font-family: "Libre Franklin", Arial, Helvetica, sans-serif !important;
  }
  
  .title {
    font-family: "Samo";
    font-size: 3rem;
  }
  
  img {
    height: auto !important;
  }
  </style>