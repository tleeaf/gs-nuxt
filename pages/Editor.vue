<template>
    <h1 v-if="isLoading" class="text-3xl font-bold text-center">Loading...</h1>
    <h1 class="text-red-500 text-3xl font-bold" v-else-if="isError">Error!</h1>
    <section v-else>
        <h1>{{ post?.title }}</h1>
        <button class="pa3 bg-gold mv2 hover:bg-yellow-200" @click="newPage">New Page
            <FontAwesome icon="file"></FontAwesome>
        </button>
        <button class="pa3 bg-gold mv2 hover:bg-yellow-200 ml2" @click="save">Save
            <FontAwesome icon="save"></FontAwesome>
        </button>
        <button class="pa3 bg-gold mv2 mh2 hover:bg-yellow-200" @click="selectLastPost">
            <FontAwesome icon="chevron-left"></FontAwesome>
        </button>
        <button class="pa3 bg-gold mv2 mh2 hover:bg-yellow-200" @click="selectNextPost">
            <FontAwesome icon="chevron-right"></FontAwesome>
        </button>

        <div id="gjs">
        </div>
        <div id="blocks" class="px-48"></div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import '@grapesjs/studio-sdk/style';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import gjsForms from 'grapesjs-plugin-forms';
import plugin from 'grapesjs-tailwind';

const mutation = useMutation(fetch('https://dev-greenhouse-studios.pantheonsite.io/graphql', {
    method: 'POST',
    body: JSON.stringify({ title: 'New Page (from graphql)', content: '' }),
    headers: {
        'Content-Type': 'application/json',
    },
}));

let editor;
// const { data: posts } = await useAsyncData('posts',() =>
// usePosts().data);



const newPage = () => {
    const username = process.env.WP_AUTH_USERNAME;
    const appPassword = process.env.WP_APP_PASSWORD;

    const credentials = btoa(`${username}:${appPassword}`);

    fetch('https://dev-greenhouse-studios.pantheonsite.io/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${credentials}`,
        },
        body: JSON.stringify({
            query: `
      mutation NewPage {
  createPage(input: {title: "Test Page", slug: "test-page-grqphql", content: "<h1>This is a test page created from graphql</h1>"}) {
    page {
      content(format: RAW)
    }
  }
}`,
        }),
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    // mutation.mutate({ title: 'New Page (from graphql)', content: '' });
    // const response = mutate({ title: 'New Page (from graphql)', content: '' });
    // console.log(response);
};
const selectNextPost = () => {
    if (currentPost.value === posts.value?.length - 1) return;
    currentPost.value++;
    const nextPost = posts.value?.at(currentPost.value);
    editor.setComponents(blogPostWrapper.value);
    // console.log(nextPost);
};

const selectLastPost = () => {
    if (currentPost.value === 0) return;
    currentPost.value--;
    const lastPost = posts.value?.at(currentPost.value);
    editor.setComponents(blogPostWrapper.value);
    // console.log(lastPost);
};
const currentPost = ref(0);
const { data: posts, isLoading, isError, isSuccess } = usePosts();
const post = computed(() => posts.value?.length > 0 && posts.value?.at(currentPost.value) || null);
const blogPostWrapper = computed(() => {
    return `<div class="blog-post-container" style="padding: 5rem; max-width: 1000px; margin: 5rem auto;">${post.value?.content} </div>`;
});

onMounted(() => {
    editor = grapesjs.init({
        container: '#gjs',
        canvas: {
            styles: [
                'https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css', // Load Tachyons CSS
                'https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css', // Load Tailwind CSS
            ],
        },
        fromElement: true,
        components: post.value?.content,
        plugins: [gjsForms, plugin],
        pluginsOpts: {
            [gjsForms]: { /* options */ }
        },
        storageManager: {
            type: 'remote',
            stepsBeforeSave: 1,
            urlStore: 'https://store.grapesjs.com',
            urlLoad: 'https://store.grapesjs.com',
            headers: {
                'Authorization': 'Bearer ...',
            },
        },
        blockManager: {
            appendTo: '#blocks',
        },
    });
    editor.addComponents(blogPostWrapper);
});

const save = () => {
    editor.store();
};
</script>

<style lang="scss">
@import url('@/assets/projects.css');

/* Let's highlight canvas boundaries */
#gjs {
    border: 3px solid #444;
}

/* Reset some default styling */
.gjs-cv-canvas {
    top: 0;
    width: 100%;
    height: 100%;
}

.gjs-block {
    width: 10% !important;
    height: auto;
    min-height: auto;
}

.panel__switcher {
    position: initial;
}
</style>