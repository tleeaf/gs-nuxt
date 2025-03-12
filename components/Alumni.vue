<template>
     <div
      class="relative center md:w-3/4 w-90 pa3-ns f3-ns f5"
    >
      <ul
        class="relative top-0 dib alumni-list w-third tc"
        style="vertical-align: top"
      >
        <li
          class="pa2 f4"
          v-for="a in alumni.slice(0, alumni.length / 3)"
          :key="a.title"
        >
          {{ a.firstName +
            " " +
            a.lastName}}
        </li>
      </ul>
      <ul
        class="relative top-0 dib alumni-list w-third tc"
        style="vertical-align: top"
      >
        <li
          class="pa2 f4"
          v-for="a in alumni.slice(alumni.length / 3, (2 * alumni.length) / 3)"
          :key="a.title"
        >
          {{ a.firstName +
            " " +
            a.lastName}}
        </li>
      </ul>
      <ul
        class="relative top-0 dib alumni-list w-third tc"
        style="vertical-align: top"
      >
        <li
          class="pa2 f4"
          v-for="a in alumni.slice((2 * alumni.length) / 3)"
          :key="a.title"
        >
          {{ a.firstName +
            " " +
            a.lastName}}
        </li>
      </ul>
    </div>
</template>

<script setup>
defineProps(["alumni"]);
</script>

<style lang="scss" scoped>
.alumni-list {
  font-family: "Libre-Franklin", Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  position: relative;
  list-style-type: none;
}
</style>