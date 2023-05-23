<script setup></script>

<template>
    <section
        id="services"
        class="section bg-light-secondary dark:bg-dark-secondary"
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
                <h2 class="section-title">Ce que je propose</h2>
                <p class="subtitle text-gray-500 dark:text-paragraph">
                    J'accompagne le client dans sa réflexion pour élaborer un projet qui corresponde à ses attentes.
                    Je propose un suivi tout au long du processus de création pour des ajouts ou modifications si nécessaire.
                    Je gère egalement le déploiement, puis le maintien du site à jour.
                </p>
            </div>
            <div class="grid lg:grid-cols-4 gap-8">
                <!--CART 1-->
                <div
                    id="cartPen"
                    class="bg-light-tail-100 dark:bg-light-secondary p-6 rounded-2xl"
                >
                    <div
                        class="text-accent rounded-sm w-20 h-20 flex justify-center items-center mb-14 text-[28px]"
                    >
                        <svg
                            width="315"
                            height="250"
                            viewBox="0 0 315 340"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M80.5 249C-8.99997 249 -13 157.5 80.5 157.5V54H305V249H80.5Z"
                                stroke="black"
                                stroke-width="20"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M80.5 56.5V11C63.8333 12 10.1588 0.499989 10.1588 46.5C10.1587 78.1101 11.8254 168 12.1587 209.5"
                                stroke="black"
                                stroke-width="20"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M105 207.5H244"
                                stroke="black"
                                stroke-width="20"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M106 182.5H203"
                                stroke="black"
                                stroke-width="20"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-dasharray="52 10 66 88"
                            />
                            <mask id="path-5-inside-1_2_13" fill="white">
                                <rect
                                    x="102"
                                    y="73"
                                    width="77"
                                    height="78"
                                    rx="15"
                                />
                            </mask>
                            <rect
                                x="102"
                                y="73"
                                width="77"
                                height="78"
                                rx="15"
                                stroke="black"
                                stroke-width="40"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                mask="url(#path-5-inside-1_2_13)"
                            />
                        </svg>
                        <div class="absolute" id="pen">
                            <svg
                                width="50"
                                height="50"
                                viewBox="0 0 73 231"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.99994 42V190.5L36.9999 221L62.4999 190.5V42M9.99994 42V10H62.4999V42M9.99994 42H62.4999"
                                    stroke="black"
                                    stroke-width="20"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                    <h4
                        class="text-4xl font-medium mb-2 dark:text-dark-primary"
                    >
                        Web design
                    </h4>
                    <p class="text-white dark:text-dark-secondary">
                        Analyser les attentes du client pour la création de maquettes pour le design du site. 
                        Le choix de la navigation, la palette de couleurs, les polices d'écritures... 
                        Une fois cela validé, nous pouvons passer à l'étape de développement.
                    </p>
                </div>
                <!--CART 2-->
                <div
                    id="cartRect"
                    class="bg-light-tail-100 dark:bg-light-secondary p-6 rounded-2xl"
                >
                    <div
                        class="text-accent rounded-sm w-14 h-14 flex justify-center items-center mb-20 text-[28px]"
                    >
                        <svg
                            width="247"
                            height="250"
                            viewBox="0 0 247 250"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M47.5414 180.188H205.633M10 239.42H236.5V10H10V239.42Z"
                                stroke="black"
                                stroke-width="20"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M47.1243 136.807H110.528"
                                stroke="black"
                                stroke-width="20"
                                stroke-linecap="round"
                            />
                            <path
                                d="M47.1243 94.2597H108.859"
                                stroke="black"
                                stroke-width="20"
                                stroke-linecap="round"
                            />
                            <rect
                                x="17.9254"
                                y="16.674"
                                width="215.238"
                                height="37.5414"
                                fill="black"
                            />
                            <circle
                                cx="218.564"
                                cy="27.9365"
                                r="11.2624"
                                fill="#FF0000"
                            />
                        </svg>
                        <div class="absolute" id="rect">
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 74 74"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    width="50"
                                    height="50"
                                    rx="5"
                                    fill="black"
                                />
                            </svg>
                        </div>
                    </div>
                    <h4
                        class="text-4xl font-medium mb-2 dark:text-dark-primary"
                    >
                        Développement
                    </h4>
                    <p class="text-white dark:text-dark-secondary">
                        Développer le site de manière éfficace, rapide, et sécurisé. A chaque étape importante, le client 
                        est notifié. Une fois le squelette fonctionnel, le développement des animations et du dynamisme 
                        peuvent commencer, pour rendre ce site unique !
                    </p>
                </div>
                <!--CART 3-->
                <div
                    id="cartCircle"
                    class="bg-light-tail-100 dark:bg-light-secondary p-6 rounded-2xl"
                >
                    <div
                        class="text-accent rounded-sm w-12 h-12 flex justify-center items-center ml-4 mb-24 text-[28px]"
                    >
                        <svg
                            width="201"
                            height="201"
                            viewBox="0 0 201 201"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="100.5"
                                cy="100.5"
                                r="100.5"
                                fill="black"
                            />
                        </svg>
                    </div>
                    <div class="absolute" id="circle1">
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 115 113"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M114.429 103.903C29.4754 96.7387 11.6888 31.8693 13.4148 0.330232C3.36313 23.6949 -10.3296 76.1018 15.3127 98.8119C40.955 121.522 92.0746 111.669 114.429 103.903Z"
                                fill="black"
                            />
                        </svg>
                    </div>
                    <div class="absolute" id="circle2">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 115 113"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M114.429 103.903C29.4754 96.7387 11.6888 31.8693 13.4148 0.330232C3.36313 23.6949 -10.3296 76.1018 15.3127 98.8119C40.955 121.522 92.0746 111.669 114.429 103.903Z"
                                fill="black"
                            />
                        </svg>
                    </div>
                    <h4
                        class="text-4xl font-medium mb-2 dark:text-dark-primary"
                    >
                        Animations
                    </h4>
                    <p class="text-white dark:text-dark-secondary">
                        En suivant les décisions prisent lors de l'élaboration des maquettes, il faut rendre la navigation 
                        attractive et plaisante pour l'utilisateur, d'où l'importance d'utiliser des animations personnalisées.
                    </p>
                </div>
                <!--CART 4-->
                <div
                    id="cartTools"
                    class="bg-light-tail-100 dark:bg-light-secondary p-6 rounded-2xl"
                >
                    <div
                        id="tool1"
                        class="text-accent rounded-sm w-14 h-10 flex justify-center items-center mb-24 text-[28px]"
                    >
                        <svg
                            width="234"
                            height="237"
                            viewBox="0 0 234 150"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x="166.863"
                                y="146.96"
                                width="85.3513"
                                height="31"
                                rx="8"
                                transform="rotate(45.5708 166.863 146.96)"
                                stroke="black"
                                stroke-width="20"
                                stroke-linejoin="round"
                            />
                            <rect
                                x="23.3591"
                                y="7.07072"
                                width="35.9669"
                                height="22.8092"
                                rx="8"
                                transform="rotate(45.5708 23.3591 7.07072)"
                                stroke="black"
                                stroke-width="15"
                                stroke-linejoin="round"
                            />
                            <line
                                x1="153.418"
                                y1="157.488"
                                x2="42.4176"
                                y2="43.4881"
                                stroke="black"
                                stroke-width="20"
                            />
                            <path
                                d="M133 170.505L165.576 138"
                                stroke="black"
                                stroke-width="20"
                                stroke-linecap="round"
                            />
                        </svg>
                    </div>
                    <div class="absolute" id="tool2">
                        <svg
                            width="55"
                            height="55"
                            viewBox="0 0 233 232"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M106.5 105L65.5 142.5C16.3 134.5 6.66664 176.167 7.99997 198L24.5 180H49.5V205L30.5 222.5C90.9 233.3 95 188.333 89.5 164.5L128.5 127"
                                stroke="black"
                                stroke-width="15"
                            />
                            <path
                                d="M128.426 127.26L168.728 89.281C217.776 96.6372 226.821 54.9012 225.213 33.1137L209.031 51.3025L184.161 51.6243L183.838 26.6572L202.513 8.93558C142.287 -1.07269 138.789 43.8877 144.569 67.6189L106.256 105.572"
                                stroke="black"
                                stroke-width="15"
                            />
                        </svg>
                    </div>
                    <h4
                        class="text-4xl font-medium mb-2 dark:text-dark-primary"
                    >
                        Maintenance
                    </h4>
                    <p class="text-white dark:text-dark-secondary">
                        Le site est maintenant en ligne. Grâce à des outils personnalisées pour le client,
                        il peut ajouter ou modifier le contenu du site en un clic ! Lorsqu'une mise à jour ou une modification importante 
                        est nécessaire, la maintenance est assurée.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
#pen {
    margin-left: 50px;
    margin-bottom: 35px;
}

#rect {
    margin-left: 30px;
    margin-top: 5px;
}

#circle1 {
    margin-top: -120px;
    margin-left: 7px;
}

#circle2 {
    margin-top: -105px;
    margin-left: 0px;
}

#tool2{
    margin-top: -130px;
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

#cartCircle:hover #circle1 {
    animation: translateXY 0.5s ease forwards;
}

@keyframes translateXY {
    0% {
        transform: translate(0px, 0px);
    }

    50% {
        transform: translate(15px, -8px);
    }

    100% {
        transform: translate(0px, 0px);
    }
}

#cartCircle:hover #circle2 {
    animation: translateXY2 0.5s ease 0.1s forwards;
}

@keyframes translateXY2 {
    0% {
        transform: translate(0px, 0px);
    }

    50% {
        transform: translate(15px, -9px);
    }

    100% {
        transform: translate(0px, 0px);
    }
}

#cartTools:hover #tool1 {
    animation: rotateTool 0.5s ease forwards;
}

@keyframes rotateTool {
    0% {
        transform: rotate(0deg);
    }

    50% {
        transform: rotate(-45deg);
    }

    100% {
        transform: rotate(0deg);
    }
}

#cartTools:hover #tool2 {
    animation: rotateTool2 0.5s ease forwards;
}

@keyframes rotateTool2 {
    0% {
        transform: rotate(0deg);
    }

    50% {
        transform: rotate(45deg);
    }

    100% {
        transform: rotate(0deg);
    }
}
</style>
