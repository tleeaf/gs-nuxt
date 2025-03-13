<template>
  <div id="blogmain">
    <div v-if="post">
      <BlogHero :post="post"></BlogHero>
      <div>
        <div class="textbox w-50-l w-90 pv5-ns pv1 center" style="line-height: 2.2rem">
          <span class="dn di-l"><share-links></share-links></span>
          <h3 v-if="post.byline" class="i font-weight-500 f5 fw5">
            {{ post.byline }}
          </h3>
          <span v-html="post.content" ref="contentContainer" id="from-wp-content"></span>
          <ShareLinks></ShareLinks>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import BlogHero from '~/components/BlogHero.vue';
const route = useRoute();
const { data: posts } = usePosts();
const post = computed(() => posts.value?.find(p => p.slug === route.params.slug));
const date = ref("");
const loaded = ref(true);
definePageMeta({
  // title: post.value?.title.rendered,
  // description: post.value?.excerpt.rendered,
  layout: 'bloglayout',
});

const showFeaturedImg = computed(() => {
  if (post.value?.custom_fields?.show_featured_img?.length)
    return post.value?.custom_fields?.show_featured_img[0] !== "false";
  else return true;
});


const blueFrame = computed(() => post.value.blueFrame);
const mintFrame = computed(() => post.value.mintFrame);
const turquoiseFrame = computed(() => post.value.turquoiseFrame);
const greenFrame = computed(() => post.value.greenFrame);

const headerBgTexture = computed(() => {
  if (post.value.slug.length <= 22) {
    return require("../public/bgImg/GSBlogHeaderTexture_1_transparent.png");
  } else if (post.value.slug.length > 22 && post.value.slug.length < 35) {
    return require("../public/bgImg/GSBlogHeaderTexture_2_transparent.png");
  } else {
    return require("../public/bgImg/GSBlogHeaderTexture_3_transparent.png");
  }
});

const categoryColor = computed(() => {
  let color;
  if (categoryList.value[0].name == "Opportunities")
    color = '#644ea2';
  if (categoryList.value[0].name == "People")
    color = '#F4783C';
  if (categoryList.value[0].name == "Research")
    color = '#8CC947';
  if (categoryList.value[0].name == "News")
    color = '#5EC6B0';
  if (categoryList.value[0].name == "Projects")
    color = '#00A192';
  return color;
});

// onUpdated(() => {
//   store.dispatch('setNavColor', categoryColor.value);
// });

const wrapImagesWithText = () => {
  loaded.value = false;
  const container = this.$refs.contentContainer;
  if (!container) return;
  const paragraphs = container.querySelectorAll('p');

  for (let i = 0; i < paragraphs.length - 1; i++) {
    const currentParagraph = paragraphs[i];
    const nextParagraph = paragraphs[i + 1];

    const currentParagraphContainsImage = currentParagraph.querySelector('img') !== null || currentParagraph.querySelector('figure') !== null;
    const nextParagraphDoesNotContainImage = nextParagraph.querySelector('img') === null && nextParagraph.querySelector('figure') === null;

    if (currentParagraphContainsImage && nextParagraphDoesNotContainImage) {
      console.log("Found image followed by text");
      // Create flex container
      const flexContainer = document.createElement('div');
      flexContainer.style.display = 'flex';
      // flexContainer.style.flexDirection = 'column';
      if (currentParagraph.querySelector('.alignright'))
        flexContainer.style.flexDirection = 'row-reverse';

      flexContainer.style.justifyContent = 'space-between';
      flexContainer.style.gap = '1em';
      nextParagraph.style.width = '500px';

      // Move paragraphs into flex container
      flexContainer.appendChild(currentParagraph.cloneNode(true));
      flexContainer.appendChild(nextParagraph.cloneNode(true));

      // Replace paragraphs with flex container
      container.replaceChild(flexContainer, currentParagraph);
      container.removeChild(nextParagraph); // Remove the next paragraph as it's now inside the flex container

      // Increment i as we have removed the next paragraph from the DOM
      i++;
    }
  }
  loaded.value = true;
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import "@/assets/blog.css";

body {
  font-family: "Libre Franklin", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.428571429;
  color: #333333;
}

.category {
  color: white;
  text-decoration: none;
}

#featured-img {
  aspect-ratio: 1/1;
}

.category:hover {
  color: white;
  text-decoration: underline;
}

#from-wp-content {
  h1 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: #161616;
    margin-top: 20px;
    margin-bottom: 10px;
    // font-size: 100pt;
  }
}

.date {
  background: #8cc947;
  padding: 5px 10px;
  color: #fff;
  font-weight: 700;
  border-radius: 20px;
  font-size: 18px;
}

.photo {
  aspect-ratio: 1/1;
}

.credits {
  font-weight: 700;
  font-size: 18px;
  color: white;
  padding-top: 5px;
}

.blogtitle {
  max-width: 600px;
  z-index: 10;
}

.titledatecontainer {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 2em, 20%;
}

#mainimg {
  float: left;
}

#blogmain {
  overflow: hidden;
}

@media (min-width: 38em) and (max-width: 52em) {
  #blogcontent {
    margin: 2em 10%;
  }
}

@media (max-width: 38em) {
  #blogcontent {
    margin: 2em;
  }
}

.textbox {
  height: 100%;
}

.alignleft {
  display: inline;
  float: left;
  margin-right: 1.5em;
}

hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eeeeee;
}

@media (max-width: 38em) {
  /* #blogmain img {
    padding: 0;
    height: auto;
  } */
}

#blogmain #mainimg {
  width: 100%;
  padding: 0;
  height: auto;
}

/* #blogmain a:hover {
  color: #8cc947;
} */
iframe {
  width: 100%;
  margin: auto;
}

.wp-caption {
  margin: auto;
  width: 100% !important;
}

.wp-caption-text {
  font-size: 14px;
  text-align: center;
}

li {
  display: inline-block;
}

.categorylist {
  display: inline;
  list-style: none;
  padding: 0px;
}

#blog-read-header {
  /* background-image: url("../public/bgImg/BlogHeaderBG.png"); */
  min-height: 560px;
  background-size: cover;
  background-repeat: no-repeat;
}

.author-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
}

#back-link {
  color: white !important;
  text-decoration: none;
  background-color: #8cc947;
}

#back-link:hover {
  color: white !important;
  text-decoration: underline;
}

* {
  font-family: Libre Franklin;
}

.categorylist li {
  display: inline;
}

.line-art {
  width: auto;
  height: 100%;
  background-size: cover;
  z-index: 0;
  opacity: 0.4;
  object-fit: cover;
}

.frame {
  z-index: 10;
  right: 0px;
  object-fit: cover;
  max-height: 250px;
}

.categorylist li::after {
  content: "-";
}

.categorylist li:last-child::after {
  content: "";
}

.suggestedPosts {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

p>.alignleft,
p>img.alignleft {
  display: inline;
  float: left;
  margin-right: 1.5em;
}

// #from-wp-content >>> .alignleft,
// #from-wp-content >>> img.alignleft {
//   display: inline;
//   float: left;
//   margin-right: 1.5em;
// }



.alignright,
img.alignright {
  display: inline;
  float: right;
  margin-left: 1.5em;
}

.aligncenter,
img.aligncenter {
  clear: both;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
