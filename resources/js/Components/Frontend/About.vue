<template>
    <section id="about" class="section bg-light-secondary dark:bg-dark-secondary">
        <div class="container mx-auto" v-motion :initial="{
            opacity: 0,
            y: 100,
        }" :visibleOnce="{
    opacity: 1,
    y: 0,
}">
            <div class="flex flex-col xl:flex-row gap-24">
                <img src="http://localhost/portfolioLV/public/images/pubAuto.png" alt="photo about"
                    class="object-cover h-full w-[400px] md:mx-auto lg:mx-0 rounded-2xl">
                <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div class="flex flex-col mb-8">
                        <h2 class="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">A propos</h2>
                        <p class="mb-4 text-xl text-gray-500 dark:text-paragraph"> <strong>Lorem ipsum dolor sit amet.</strong> </p>
                        <hr class="mb-8">
                        <p class="text-gray-500 dark:text-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellendus ut eligendi qui laudantium
                            neque,
                            ipsam nesciunt officia quo eaque, sed, voluptates voluptate totam corrupti incidunt magni minus
                            fuga
                            quaerat expedita? <br><br>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus reiciendis veniam praesentium
                            distinctio. Ipsa perspiciatis ipsam nostrum repellendus tempora! Magni nihil quae consectetur
                            unde reprehenderit repudiandae odit saepe numquam libero?</p>
                    </div>
                    <a href="#" class="btn">
                        Me contacter
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>