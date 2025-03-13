<template>
    <transition name="slide-fade">
        <div class="z-5 absolute top-0 left-0" v-if="showMenu" id="mobile-menu" style="width: 100vw">
            <button @click="toggleMenu()" class="absolute h2 w2 top-1 right-1 bn bg-white f2 ma3"
                style="color: white; background: var(--main-bg-color)">
                <i class="dib fa fa-xs fa-times"></i>
            </button>
            <ul @click="toggleMenuDelay()" class="flex flex-column items-center justify-center h-100"
                id="mobile-menu-list">
                <li class="w-100" v-for="item in props.menuItems" :key="item.title">
                    <NuxtLink class="mobilebutton ripple" :to="item.slug ? item.slug : item.label.toLowerCase()">{{
                        item.label }}</NuxtLink>
                </li>
            </ul>
        </div>
    </transition>
</template>

<script setup>

const showMenu = ref(false);

const props = defineProps({
    menuItems: Array,
});

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const toggleMenuDelay = () => {
  setTimeout(() => toggleMenu(), 300);
};

</script>

<style lang="scss" scoped>
#mobile-menu-list>li a {
    display: block;
    // padding: 20px 20px;
    color: white;
    font-size: 1.75rem;
    text-decoration: none;
}

#mobile-menu {
    font-size: 10rem !important;
    background-color: var(--main-bg-color);
    height: 100vh;
}

#mobile-menu-list {
    font-weight: 800;

    >li {
        font-family: "Libre Franklin" !important;
        color: white !important;
    }
}

.mobilebutton {
    border: none;
    font-size: 16px;
    cursor: pointer;
    color: white;
    outline: none;
}
</style>