<template>
  <div class="flipCard" @click="isFlipped = !isFlipped">
    <div class="card" :class="{ flipped: isFlipped }">
      <div class="side front" style="overflow: hidden; z-index: 0;">
        <div class="img-front absolute" style="
            height: 35%;
            width: 100%;
            object-fit: cover;
            border-radius: 5px 5px 0px 0px;
            background-size: 150%;
            z-index: -1;
          " :style="`background-image: url('/img/GH-Watercolor-small.png'); background-position: ${this.positionShift
            }% ${((Math.cos(phase) + 1) / 2) * 100}%;
           filter: hue-rotate(${textureHueShift}deg) saturate(${textureSaturationShift}deg)`"
          alt="watercolor card background image"></div>
        <div v-if="image" class="people-img z-1" style="margin-top: 47px">
          <img :src="image" loading="lazy" :style="usesPlaceholder ? 'width: 80%' : 'width:100%'" />
        </div>
        <h4 class="people-name" style="
            width: 80%;
            text-overflow: wrap;
            margin: 0 auto;
            font-weight: normal;
          " v-if="
            person.firstName && person.lastName
          ">
          {{
            person.firstName + " " + person.lastName
          }}
        </h4>
      </div>
      <div class="side back gs-card-flex" alt="" style="text-overflow: ellipsis">
        <p class="people-desc" v-html="person.about" style="overflow: hidden" v-if="person.about && person.about"></p>
        <div class="social-media">
          <div v-if="person.email">
            <a :href="'mailto:' + person.email" class="icons"><i class="fa fa-envelope"></i></a>
          </div>
          <div v-if="person.site && person.site">
            <a :href="person.site" class="icons"><i class="fa fa-globe"></i></a>
          </div>
          <div v-if="person.instagram">
            <a :href="person.instagram" class="icons"><i class="fa fa-instagram"></i></a>
          </div>
          <div v-if="person.linkedin">
            <a :href="person.linkedin" class="icons"><i class="fa fa-linkedin"></i></a>
          </div>
          <div v-if="person.twitter">
            <a :href="person.twitter" class="icons"><i class="fa fa-twitter"></i></a>
          </div>
        </div>
        <img class="person-card-watercolor-back h-16 w-full bg-cover" src="/img/GH-Watercolor-small.png" alt="watercolor card background image" loading="lazy" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonCard",
  props: {
    person: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
      isFlipped: false,
    };
  },
  computed: {
    phase() {
      return (this.index * Math.PI) / 6;
    },
    positionShift() {
      return ((Math.sin(this.phase) + 1) / 2) * 100;
    },
    textureHueShift() {
      return Math.sin(this.phase) * 20 + 40;
    },
    textureSaturationShift() {
      return Math.sin(this.phase) * 20 + 30;
    },
    image() {
      return this.person.featuredImage.node.mediaItemUrl;
    },
    usesPlaceholder() {
      if (this.image) return this.image.includes("placeholder");
      else return true
    },
  },
  methods: {
    reset() {
      this.isFlipped = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/projects.css";

.people-name {
  font-family: "Libre Franklin";
  text-transform: capitalize;
}

.people-img {
  overflow: hidden;
  display: grid;
  place-items: center;
}

i {
  display: flex;
  color: black;
  font-size: 24px;
  text-align: center;
  text-decoration: none;
}

.icons {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
  border-radius: 100%;
  text-decoration: none;
}

.icons:hover {
  text-decoration: none;
  transition: transform .25s;
  transform: scale(1.2);
}

.social-media {
  z-index: 1;
  display: flex;
  justify-content: center;
  align-self: center;
  padding-bottom: 12px;
}

i:hover {
  text-decoration: none;
}
</style>