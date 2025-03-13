<template>
    <div v-if="page" id="container" class="w-80 f3-ns f4 mh2 center mv2 mh6-l mv3-l  pv3-ns pv3 fw4">
        <h2 class="f1 page-title">{{ page.title}}</h2>
        <div v-html="page.content" class="mh6-ns"></div>
    </div>
    <div v-else>
        <!-- <NotFound /> -->
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const pages = usePages();
const page = computed(() => pages.data.value.find((p) => p.slug === route.params.slug));
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