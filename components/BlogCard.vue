<!-- :style="'background-image: url(' + post.fimg_url + '), url(' + backupImg + ')'" -->
<template>
  <NuxtLink class="grow" style="text-decoration: none" :to="`/blog/${post.slug}`">
    <div class="wrapper" alt="Blog Card Image">
      <div v-if="props.post.blueFrame">
        <img class="mb0 w-100 absolute frame" style="object-fit: cover" src="../public/img/thumbnail-blue.png" alt="">
      </div>
      <div v-if="props.post.mintFrame">
        <img class="mb0 w-100 absolute frame" style="object-fit: cover" src="../public/img/thumbnail-mint.png" alt="">
      </div>
      <div v-if="props.post.turquoiseFrame">
        <img class="mb0 w-100 absolute frame" style="object-fit: cover" src="../public/img/thumbnail-turquoise.png"
          alt="">
      </div>
      <div v-if="props.post.greenFrame">
        <img class="mb0 w-100 absolute frame" style="object-fit: cover" src="../public/img/thumbnail-green.png" alt="">
      </div>
      <img class="mb0 w-100" style="object-fit: cover"
        :src="post?.featuredImage ? post?.featuredImage?.node?.mediaItemUrl : backupImg" alt="" />
      <div class="bg-light-gray w-100 pa0 bn absolute" style="height: 8rem" id="card-info">
        <div class="ph3 pv2 mt1">
          <span class="ph2 pv1 white f6 fw6 mt5" v-bind:style="mainCategory
            ? { background: categoryColor }
            : { background: '#8cc947' }
            ">

            {{ mainCategory }}

          </span>
          <h3 class="mv1 f5 blogcardtext title">{{ post.title }}</h3>
          <div class="absolute date-text">
            <span class="month">{{ getDate(post.date).month + " " }} </span>
            <span class="day">{{ getDate(post.date).day }}, </span>
            <span class="year">{{ getDate(post.date).year }} </span>
          </div>
        </div>

      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import { computed, ref } from 'vue';

const { data: categories } = useCategories();
const props = defineProps({
  post: Object,
});

const isFlipped = ref(false);
const backupImg = "https://dev-greenhouse-studios.pantheonsite.io/wp-content/uploads/2017/10/Greenhouse-Studios-Logos_STACKED-WORDMARK_TWO-COLOR-1.jpg";

const getDate = (str) => {
  const date = new Date(str);
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();
  return { month, day, year };
};

const mainCategory = computed(() => {
  let result;
  if (props.post) {
    result = props.post.categories.nodes[0].name;
  } else {
    result = "none";
  }
  if (!result) result = "none";
  return result;
});

const categoryColor = computed(() => {
  let color;
  if (mainCategory.value == "People") color = '#F4783C';
  if (mainCategory.value == "Opportunities") color = '#644ea2';
  if (mainCategory.value == "Research") color = '#8CC947';
  if (mainCategory.value == "News") color = '#5EC6B0';
  if (mainCategory.value == "Projects") color = '#00A192';
  return color;
});
</script>

<style scoped>
@import "@/assets/projects.css";

img {
  aspect-ratio: 1/1;
}

.date-text {
  bottom: 8px;
}

.blogcardtext {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

#card-info {
  top: 300px;
}

.title:hover {
  color: black;
  text-decoration: underline;
}

a:visited {
  color: black;
}

h3 {
  font-size: 18px;
}

.wrapper {
  height: 428px;
}

.wrapper:hover div h3 {
  text-decoration: underline;
}

.frame {
  z-index: 10;
}
</style>