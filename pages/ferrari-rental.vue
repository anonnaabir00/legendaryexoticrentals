<template>
    <div class="w-full">
        <div class="grid grid-cols-2 place-items-center pt-12 pb-12">
            <div>
                <h1 class="text-3xl font-semibold">{{ name }}</h1>
                <p class="text-xl mt-4">{{ info }}</p>
            </div>

            <div class="text-center">
                <h2 class="text-2xl font-medium">{{ hours }}</h2>
                <p class="text-2xl font-bold mt-4">${{ price }}</p>
            </div>
        </div>

        <div class="grid place-items-center">
            <img class="w-4/6 rounded-xl" :src=image alt="">
        </div>

        <div class="grid place-items-center">
            <div class="w-4/6">
                <p class="text-2xl leading-relaxed mt-8">{{ shortdescription }}</p>
                <h2 class="text-4xl font-bold mt-8">Photos</h2>
                <ul class="grid grid-cols-2 gap-8 mt-8 mb-8">
                    <li v-for="image in gallery"><img class="w-full h-96 object-cover rounded-xl" :src=image alt=""></li>
                </ul>
                
                <h2 class="text-4xl font-bold mt-12 mb-12">Specification</h2>
                <div class="grid grid-cols-4 gap-8 mt-6 mb-12">
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

                        <div>
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

export default {
    name: "MclarenGT",
    data() {
        return {
            image: "https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/Ferrari_488_main.jpeg",
            name: "Ferrari 488",
            price: 1500,
            hours: '24 Hours',
            info: '3.9L V8 | 7-Speed Auto | 602 HP',
            shortdescription: 'Rent a Charcoal Ferrari — a 2-seater Supercar with a 3.9L V8 engine, 661HP, and 561 LB-FT of torque!',
            description: '',
            brand: 'Ferrari',
            model: '488 GTB',
            body: 'Coupe',
            seats: '2 Seater',
            color: 'Charcoal',
            enging: '3.9L V8',
            transmission: '7-Speed Auto',
            torque: '561 LB-FT',
            startspeed: '3.0 Seconds',
            horsepower: '661 HP',
            drivetrain: 'RWD',
            gallery: [
                'https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/Ferrari_488_main.jpeg',
                'https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/Ferrari_488_01.jpeg',
                'https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/Ferrari_488_02.jpeg',
                'https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/Ferrari_488_03.jpeg',
            ]
        };
    },
    methods: {
        
    },
}

</script>