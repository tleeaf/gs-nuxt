<template>
  <div v-if="!isLoading">
    <div class="w-50-l w-90 center f3-ns f4 ma5 pv6-ns pv3 fw4">
      <h2 class="page-title f1">People</h2>
      We are an interdisciplinary team with diverse backgrounds who bring their
      individual interests and passions into the Greenhouse Studios community.
    </div>
    <div id="tab-btn-container" class="w-50-ns center flex flex-row justify-around ">
      <button @click="changeActiveTab(index)" class="ma3 pa3 br2 ma1 bg-transparent w5" id="subnav-btn"
        :class="{ active: activeTab === index, inactive: activeTab !== index }" v-for="(tab, index) in tabs" :key="tab">
        <h3 class="ma0 f1 f4-ns f4" style="color: #333333">{{ tab }}</h3>
      </button>
    </div>
    <div id="active-people w-100" v-show="activeTab === 0">
      <div class="blog-grid pa4" v-if="people">
        <person-card v-for="(person, index) in activePeople" :key="person.slug" :person="person" :index="index"></person-card>
      </div>
    </div>
   <alumni v-show="activeTab === 1" :alumni="alumni"></alumni>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Alumni from '~/components/Alumni.vue';
import _ from "lodash";

const {data: people, isLoading} = usePeople();
const activeTab = ref(0);

const tabs = [
  "Active",
  "Alumni",
];

const changeActiveTab = (i) => {
  activeTab.value = i;
};

const alumni = computed(() => {
  if (people) {
    return _.sortBy(
      people.value.filter((p) => p.categoriesPeople.nodes.find((c) => c.name === "Alumni")),
      [
        function (o) {
          return o.lastName
            ? o.lastName[0].toLowerCase()
            : "";
        },
      ]
    );
  } else return [];
});

const activePeople = computed(() => {
  if (people) {
    return _.sortBy(
      people.value.filter((p) => !p.categoriesPeople.nodes.find((c) => c.name === "Alumni")),
      [
        function (o) {
          return o.lastName
            ? o.lastName[0].toLowerCase()
            : "";
        },
      ]
    );
  } else return [];
});
</script>

<style scoped>
@import "@/assets/projects.css";

.active {
  border: 2px solid black;
  background-color: #8cc947;
}

.inactive {
  border: 2px dashed rgba(128, 128, 128, 0.4);
}

.partner {
  grid-template-rows: repeat(4, 200px) !important;
}

.partner-img {
  margin: auto;
}

#tab-btn-container {
  display: flex;
  flex-direction: row;
  padding: 16px 0px;
}

@media (max-width: 660px) {
  #tab-btn-container {
    flex-direction: column;
    align-items: center;
  }
}

#subnav-btn {
  color: #8cc947;
  border: 2px solid #8cc947;
}

#subnav-btn:hover {
  background-color: #bde491;
  color: white;
}
</style>