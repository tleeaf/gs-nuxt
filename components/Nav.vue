<template>
  <nav class="flex justify-between justify-end-ns ph3 pv2 overflow-visible items-center header bg-transparent z-5"
    style="background-color: transparent">
    <img loading="lazy" id="gs-logo" class="w3 h3 m-0 dn-ns" src="../public/img/GS-Full-Brackets-Green-Black.png"
      alt="" />
    <img src="../public/img/watercolor-nav.avif" alt="gs-watercolor-background" class="absolute" id="watercolor-bg" />
    <input class="menu-btn" type="checkbox" id="menu-btn" @click="toggleMenu()" />
    <label class="absolute-l top-0 left-0 pa2 f3-ns f5 menu-icon" for="menu-btn">
      <span><FontAwesome icon="bars"></FontAwesome></span>
    </label>
    <ul class="menu ttc visible">
      <li v-for="item in items" :key="item.title" class="menu-link relative f3 overflow-visible"
        @mouseover="activeDropdown = item.child_items" @mouseleave="activeDropdown = null">
        <NuxtLink class="relative" :to="item.slug ? '/' + item.slug : '/' + item.label.toLowerCase()">{{ item.label
          }}
          <img class="w-70 absolute bottom-2 left-1 dn" :style="`transform: scaleX(${Math.random() > 0.5 ? 1 : -1})`" />
        </NuxtLink>
        <ul v-if="item.child_items && activeDropdown == item.child_items"
          class="z-5 bg-white pa2 flex flex-column dn absolute w-100">
          <li v-for="child in item.child_items" :key="child.slug" class=" nav-dropdown-item overflow-visible f5 pa1 ">
            <NuxtLink class="overflow-visible" :to="child.slug ? '/' + child.slug : '/' + child.title">
              <div class="nav-link-text">{{ child.title
              }}</div>
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
    <MobileNav :menuItems="menuItems" />
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const items = [{ "id": "cG9zdDo3MjIx", "title": null, "url": "https://dev-greenhouse-studios.pantheonsite.io", "label": "Home" }, { "id": "cG9zdDo3Mjc0", "title": null, "url": "https://dev-greenhouse-studios.pantheonsite.io/people_category/people/", "label": "People" }, { "id": "cG9zdDo3MjI0", "title": null, "url": "https://dev-greenhouse-studios.pantheonsite.io/join-us/", "label": "Join Us!" }, { "id": "cG9zdDo3MjYw", "title": null, "url": "https://dev-greenhouse-studios.pantheonsite.io/category/projects/", "label": "Projects" }, { "id": "cG9zdDo3NTIx", "title": null, "url": "https://dev-greenhouse-studios.pantheonsite.io/facilitation/", "label": "Services" }, { "id": "cG9zdDo3Mjg4", "title": null, "url": "https://dev-greenhouse-studios.pantheonsite.io/blog/", "label": "Blog" }]
const activeDropdown = ref(null);
const { data: menuItems, isLoading, isPending, error } = useMenuItems();


const showDropdown = (index) => {
  activeDropdown.value = index;
};

const hideDropdown = () => {
  activeDropdown.value = null;
};

</script>

<style lang="scss">
#page-indicator {
  font-family: SAMO;
}

.menu-title {
  font-family: Samo;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter,
.slide-fade-leave-to

/* .slide-fade-leave-active below version 2.1.8 */
  {
  transform: translateY(1000px);
}

#watercolor-bg {
  z-index: -1;
  position: absolute;
  right: 0;

  @media screen and (min-width: 1440px) {
    width: 65vw;
    top: 100px;
  }

  @media screen and (max-width: 1440px) {
    width: 130vw;
  }
}

.header {
  width: 100%;
}

.blog-nav ul>li>a {
  color: white !important;
}

.header ul>li>a {
  color: black;
}

.header ul {
  font-family: "Libre Franklin";
  font-weight: 300;
  text-align: center;
  margin: 0;
  padding: 0;
  list-style: none;
  // overflow: hidden;
}

.menu>li a {
  text-decoration: none;
}



.header .logo {
  display: block;
  // float: left;
  font-size: 2em;
  padding: 10px 20px;
  text-decoration: none;
}

/* menu */

.header .menu {
  clear: both;
  margin: 0;
  padding: 0;
  max-height: 0;
  font-family: "Libre Franklin";
  font-weight: 500;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  // float: right;
  position: relative;
  user-select: none;
  display: flex;
  align-items: stretch;
}

.header .menu-icon .navicon {
  background: #161616;
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;
  transform: scale(2);
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #161616;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}



.menu {
  font-family: "Libre Franklin" !important;
}

/* 48em = 768px */

@media (min-width: 60em) {

  .header .menu-icon {
    display: none;
  }

}

@media screen and (max-width: 60em) {
  .menu {
    display: none;
  }
}


.shimmer:hover {
  display: inline-block;
  color: white;

  background: #000 -webkit-gradient(linear, 100% 0, 0 0, from(#444), color-stop(0.5, #aaa), to(#444));

  background-position: -4rem top;
  /*50px*/
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation-name: shimmer;
  -webkit-animation-duration: 2.2s;
  -webkit-animation-iteration-count: infinite;
  -webkit-background-size: 4rem 100%;
  /*50px*/
}

.router-link-exact-active {
  >img {
    display: block;
    bottom: 5%;
  }
}

@-webkit-keyframes shimmer {
  0% {
    background-position: -4rem top;
    /*50px*/
  }

  70% {
    background-position: 12.5rem top;
    /*200px*/
  }

  100% {
    background-position: 12.5rem top;
    /*200px*/
  }
}



/* Ripple effect */
.ripple {
  background-position: center;
  transition: background 0.6s;
}

.ripple:hover {
  background: #9fdd59 radial-gradient(circle, transparent 1%, #8CC947 1%) center/15000%;
}

.ripple:active {
  background-color: #f5f5f5;
  background-size: 100%;
  transition: background 0s;
}

.blog-nav>a {
  color: white;
}

.blog-nav>.menu-link:visited {
  color: white;
}

li.nav-dropdown-item {
  text-align: center;
  background-color: white;
  max-width: 100%;
  min-width: none;
  margin: 0;
}

.nav-link-text {
  color: black;
}

.nav-dropdown-item:hover {
  background-color: #f5f5f5;
}

.nav-dropdown-item>a {
  margin: 0;
  padding: 0%;
}
</style>