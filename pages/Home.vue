<template>
  <div class="ph4-ns flex-column items-center my-24">
    <div class="h-96 flex flex-row-ns flex-column flex-column-m my-36 justify-between w-full py-64"
      style="justify-content: space-evenly">
      <img loading="lazy" class="center" src="/img/GS-Full-Brackets-Green-Black.png" alt="" />
      <multi-tab></multi-tab>
    </div>

    <div class="text-1 mv4 center">
      <div>
        <h3 class=" pl5" style="font-size: 32px">Featured Projects
          <NuxtLink to="/projects" class="shimmer pl5-ns db di-ns ">
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

// .nav-img {
//   position: absolute;
//   margin: 0;
//   padding: 0;
//   width: 100%;
//   height: auto;
//   z-index: -1;
// }

// body {
//   font-family: "Libre Franklin";
//   line-height: 1.5;
//   margin: 0 auto;
//   font-size: 17px;
//   padding: 100px;
// }

// .gs-intro {
//   height: 75vh;
//   display: table;
//   overflow: hidden;
// }

// .gs-intro h2 {
//   font-family: "Libre Franklin";
//   font-weight: 600;
//   font-size: 50px;
//   margin: 0;
//   display: table-cell;
//   vertical-align: middle;
//   padding-top: 10px !important;
// }

// @media (max-width: 660px) {
//   .gs-intro h2 {
//     font-size: 35px;
//   }
// }

// .animation_fill img {
//   width: 100%;
//   height: auto;
//   padding-top: 100px;
// }

// .footer-img {
//   position: absolute;
//   margin: 0;
//   padding: 0;
//   width: 100%;
//   height: 750px;
//   z-index: -1;
// }

// .footer-information {
//   text-align: center;
// }

// .copyright {
//   padding-top: 5px;
// }

// .grants img {
//   height: 40px;
//   padding: 15px;
//   padding-top: 30px;
// }

// .social-media img {
//   height: 30px;
//   padding: 8px;
//   width: auto;
// }

// .social-media {
//   display: flex;
//   justify-content: center;
//   align-self: center;
//   padding-top: 10px;
// }

// .footer-pages {
//   padding-top: 10px;
// }

// .footer-pages a {
//   text-decoration: none;
//   color: #161616;
// }

// .footer-people a:hover,
// .footer-projects a:hover,
// .footer-joinus a:hover {
//   text-decoration: wavy underline;
// }

// .footer-people,
// .footer-projects,
// .footer-joinus {
//   padding: 5px;
// }

// footer {
//   bottom: 0;
//   font-family: "Libre Franklin";
//   font-weight: 300;
//   font-size: 12px;
// }

// .card {
//   height: 350px;
//   width: 300px;
// }

// .flipCard {
//   height: 350px;
//   width: 300px;
//   margin: 0px;
// }

// .img-front {
//   border-radius: 10px;
//   border: none;
// }

// .flipCard .card.flipped {
//   transform: rotatey(-180deg);
// }

// .flipCard .card {
//   height: 350px;
//   width: 300px;
//   transform-style: preserve-3d;
//   transition: 1s;
//   border: none;
// }

// .flipCard .card .side {
//   height: 350px;
//   width: 300px;
//   cursor: pointer;
//   position: absolute;
//   border-radius: 5px;
//   backface-visibility: hidden;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
//   border: none;
//   border-radius: 10px;
// }

// .flipCard .card .back {
//   transform: rotatey(-180deg);
// }

// .tile-back {
//   z-index: -5;
//   backface-visibility: hidden;
// }

// .people-img {
//   height: 200px;
//   width: 200px;
//   display: block;
//   margin-top: -90px;
//   margin-left: auto;
//   margin-right: auto;
//   border-radius: 50%;
//   border: 5px solid white;
//   background-color: white;
//   border-radius: 100%;
//   display: inline-block;
//   margin-left: 15%;
// }

// .people-name {
//   font-family: "Samo";
//   text-align: center;
//   line-height: 35px;
//   font-size: 30px;
//   margin: 0;
//   padding: 0;
// }

// .people-title {
//   font-size: 12px;
//   text-align: center;
//   margin: 10px;
//   line-height: 20px;
//   font-family: "Libre Franklin";
// }

// .people-desc {
//   margin: 0;
//   padding: 18px;
//   margin-top: 14px;
//   position: absolute;
//   font-size: 12px;
//   line-height: 21px;
//   font-family: "Libre Franklin";
//   text-align: center;
// }

// .linkedin {
//   height: 10%;
//   width: auto;
//   position: absolute;
//   margin-top: 110%;
//   margin-right: 75%;
// }

// .title-new {
//   width: 250px;
//   height: 80px;
//   object-fit: contain;
//   padding-top: 35px;
// }

// .title-new-1 {
//   width: 250px;
//   height: 80px;
//   object-fit: contain;
//   padding-top: 35px;
// }

// .desc {
//   margin: 0px;
//   padding-left: 30px;
//   padding-right: 30px;
//   font-family: "Libre Franklin", Arial, Helvetica, sans-serif;
//   font-size: 15px;
//   text-align: center;
// }

// #button {
//   border-radius: 5px;
//   letter-spacing: 2px;
//   padding: 5px 10px 5px 10px;
//   font-family: samo, Arial, Helvetica, sans-serif;
// }

// .btn-bol {
//   color: white;
//   background-color: #246481;
//   border: 2px solid #246481;
// }

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

// .title {
//   padding: 70px;
//   font-size: 35px;
//   line-height: 1.5em;
// }

// .title-1 {
//   padding: 30px 30px 50px;
//   font-weight: 600;
//   font-size: 38px;
//   margin: 0px;
//   font-family: "Samo";
// }

// .line {
//   position: relative;
//   bottom: 35px;
//   width: 300px;
//   padding-left: 30px;
// }

// p,
// li,
// span,
// a {
//   line-height: 1.5;
//   font-size: 16px;
//   max-width: 80ch;
// }

// p a {
//   color: #161616;
// }

// .text-1 h2,
// .text-2 h2 {
//   padding-bottom: 20px;
// }

// .body {
//   margin: 0 auto;
//   max-width: fit-content;
// }

.sidescroll {
  display: flex;
  height: 450px;
  width: 100vw;
  justify-content: flex-start;
}

// #gs-logo {
//   display: block;
//   max-width: 300px;
//   max-height: 300px;
//   width: auto;
//   height: auto;
// }

// .design-text {
//   width: 100%;
// }

// .design-process-container {
//   position: relative;
//   width: 70%;
//   margin: auto;
// }

.video-watercolor {
  width: 70%;
  margin: 0 auto;
  padding-right: 50px;
  transform: rotate(100deg);
  position: absolute;
  // top: -170px;
  z-index: -1;
}

// .spacer {
//   height: 130px;
// }

// p,
// h1,
// h2,
// h3,
// h4,
// h5,
// h6 {
//   font-family: "Libre Franklin";
// }</style>
