<script setup>
defineProps({
    skills: Object
});
</script>

<template>
    <section class="bg-light-secondary dark:bg-dark-secondary py-12">
        <div class="container mx-auto">
            <div class="flex justify-around flex-wrap">
                <div class="flex items-center justify-center" v-for="skill in skills.data" :key="skill.id">
                    <div>
                        <img :src="skill.image" :alt="skill.name" class="h-20 mb-4">
                        <h4 class="text-center">{{ skill.name }}</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>