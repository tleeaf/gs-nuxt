<template>
  <div class="w-100">
    <section class="w-75 center"> <span class="flex justify-between items-center ma2 mv4">
        <h1 class="f3 fw6">Recent Posts</h1>
        <div class="relative flex items-right">
          <select v-model="selectedValue" id="category-select" class="f6"
            @change="$router.push('/blog/category/' + $event.target.value)">
            <option value="" class="pa0" selected disabled hidden>All</option>
            <option v-for="cat in allCategories" :key="cat.slug" v-bind:value="cat.slug">
              {{ cat.name }}
            </option>
          </select>
          <div class="reset relative" v-if="selectedValue">
            <NuxtLink :to="'/blog'">
              <button class="ma2 bg-white grow bn" style=""><i class="fa fa-2x fa-times-circle"
                  style="color:#058A85"></i></button>
            </NuxtLink>
          </div>
        </div>
      </span>

      <div class="center w-60 relative">
        <div class="blog-grid">
          <blog-card v-for="post in allPosts" :key="post.slug" :post="post" v-show="!post.draft"></blog-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
definePageMeta({
  title: 'Blog',
  description: 'A blog about web development and other things',
  layout: 'blog',
});
const { data: allPosts } = usePosts();
const selectedValue = ref("");

// watch(() => route.params.id, (newId) => {
//   selectedValue.value = newId || "";
// });

const getSelectedItem = (el) => {
  const e = document.getElementById(el);
  const cat = e.options[e.selectedIndex].value;
  alert(cat);
};

const getCategoryById = (id) => {
  for (let i = 0; i < allCategories.value.length; i++) {
    if (allCategories.value[i].id == id) {
      return allCategories.value[i].name;
    }
  }
};

// const changeRoute = (e) => {
//   router.push("/category/" + e.target.value);
// };

const { data: allCategories } = useCategories();

// const filter = computed(() => {
//   const id = route.params.id;
//   const filteredPosts = [];
//   const allPosts = store.getters.allPosts;
//   const categories = store.getters.allCategories;

//   if (id !== undefined) {
//     allPosts.forEach((post) => {
//       post.categories.forEach((cat) => {
//         categories.forEach((category) => {
//           if (cat == category.id) {
//             cat = category.slug;
//           }
//         });
//         if (cat == id) {
//           filteredPosts.push(post);
//         }
//       });
//     });
//   } else {
//     allPosts.forEach((post) => {
//       filteredPosts.push(post);
//     });
//   }
//   return filteredPosts;
// });
</script>

<style>
@import "@/assets/blog.css";

#category-select {
  width: 150px;
  padding: 10px;
}

* {
  font-family: "Libre Franklin";
}

select {
  border: 1px solid #058A85;
}
</style>