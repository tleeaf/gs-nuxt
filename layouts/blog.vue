<template>
    <BlogHeader></BlogHeader>
    <div class="md:p-24 p-8">
        <slot></slot>
    </div>
    <Footer></Footer>
</template>

<script setup>
import BlogHeader from '~/components/BlogHeader.vue';


</script>

<style lang="scss" scoped></style>