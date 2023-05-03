<template>
    <div class="w-full">
        <div class="grid sm:grid-cols-1 md:grid-cols-2 place-items-center pt-12 pb-12">
            <div>
                <h1 class="text-3xl font-semibold">{{ name }}</h1>
                <p class="text-xl mt-4 leading-loose">{{ info }}</p>
            </div>

            <div class="text-center">
                <h2 class="text-2xl font-medium">{{ hours }}</h2>
                <p class="text-2xl font-bold mt-4">${{ price }}</p>
            </div>
        </div>

        <div class="grid place-items-center">
            <img class="sm:w-5/6 md:w-4/6 rounded-xl" :src=image alt="">
        </div>

        <div class="grid place-items-center">
            <div class="sm:w-5/6 md:w-4/6">
                <p class="sm:text-xl md:text-2xl leading-loose mt-8 sm:text-center md:text-left">{{ shortdescription }}</p>
                <h2 class="sm:text-2xl md:text-4xl font-bold mt-8 sm:text-center md:text-left">Photos</h2>
                <ul class="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mt-8 mb-8">
                    <li v-for="image in gallery"><img class="w-full sm:h-64 md:h-96 object-cover rounded-xl" :src=image alt=""></li>
                </ul>
                <h2 class="sm:text-2xl md:text-4xl font-bold mt-8 sm:text-center md:text-left">Description</h2>
                <p class="sm:text-xl md:text-2xl leading-loose mt-4 mb-4 sm:text-center md:text-left">{{ description }}</p>
                <h2 class="sm:text-2xl md:text-4xl font-bold sm:text-center md:text-left mt-12 mb-12">Specification</h2>
                <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-6 mb-12 sm:text-center md:text-left">
                    <div class="grid grid-cols-1 gap-6">
                        <div>
                            <h4 class="text-2xl font-bold">Brand</h4>
                            <p class="text-xl mt-2 mb-2">{{ brand }}</p>
                        </div>

                        <div>
                            <h4 class="text-2xl font-bold">Color</h4>
                            <p class="text-xl mt-2 mb-2">{{ color }}</p>
                        </div>

                        <div>
                            <h4 class="text-2xl font-bold">0-60 MPH</h4>
                            <p class="text-xl mt-2 mb-2">{{ startspeed }}</p>
                        </div>
                        
                    </div>

                    <div class="grid grid-cols-1 gap-6">
                        <div>
                            <h4 class="text-2xl font-bold">Model</h4>
                            <p class="text-xl mt-2 mb-2">{{ model }}</p>
                        </div>

                        <div>
                            <h4 class="text-2xl font-bold">Engine</h4>
                            <p class="text-xl mt-2 mb-2">{{ enging }}</p>
                        </div>

                        <div>
                            <h4 class="text-2xl font-bold">Horsepower</h4>
                            <p class="text-xl mt-2 mb-2">{{ horsepower }}</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-6">
                        <div>
                            <h4 class="text-2xl font-bold">Body</h4>
                            <p class="text-xl mt-2 mb-2">{{ body }}</p>
                        </div>

                        <div>
                            <h4 class="text-2xl font-bold">Transmission</h4>
                            <p class="text-xl mt-2 mb-2">{{ transmission }}</p>
                        </div>

                        <div>
                            <h4 class="text-2xl font-bold">Drivetrain</h4>
                            <p class="text-xl mt-2 mb-2">{{ drivetrain }}</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-6">
                        <div>
                            <h4 class="text-2xl font-bold">Seats</h4>
                            <p class="text-xl mt-2 mb-2">{{ seats }}</p>
                        </div>

                        <div class="sm:-mt-20 md:mt-0">
                            <h4 class="text-2xl font-bold">Torque</h4>
                            <p class="text-xl mt-2 mb-2">{{ torque }}</p>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script>
definePageMeta({
  layout: "full-width",
});

useSeoMeta({
    title: 'Mclaren GT - Legendary Exotic Rentals',
    description: '',
    ogDescription: '',
    ogTitle: 'Mclaren GT - Legendary Exotic Rentals',
})

export default {
    name: "MclarenGT",
    data() {
        return {
            image: "https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/Mclaren_GT_Thumbnail.jpg",
            name: "Mclaren GT",
            price: 1500,
            hours: '24 Hours',
            info: '4.0L V8 TT | 7-Speed Auto | 612 HP',
            shortdescription: 'Rent a blue Mclaren GT — a 2-seater Supercar with a 4.0L V8 TT engine, 612HP, and 465 LB-FT of torque!',
            description: 'If you want the ultimate head turner while in town you can’t go wrong with this beast. Our McLaren GT is sporting a full Gintani exhaust upgrade from the downpipes back and is on one of Alex Gintani’s craziest tunes to date. This car is pushing near 800hp, has the nastiest exhaust note, and shoots 4ft flames on upshifts.',
            brand: 'Mclaren',
            model: 'GT',
            body: 'Coupe',
            seats: '2 Seater',
            color: 'Blue',
            enging: '4.0L V8 TT',
            transmission: '7-Speed Auto',
            torque: '465 LB-FT',
            startspeed: '2.8 Seconds',
            horsepower: '612 HP',
            drivetrain: 'RWD',
            gallery: [
                'https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/Mclaren_GT_01.jpg',
                'https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/Mclaren_GT_02.jpg',
                'https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/Mclaren_GT_03.jpg',
                'https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/Mclaren_GT_04.jpg',
                'https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/Mclaren_GT_05.jpg',
                'https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/Mclaren_GT_06.jpg',
            ]
        };
    },
    methods: {
        
    },
}

</script>