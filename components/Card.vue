<template>
  <div class="flipCard" @click="flipCard">
    <div class="card" :class="{ flipped: isFlipped }">
      <div class="side front" v-show="!isFlipped || flipping">
        <div class="img-front h-full w-full overflow-hidden">
          <img v-if="project.projectCardFront" :src="project.projectCardFront" class="absolute top-0 z-2"
            alt="project title" loading="lazy" />
          <div v-else class="center w-full h-full flex items-center py-5 text-center absolute">
            <h2 id="alt-card-title" class="text-3xl py-5 text-center z-3">{{ project.title }}</h2>
          </div>
          <img class="h-full" loading="lazy" src="../public/img/Watercolor_background.avif" style="object-fit: cover"
            :style="`z-index: -1; ${((Math.cos(phase) + 1) / 2) * 100}%; filter: hue-rotate(${Math.sin(phase) * 10 + 2
              }deg) `" alt="Front side of flippable card for the project">

        </div>
      </div>
      <div class="side back flex-container" :alt="'Back side of flippable card for the project' + project.title
        " :style="'background-image: url(' +
          (project.projectCardBack || defaultFaceBackground) +
          '); background-repeat: no-repeat;'
          ">
        <img v-if="project.projectTitleImg" class="title-new" :src="project.projectTitleImg" :alt="project.title"
          loading="lazy" />
        <h2 v-else>{{ project.title }}</h2>
        <div class="desc" v-if="project.about">
          <p>
            {{ project.about }}
          </p>
        </div>

        <a v-if="hasSite" id="button" :style="`text-decoration: none; border: 2px solid ${btnColor}; background-color:${hover ? 'white' : btnColor
          }; border-color:${btnColor} !important; color: ${hover ? btnColor : btnTextColor
          }`" @mouseleave="hover = false" @mouseenter="hover = true" :href="project.websiteUrl"
          target="_blank" @click.stop="">
          Website
        </a>

        <a v-else id="button" @mouseenter="hover = true" @mouseleave="hover = false"
          @click.prevent="$router.push(`/projects/${project.slug}`)" :style="`border: 2px solid ${btnColor}; background-color:${hover ? 'white' : btnColor
            }; border-color:${btnColor} !important; color: ${hover ? btnColor : btnTextColor
            }`">Read More</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import convert from 'color-convert';

const props = defineProps({
  project: {
    type: Object,
    default: () => ({}),
  },
  index: {
    type: Number,
  },
  slug: {
    type: String,
  },
  startsFlipped: {
    type: Boolean,
  }
});

const isFlipped = ref(props.startsFlipped ? true : false);
const flipping = ref(false);
const hover = ref(false);
const defaultFaceBackground = "https://dev-greenhouse-studios.pantheonsite.io/wp-content/uploads/2021/11/Card_Back_bright_green_new.jpg";

const phase = computed(() => (props.index * Math.PI) / 2);

const btnColor = computed(() => props.project.btnColor ? props.project.btnColor : "#8CC947");

const btnTextColor = computed(() => props.project.btnColor && convert.hex.hsl(props.project.btnColor)[2] <= 50 ? "white" : "black");

const hasSite = computed(() => props.project.websiteUrl);

const flipCard = () => {
  isFlipped.value = !isFlipped.value;
  flipping.value = true;
  setTimeout(() => {
    flipping.value = false;
  }, 600);
};

const reset = () => {
  isFlipped.value = false;
};

onMounted(() => {
  // Any additional setup can be done here
});
</script>

<style lang="scss" scoped>
.card {
  height: 350px;
  width: 300px;
}

.flipCard .card.flipped {
  transform: rotatey(-180deg);
}

.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.back {
  padding: 35px;
}

#button {
  position: absolute;
  bottom: 35px;
}

#alt-card-title {
  font-family: 'SAMO';
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  background: none;
  margin: auto;
}
</style>