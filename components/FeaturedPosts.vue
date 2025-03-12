<template>
    <div class="card-row sidescroll ph5-ns center w-100 flex flex-row items-center overflow-x-scroll">
        <div
          v-for="(project, index) in featuredProjects"
          :key="project.id"
          :index="index"
        >
          <card :project="project" :index="index" :slug="project.slug" :startsFlipped="index === 0"></card>
        </div>
      </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>