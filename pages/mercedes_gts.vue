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
    title: 'Mercedes GT-S AMG - Legendary Exotic Rentals',
    description: '',
    ogDescription: '',
    ogTitle: 'Mercedes GT-S AMG - Legendary Exotic Rentals',
})

export default {
    name: "MercedesGTS",
    data() {
        return {
            image: "https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/Mercedes_new_01.jpg",
            name: "Mercedes GT-S AMG",
            price: 800,
            hours: '24 Hours',
            info: '4.0L V8 TT | 7-Speed Auto | 503 HP',
            shortdescription: 'Rent a White Mercedes GT-S AMG M — a 2-seater Supercar with a 4.0L V8 engine, 503HP, and 479 LB-FT of torque!',
            description: 'Our custom Mercedes GT-S comes equipped with not only one of the highest specs straight from the factory but also loads of carbon fiber extras such as the rear diffuser, wing and a few other miscellaneous accessories. We also are sporting a beautiful set of AL13 wheels on this car and a Eurocharge stage 1 tune adding an additional 100hp.',
            brand: 'Mercedes',
            model: 'GT-S AMG',
            body: 'Coupe',
            seats: '2 Seater',
            color: 'White',
            enging: '4.0L V8 TT',
            transmission: '7-Speed Auto',
            torque: '479 LB-FT',
            startspeed: '3.7 Seconds',
            horsepower: '503 HP',
            drivetrain: 'RWD',
            gallery: [
                'https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/Mercedes_thumbnail.jpg',
                'https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/Mercedes_new_02.jpg',
                'https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/Mercedes_new_01.jpg',
            ]
        };
    },
    methods: {
        
    },
}

</script>