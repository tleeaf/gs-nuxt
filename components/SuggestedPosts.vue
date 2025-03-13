<template>
    <div class="text-1 mv5" v-if="getSuggestedPosts.length > 0">
        <div class="fprojects-text">
            <h3 class="title-2">Suggested Blog Posts</h3>
        </div>
        <div class="suggestedPosts">
            <blog-card class="mh3 lh-copy" v-for="p in getSuggestedPosts" :key="p.slug" :post="p" :title="p.title"
                :content="p.content" :date="p.date" :slug="p.slug"></blog-card>
        </div>
    </div>
</template>

<script setup>

const {data: posts } = usePosts();
const getSuggestedPosts = computed(() => {
  let numSuggested = 0;
  let suggestedPosts = [];
  let currentCategories = post.value.categories;
  for (let i = 0; i < allPosts.length; i++) {
    if (allPosts[i] != post.value) {
      let postCategories = allPosts[i].categories;
      for (let x = 0; x < currentCategories.length; x++) {
        if (postCategories.includes(currentCategories[x])) {
          suggestedPosts.push(allPosts[i]);
          numSuggested += 1;
        }
        break;
      }
    }
    if (numSuggested == 3) {
      break;
    }
  }
  return suggestedPosts;
});
</script>

<style lang="scss" scoped></style>