<script setup>
import Projects from "@/Components/Frontend/Projects.vue";

defineProps({
    skills: Object,
    projects: Object,
});
</script>

<template>
    <section
        id="portfolio"
        class="section bg-light-primary dark:bg-dark-primary min-h-[1400px]"
    >
        <div
            class="container mx-auto"
            v-motion
            :initial="{
                opacity: 0,
                y: 100,
            }"
            :visibleOnce="{
                opacity: 1,
                y: 0,
            }"
        >
            <div class="flex flex-col items-center text-center">
                <h2 class="section-title">Mes derniers projets</h2>
                <p class="subtitle text-gray-500 dark:text-paragraph">
                    Voici la liste de mes derniers projets, réalisés en solo ou
                    en équipe. Je suis actuelement en stage pour développer une
                    application e-commerce avec Laravel et Vue.js.
                </p>
            </div>
        </div>
        <Projects :skills="skills" :projects="projects" />
    </section>
</template>
