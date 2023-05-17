<script setup>
</script>

<template>
    <section id="services" class="section bg-light-secondary dark:bg-dark-secondary">
        <div class="container mx-auto" v-motion :initial="{
            opacity: 0,
            y: 100,
        }" :visibleOnce="{
    opacity: 1,
    y: 0,
}">
            <div class="flex flex-col items-center text-center">
                <h2 class="section-title">
                    Ce que je propose
                </h2>
                <p class="subtitle text-gray-500 dark:text-paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nesciunt ullam ad error amet est,
                    eos, et id rerum modi, molestias eaque accusamus inventore. Modi asperiores ad beatae reiciendis animi?
                </p>
            </div>
            <div class="grid lg:grid-cols-4 gap-8">
                <div id="cartPen" class="bg-light-tail-100 dark:bg-light-secondary p-6 rounded-2xl">
                    <div class="text-accent rounded-sm w-20 h-20 flex justify-center items-center mb-14 text-[28px]">
                        <svg width="315" height="250" viewBox="0 0 315 259" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M80.5 249C-8.99997 249 -13 157.5 80.5 157.5V54H305V249H80.5Z" stroke="black"
                                stroke-width="20" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M80.5 56.5V11C63.8333 12 10.1588 0.499989 10.1588 46.5C10.1587 78.1101 11.8254 168 12.1587 209.5"
                                stroke="black" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M105 207.5H244" stroke="black" stroke-width="20" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M106 182.5H203" stroke="black" stroke-width="20" stroke-linecap="round"
                                stroke-linejoin="round" stroke-dasharray="52 10 66 88" />
                            <mask id="path-5-inside-1_2_13" fill="white">
                                <rect x="102" y="73" width="77" height="78" rx="15" />
                            </mask>
                            <rect x="102" y="73" width="77" height="78" rx="15" stroke="black" stroke-width="40"
                                stroke-linecap="round" stroke-linejoin="round" mask="url(#path-5-inside-1_2_13)" />
                        </svg>
                        <div class="absolute" id="pen">
                            <svg width="50" height="50" viewBox="0 0 73 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.99994 42V190.5L36.9999 221L62.4999 190.5V42M9.99994 42V10H62.4999V42M9.99994 42H62.4999"
                                    stroke="black" stroke-width="20" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <h4 class="text-4xl font-medium mb-2 dark:text-dark-primary">
                        Web design
                    </h4>
                    <p class="text-white dark:text-dark-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nesciunt ullam ad error amet est,
                        eos, et id rerum modi,
                    </p>
                </div>
                <div id="cartRect" class="bg-light-tail-100 dark:bg-light-secondary p-6 rounded-2xl">
                    <div class="text-accent rounded-sm w-14 h-14 flex justify-center items-center mb-20 text-[28px]">
                        <svg width="247" height="250" viewBox="0 0 247 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.5414 180.188H205.633M10 239.42H236.5V10H10V239.42Z" stroke="black" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M47.1243 136.807H110.528" stroke="black" stroke-width="20" stroke-linecap="round"/>
                            <path d="M47.1243 94.2597H108.859" stroke="black" stroke-width="20" stroke-linecap="round"/>
                            <rect x="17.9254" y="16.674" width="215.238" height="37.5414" fill="black"/>
                            <circle cx="218.564" cy="27.9365" r="11.2624" fill="#FF0000"/>
                        </svg>
                        <div class="absolute" id="rect">
                            <svg width="25" height="25" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="50" height="50" rx="5" fill="black"/>
                            </svg>
                        </div>
                    </div>
                    <h4 class="text-4xl font-medium mb-2 dark:text-dark-primary">
                        Développement
                    </h4>
                    <p class="text-white dark:text-dark-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nesciunt ullam ad error amet est,
                        eos, et id rerum modi,
                    </p>
                </div>
                <div class="bg-light-tail-100 dark:bg-light-secondary p-6 rounded-2xl">
                    <div class="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]">
                        <svg fill="#000000" width="800px" height="800px" viewBox="0 0 36 36"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="bb9f4e02-7318-4dbb-9960-e0435cf0cad7" data-name="Layer 3">
                                <path d="M3.5,23.77a6.41,6.41,0,0,0,9.33,8.67A11.65,11.65,0,0,1,3.5,23.77Z" />
                                <path d="M7.68,14.53a9.6,9.6,0,0,0,13.4,13.7A14.11,14.11,0,0,1,7.68,14.53Z" />
                                <path d="M21.78,2A12.12,12.12,0,1,1,9.66,14.15,12.12,12.12,0,0,1,21.78,2" />
                            </g>
                        </svg>
                    </div>
                    <h4 class="text-4xl font-medium mb-2 dark:text-dark-primary">
                        Animations
                    </h4>
                    <p class="text-white dark:text-dark-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nesciunt ullam ad error amet est,
                        eos, et id rerum modi,
                    </p>
                </div>
                <div class="bg-light-tail-100 dark:bg-light-secondary p-6 rounded-2xl">
                    <div class="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]">
                        <svg width="800px" height="800px" viewBox="0 0 32 32" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="icomoon-ignore">
                            </g>
                            <path
                                d="M29.532 25.76l-5.655-5.655 0.754-0.754-0.754-0.754-2.261 2.261-3.771-3.77 4.53-4.532c0.603 0.215 1.234 0.324 1.882 0.324 1.493 0 2.897-0.582 3.954-1.637 1.63-1.631 2.092-4.054 1.178-6.174l-0.311-0.722-2.43 2.43-1.956 0.027 0.026-1.866 2.477-2.477-0.72-0.312c-0.706-0.306-1.457-0.461-2.229-0.461-1.494 0-2.897 0.582-3.952 1.637-1.546 1.545-2.043 3.802-1.311 5.84l-4.529 4.529-6.409-6.408 0.754-0.754-4.145-4.146-2.264 2.261 4.147 4.147 0.753-0.754 6.409 6.408-4.529 4.529c-0.605-0.217-1.239-0.326-1.888-0.326-1.493 0-2.897 0.582-3.953 1.637-1.633 1.632-2.095 4.059-1.176 6.181l0.312 0.72 2.477-2.477 1.865-0.025-0.027 1.956-2.43 2.43 0.722 0.311c0.704 0.303 1.452 0.458 2.221 0.458 1.494 0 2.897-0.581 3.952-1.636 1.544-1.544 2.041-3.799 1.314-5.833l4.532-4.532 3.771 3.769-2.263 2.263 0.754 0.754 0.754-0.754 5.654 5.654c0.503 0.504 1.174 0.781 1.885 0.781s1.381-0.277 1.885-0.781c1.039-1.039 1.039-2.73-0-3.769zM3.899 4.648l0.754-0.753 2.638 2.638-0.754 0.754-2.639-2.639zM11.448 22.456c0.739 1.716 0.364 3.679-0.955 4.999-0.854 0.854-1.989 1.324-3.198 1.324-0.347 0-0.689-0.039-1.021-0.116l1.569-1.569 0.047-3.485-3.394 0.046-1.619 1.619c-0.356-1.51 0.081-3.103 1.208-4.229 0.854-0.854 1.99-1.325 3.199-1.325 0.626 0 1.233 0.125 1.806 0.373l0.333 0.144 10.819-10.819-0.144-0.333c-0.744-1.719-0.37-3.682 0.952-5.004 0.854-0.854 1.99-1.325 3.198-1.325 0.35 0 0.695 0.040 1.030 0.117l-1.618 1.618-0.047 3.394 3.485-0.047 1.57-1.57c0.352 1.507-0.086 3.097-1.209 4.221-0.855 0.854-1.991 1.325-3.2 1.325-0.624 0-1.23-0.125-1.801-0.371l-0.332-0.143-10.821 10.823 0.143 0.332zM28.779 28.775c-0.302 0.302-0.704 0.469-1.131 0.469s-0.829-0.167-1.131-0.469l-5.654-5.654 2.262-2.262 5.655 5.655c0.624 0.624 0.624 1.638 0.001 2.261z"
                                fill="#000000">
                            </path>
                        </svg>
                    </div>
                    <h4 class="text-4xl font-medium mb-2 dark:text-dark-primary">
                        Web design
                    </h4>
                    <p class="text-white dark:text-dark-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nesciunt ullam ad error amet est,
                        eos, et id rerum modi,
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
#pen {
    margin-left: 50px;
    margin-bottom: 15px;
}

#rect {
    margin-left: 30px;
    margin-top: 5px;
}


#cartPen:hover #pen {
    animation: rotate 0.5s ease forwards;
}

@keyframes rotate {
    0% {
        rotate: 0deg;
    }

    33% {
        rotate: 15deg;
    }

    66% {
        rotate: -15deg;
    }

    100% {
        rotate: 0deg;
    }
}

#cartRect:hover #rect {
    animation: translate 0.5s ease forwards;
}

@keyframes translate {
    0% {
        transform: translateX(0px);
    }

    50% {
        transform: translateX(-20px);
    }

    100% {
        transform: translateX(0px);
    }
}
</style>