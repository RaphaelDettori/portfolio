<script setup>
import { ref, onMounted } from "vue";
const showMobileMenu = ref("false");
const scrollBg = ref(false);

const navigations = [
    { name: "Accueil", href: "#home" },
    { name: "A propos", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
];

const setScrollBg = (value) => {
    scrollBg.value = value;
}

onMounted(() => {
    window.addEventListener('scroll', function () {
        return window.scrollY > 50 ? setScrollBg(true) : setScrollBg(false);
    })
})
</script>

<template>
    <nav class="bg-light-primary border-gray-200 dark:bg-dark-primary sticky top-0 transition-all z-50"
        :class="{ 'bg-white dark:bg-gray-900': scrollBg, 'bg-light-primary dark:bg-dark-primary': !scrollBg }">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a class="flex items-center">
                <img src="http://localhost/portfolioLV/public/images/logoRDred.svg" class="h-10 mr-3"
                    alt="Raphaeldettori Logo" />
                <span
                    class="self-center text-2xl font-semibold whitespace-nowrap text-dark-secondary dark:text-white">Raphael
                    Dettori</span>
            </a>
            <button @click="showMobileMenu = !showMobileMenu" data-collapse-toggle="navbar-default" type="button"
                class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
            <div class="w-full md:block md:w-auto" :class="{ hidden: showMobileMenu }" id="navbar-default">
                <ul
                    class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-light-tail-500 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-dark-navy-100">
                    <li v-for="(navigation, index) in navigations" :key="index">
                        <a :href="navigation.href"
                            class="block py-2 pl-3 pr-4 text-dark-primary dark:text-light-primary hover:text-red-500"
                            aria-current="page">{{ navigation.name }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>