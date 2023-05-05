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
    title: 'Lamborghini Huracan - Legendary Exotic Rentals',
    description: '',
    ogDescription: '',
    ogTitle: 'Lamborghini Huracan - Legendary Exotic Rentals',
})

export default {
    name: "LamborghiniHuracan",
    data() {
        return {
            image: "https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/Lamborghini_HC_Thumbnail.jpg",
            name: "Lamborghini Huracan",
            price: 1000,
            hours: '24 Hours',
            info: '5.2 V10 | 7-Speed Auto | 602 HP',
            shortdescription: 'Rent a White Lamborghini Huracan — a 2-seater Supercar with a 5.2 V10 engine, 602HP, and 412 LB-FT of torque!',
            description: '',
            brand: 'Lamborghini',
            model: 'Huracan',
            body: 'Spyder',
            seats: '2 Seater',
            color: 'White',
            enging: '5.2 V10',
            transmission: '7-Speed Auto',
            torque: '412 LB-FT',
            startspeed: '3.2 Seconds',
            horsepower: '602 HP',
            drivetrain: 'AWD',
            gallery: [
                'https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/Lamborghini_HC_Thumbnail.jpg',
                'https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/Lamborghini_HC_01.jpg',
                'https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/Lamborghini_HC_02.jpg',
            ]
        };
    },
    methods: {
        
    },
}

</script>