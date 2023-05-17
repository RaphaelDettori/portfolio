<script setup></script>

<template>
    <section id="home" class="bg-light-primary dark:bg-dark-primary h-screen">
        <div
            class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
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
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1
                    class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
                >
                    Développeur web
                </h1>
                <p
                    class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
                >
                    From checkout to global sales tax compliance, companies
                    around the world use Flowbite to simplify their payment
                    stack.
                </p>
                <a href="#" class="btn">
                    Get started
                    <svg
                        class="w-5 h-5 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </a>
            </div>
            <div id="pc">
                <img
                    src="http://localhost/portfolioLV/public/images/old_pc7.png"
                    alt="ancien ordinateur"
                    id="imgPC"
                />
                <div id="voyant">
                    <p id="test">RAPHAELDETTORI.COM</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
#pc {
    width: 60vh;
    height: 100%;
}

#test {
    width: fit-content;
    height: 100%;
    font-size: 200%;
    animation: text 10s linear infinite;
    transform: translateX(20%);
    color: rgb(235, 14, 14);
    font-weight: bold;
}

@keyframes text {
    to {
        transform: translateX(-100%);
    }
}

#voyant {
    position: relative;
    bottom: 42.5%;
    left: 40.5%;
    width: 10.5%;
    height: 5.8%;
    background-color: rgba(88, 88, 88, 0.5);
    transform: skewY(17.6deg);
    overflow: hidden;
}

</style>
