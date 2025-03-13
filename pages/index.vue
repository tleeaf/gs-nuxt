<template>
  <div class="ph4-ns flex-column items-center my-24">
    <div class="h-96 flex flex-row-ns flex-column flex-column-m my-36 justify-between w-full py-64"
      style="justify-content: space-evenly">
      <img loading="lazy" class="center" src="/img/GS-Full-Brackets-Green-Black.png" alt="" />
      <multi-tab></multi-tab>
    </div>

    <div class="text-1 mv4 center">
      <div>
        <h3 class="fw7 pl5" style="font-size: 32px">Featured Projects
          <NuxtLink to="/projects" class="shimmer pl5-ns db di-ns fw5 f4">
            View All Projects &#8594;
          </NuxtLink>
        </h3>
      </div>
      <div v-if="!isProjectsLoading"
        class="card-row sidescroll ph5-ns center w-100 flex flex-row items-center overflow-x-scroll">
        <div v-for="(project, index) in featuredProjects" :key="project.id" :index="index">
          <card :project="project" :index="index" :slug="project.slug" :startsFlipped="index === 0"></card>
        </div>
      </div>
    </div>

    <h3 class="pl-5 mv4 fw7 font-bold" style="font-size: 32px;">Our Design Process</h3>
    <div class="design-process-container">
      <div class="video-container w-1/3 my-24">
        <iframe class="" :width="420 * 3" :height="315 * 2" src="https://www.youtube.com/embed/Bxw2Gsm0ee8"
          modestbranding></iframe>
        <img class="video-watercolor h7 w7" src="/img/watercolor-blurb.png" />
      </div>

      <div class="design-text">
        <p style="max-width: 100%; padding-top: 5%">
          Our design process is integral to every project we make. A team of
          collaborators responds to an inquiry-focused prompt and undertakes a
          five-phase design-thinking process over the course of two years. The
          understand, identify, build, review, and disseminate stages each
          result in a stepping stone (e.g., a project brief, media manuscript)
          that will lead to the next phase of the design process. Though the
          process will ultimately lead to a publication, the process is meant to
          be highly iterative and cyclical, and the “product” of the process is
          intentionally left completely open-ended from the start.
          <NuxtLink to="/blog/greenhouse-studios-design-process" class="shimmer">
            Read more about our design process.
          </NuxtLink>
        </p>
      </div>
    </div>

    <div class=" w-60-ns w-80 mv4 center">
      <img loading="lazy" class="w-90-ns" src="/img/gs-processmodel-feb2021.avif" alt="" />
    </div>

    <div class="text-1">
      <div>
        <h3 class=" w-80 overflow-x-hidden mv4 fw7" style="font-size: 32px">Recent Blog Posts <NuxtLink to="/blog"
            class="shimmer pl5-ns db di-ns fw5 f4">
            View Blog &#8594;
          </NuxtLink>
        </h3>
      </div>
      <div class="card-row sidescroll ph5-ns overflow-x-scroll">
        <div v-for="(post, i) in featuredPosts" :key="post.slug" :index="i">
          <blog-card class="featuredblog" :post="post" :title="post.title" :content="post.content" :date="post.date"
            :slug="post.slug"></blog-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import Card from "../components/Card.vue";
import BlogCard from "../components/BlogCard.vue";
import MultiTab from "../components/MultiTab.vue";

const { data: projects, isLoading: isProjectsLoading, error: isProjectsError } = useProjects();
const { data: posts, isLoading: isPostsLoading, error: isPostsError, isPending } = usePosts();

const featuredProjects = computed(() => {
  return projects.value
    ?.filter(p => !!p.featuredPriority)
    .sort((a, b) => {
      return a.featuredPriority < b.featuredPriority ? -1 : 1;
    });
});

const featuredPosts = computed(() => {
  if (isPending && posts.value) {
    return posts.value.filter(p => !p.draft).slice(0, 6);
  } else {
    return null;
  }
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap");

label {
  background-size: 2%;
  background-position: 0% 50%;
  background-repeat: no-repeat;
}

.video-container img {
  margin: 0 auto;
  padding-right: 50px;
  transform: rotate(100deg);
  position: absolute;
  right: 300px;
  bottom: -130px;
  z-index: -1;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0px;
  overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  align: center;
  padding: 20;
  margin: 0 auto;
  top: 0;
}

@font-face {
  font-family: samo;
  src: url("@/assets/SAMO-Regular.ttf");
}

.card-row {
  display: grid;
  grid-gap: 3rem;
  grid-template-rows: repeat(4, 350px);
  grid-template-columns: repeat(3, 300px);
  justify-content: center;
}

@media (max-width: 660px) {
  .card-row {
    display: grid;
    grid-template-columns: repeat(1, 300px);
  }
}

@media (min-width: 661px) {
  .card-row {
    display: grid;
    grid-template-columns: repeat(2, 300px);
  }
}

@media (min-width: 1010px) {
  .card-row {
    display: grid;
    grid-template-columns: repeat(3, 300px);
  }
}

.sidescroll {
  display: flex;
  height: 450px;
  width: 100vw;
  justify-content: flex-start;
}

.video-watercolor {
  width: 70%;
  margin: 0 auto;
  padding-right: 50px;
  transform: rotate(100deg);
  position: absolute;
  // top: -170px;
  z-index: -1;
}
</style>
