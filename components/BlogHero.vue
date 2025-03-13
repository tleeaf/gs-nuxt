<template>
    <div>
        <div v-bind:style="`'background: #8cc947'`" class="flex pa6-l pa2 items-center justify-center white relative" id="blog-read-header">
            <img src="../public/img/GSBlogHeaderTexture.png" class="cover absolute line-art">
            <NuxtLink class="absolute left-2 top-2 fw7 f4" id="back-link" to="/blog">

                <i>&#8592;</i> Back </NuxtLink>
            <div class="flex flex-column flex-row-l justify-center items-center ">
                <!-- <div class="relative top-0 left-0">
                    <img v-if="blueFrame" class="frame mr4-l shadow-2 mb3 mw6-ns mt5 mt0-l w5-m ma0 relative"
                        style="object-fit: cover;" src="../public/img/thumbnail-blue.png" alt="">
                    <img v-if="greenFrame" class="frame mr4-l shadow-2 mb3 mw6-ns mt5 mt0-l w5-m ma0 relative"
                        style="object-fit: cover;" src="../public/img/thumbnail-green.png" alt="">
                    <img v-if="mintFrame" class="frame mr4-l shadow-2 mb3 mw6-ns  mt5 mt0-l w5-m ma0 relative"
                        style="object-fit: cover;" src="../public/img/thumbnail-mint.png" alt="">
                    <img v-if="turquoiseFrame" class="frame mr4-l shadow-2 mb3 mt5 mt0-l mw6-ns w5-m ma0 relative"
                        style="object-fit: cover;" src="../public/img/thumbnail-turquoise.png" alt="">
                    <div v-if="blueFrame || turquoiseFrame || mintFrame || greenFrame">
                        <img v-if="props.post.fimg_url && showFeaturedImg" :src="props.post.fimg_url" id="featured-img" alt=""
                            class="mr4-l shadow-2 mb3 ma0 mt5 mt0-l absolute top-0 left-0"
                            style="object-fit: cover; height: 250px; width: auto;" />
                    </div>
                    <div v-if="!blueFrame && !turquoiseFrame && !mintFrame && !greenFrame">
                        <img v-if="props.post.fimg_url && showFeaturedImg" :src="props.post.fimg_url" id="" alt=""
                            class="shadow-2 mt5 mt0-l " style=" height: 250px; width: 100%" />
                    </div>
                </div> -->
                <div class="blogtitle lh-solid  ph2 ma3-l ma0 tc tl-l">
                    <div>
                        <h2 class="f3 f2-l lh-title" v-html="props.post.title.rendered"></h2>
                        <div class="f4 pv2 flex items-center justify-center justify-start-l tl-l tc mb2">
                            <img :src="authorImage" alt="" class="author-image br-100 mr3-ns" />
                            <div class="">
                                <div class="fw7 pa1">{{ authorName }}</div>
                                <div class="fw2 pa1">{{ authorRole }}</div>
                            </div>
                        </div>
                        <div class="pa1 w-100 flex items-center justify-center justify-start-l">
                            <span class="mr5">{{
                                new Date(props.post.date).toLocaleDateString("en-us")
                                }}</span>
                            <span class="f5 fw2 mv3-ns">{{ readTime }} minute read</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    post: Object,
})
const { data: allCategories } = useCategories();
const { data: people } = usePeople();
const { data: peopleCategories } = usePeopleCategories();
const postCategories = props.post.categories.nodes;
const authorPersonRecord = computed(() => {
  let author = props.post.author.node.name;
  return people.value?.find(
    (x) => x.title === author
  );
});
const authorName = computed(() => authorPersonRecord.value?.title);
//The job title of the author
const authorRole = computed(() => peopleCategories[0]?.name);

const authorImage = computed(() => {
  let result = authorPersonRecord.value;
  result = result?.image;
  if (!result)
    result =
      "https://dev-greenhouse-studios.pantheonsite.io/wp-content/uploads/2017/01/g_icon-placeholder-1.jpg";
  return result;
});

const categoryList = computed(() => {
  let result;
  if (postCategories.length > 0)
    result = allCategories.value?.filter((x) =>
      postCategories.find(p => p.name === x.name)
    );
  return result;
});

const headerBgColor = computed(() => {
  if (props.post.value.custom_fields.headerBgColor) {
    return props.post.value.custom_fields.headerBgColor;
  } else if (blueFrame.value) {
    return "#fff";
  } else return "#de7f42";
});


const getCategoryById = (id) => {
  for (let i = 0; i < allCategories.value.length; i++) {
    if (allCategories.value[i].id == id) {
      return allCategories.value[i].name;
    }
  }
};

const getCategorySlug = (id) => {
  for (let i = 0; i < allCategories.value.length; i++) {
    if (allCategories.value[i].id == id) {
      return allCategories.value[i].slug;
    }
  }
};

const wordCount = computed(() => {
  if (props.post.content)
    return props.post.content.split(" ").length;
  return 0;
});

const readTime = computed(() => {
  if (wordCount.value) return Math.round(wordCount.value / 200);
  else return null;
});
</script>

<style lang="scss" scoped></style>