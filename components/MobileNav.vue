<template>
    <div>
        <transition name="slide-fade">
            <div class="z-5 absolute top-0 left-0" v-if="showMenu" id="mobile-menu" style="width: 100vw">
                <button @click="toggleMenu()" class="absolute h2 w2 top-1 right-1 bn bg-white f2 ma3"
                    style="color: white; background: var(--main-bg-color)">
                    <i class="dib fa fa-xs fa-times"></i>
                </button>
                <ul @click="toggleMenuDelay()" class="flex flex-column items-center justify-center h-100"
                    id="mobile-menu-list">
                    <li class="w-100" v-for="item in menuItems" :key="item.title"><NuxtLink
                            class="mobilebutton ripple" :to="item.slug ? item.slug : item.title.toLowerCase()">{{
                            item.title }}</NuxtLink></li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>