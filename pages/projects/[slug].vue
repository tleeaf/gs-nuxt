<template>

    <div id="blogmain" v-if="project" class="mt6-ns w-two-thirds-ns w-90 center">
        <div v-if="project">
            <div class="textbox">
                <span v-html="project.content"></span>
            </div>
        </div>
    </div>


</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const slug = computed(() => route.params.slug);
const { data: projects } = useProjects();
const project = computed(() => projects.value?.find((p) => p.slug === slug.value));

onMounted(() => {
    if (project.value) {
        console.log(project.value.slug);
    }
});

function getAlt(str) {
    var regex = /<img.*?src="(.*?)" alt="(.*?)"/;
    var alt = regex.exec(str);
    if (alt == null) {
        // Placeholder Image
        alt = "A blog image";
    } else {
        alt = alt[2];
    }
    return alt;
}

function isMobile() {
    if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
    ) {
        return true;
    } else {
        return false;
    }
}
</script>

<style scoped>
@import "./assets/blog.css";

body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.428571429;
    color: #333333;
}

figure {
    margin: 4em auto !important;
}

h1 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: #161616;
    margin-top: 20px;
    margin-bottom: 10px;
}

.credits {
    margin-bottom: 1.5em;
}

#blogmain {
    overflow: hidden;
    background: transparent;
}

#mainimg {
    width: 100%;
    height: auto;
}

@media (min-width: 38em) and (max-width: 52em) {}

@media (max-width: 38em) {}

.textbox {
    height: 100%;
}

.alignleft {
    display: inline;
    float: left;
    margin-right: 1.5em;
    margin-bottom: 1.5em;
}

hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eeeeee;
}

img {
    height: auto;
    max-width: 100%;
}

a {
    color: #717073;
}

#blogmain a:hover {
    color: #8cc947;
}
</style>