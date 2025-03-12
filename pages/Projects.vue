<template>
  <div v-if="!isLoading">
    <div class="w-50-l w-90 center f3-ns f4 ma5 pv6-ns pv3 fw4">
      <h2 class="page-title f1">Projects</h2>
      <p>
        Each project is a test drive for our model of scholarly production. This
        allows us to continually assess our vision of what scholarly
        communications in the digital age looks like.
      </p>
    </div>
    <div class="w-60-l w-90  bw1 center mb3"></div>
    <div class="blog-grid" v-if="!isProjectsLoading">
      <card v-for="(project, index) in projects" :key="project.slug" :project="project" :index="index"
        :slug="project.slug" :startsFlipped="index === 0" ref="projects"></card>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import Card from "../components/Card.vue";
import _ from "lodash";

const activeTab = ref(0);
const { data: projects, isLoading: isProjectsLoading, error: isProjectsError } = useProjects();
const { data: categories, isLoading: isCategoriesLoading, error: isCategoriesError } = useCategories();

function beforeRouteLeave(to, from, next) {
  projects.value.map(x => x.reset());
  next();
}
</script>

<style>
@import "@/assets/projects.css";

.active {
  border: 1px solid black;
}

.inactive {
  border: 1px dashed rgba(0, 0, 0, 0.3);
}

#tab-btn-container {
  display: flex;
  flex-direction: row;
}
</style>