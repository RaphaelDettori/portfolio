<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';

const showMessage = ref(false);

const form = useForm({
    name: "",
    email: "",
    body: ""
});

function setShowMessage(value) {
    showMessage.value = value;
};

function cleanForm() {
    form.reset();
    setShowMessage(true),
        setTimeout(() => setShowMessage(false), 4000)
};

const submit = () => {
    form.post(route('contact'), {
        preserveScroll: true,
        onSuccess: () => cleanForm(),
    })
};
</script>

<template>
    <section id="contact" class="section bg-light-primary dark:bg-dark-primary">
        <div class="container mx-auto" v-motion :initial="{
            opacity: 0,
            y: 100,
        }" :visibleOnce="{
    opacity: 1,
    y: 0,
}">
            <div class="flex flex-col items-center text-center">
                <h2 class="section-title">Me contacter</h2>
                <p class="subtitle text-gray-500 dark:text-paragraph">
                    Pour toutes informations sur mes services, comme un devis ou simplement une prise de contact, veuillez 
                    m'envoyer un message via le formulaire ci-dessous. J'y répondrais dans les 24h.
                </p>
            </div>
            <div class="flex flex-col lg:flex-row lg:gap-x-8">
                <div class="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
                    <div class="flex flex-col lg:flex-row gap-x-4">
                        <div class="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]">
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#000000"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#000000" stroke-width="2"
                                    stroke-linecap="round" />
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-body text-xl mb-1">Vous avez une question ?</h4>
                            <P class="mb-1 text-gray-500 dark:text-paragraph">Je suis là pour y répondre 🤙</P>
                            <p class="text-accent font-normal">contact@raphaeldettori.com</p>
                        </div>
                    </div>
                    <div class="flex flex-col lg:flex-row gap-x-4">
                        <div class="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]">
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="Navigation / Map_Pin">
                                    <g id="Vector">
                                        <path
                                            d="M5 9.92285C5 14.7747 9.24448 18.7869 11.1232 20.3252C11.3921 20.5454 11.5281 20.6568 11.7287 20.7132C11.8849 20.7572 12.1148 20.7572 12.271 20.7132C12.472 20.6567 12.6071 20.5463 12.877 20.3254C14.7557 18.7871 18.9999 14.7751 18.9999 9.9233C18.9999 8.08718 18.2625 6.32605 16.9497 5.02772C15.637 3.72939 13.8566 3 12.0001 3C10.1436 3 8.36301 3.7295 7.05025 5.02783C5.7375 6.32616 5 8.08674 5 9.92285Z"
                                            stroke="#000000" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9Z"
                                            stroke="#000000" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-body text-xl mb-1">Emplacement actuel 🧰</h4>
                            <P class="mb-1 text-gray-500 dark:text-paragraph">Lyon, France</P>
                        </div>
                    </div>
                </div>
                <form @submit.prevent="submit" class="space-y-8 w-full max-w-md">
                    <div v-if="showMessage"
                        class="m-2 p-4 bg-light-tail-500 dark:bg-dark-navy-100 text-light-secondary rounded-lg">
                        Merci pour votre message, j'y répondrai dans les 24h 🤙
                    </div>
                    <div class="flex gap-8">
                        <div>
                            <input v-model="form.name" type="text" class="input" placeholder="Votre nom">
                            <span v-if="form.errors.name" class="text-sm m-2 text-red-400">{{ form.errors.name }}</span>
                        </div>
                        <div>
                            <input v-model="form.email" type="email" class="input" placeholder="Votre email">
                            <span v-if="form.errors.email" class="text-sm m-2 text-red-400">{{ form.errors.email }}</span>
                        </div>
                    </div>
                    <textarea v-model="form.body" class="textaera" placeholder="Votre message"
                        spellcheck="false"></textarea>
                    <span v-if="form.errors.body" class="text-sm m-2 text-red-400">{{ form.errors.body }}</span>
                    <button type="submit" class="btn">Envoyer</button>
                </form>
            </div>
        </div>
    </section>
</template>