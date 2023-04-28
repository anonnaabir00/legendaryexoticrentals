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
                <p class="text-2xl">{{ shortdescription }}</p>
                <h2 class="text-4xl font-bold">Photos</h2>
                <div class="grid grid-cols-2 gap-6">
                    <img :src=image alt="">
                    <img :src=image alt="">
                    <img :src=image alt="">
                </div>
                <h2 class="text-4xl font-bold">Description</h2>
                <p class="text-2xl">{{ description }}</p>
                <h2 class="text-4xl font-bold">Specification</h2>
                <div class="grid grid-cols-4">
                    <div>
                        <div>
                            <p>Brand</p>
                            <p>{{ brand }}</p>
                        </div>

                        <div>
                            <p>Brand</p>
                            <p>Mercedes</p>
                        </div>
                    </div>

                    <div>
                        <p>Model</p>
                        <p>GT-S AMG</p>
                    </div>

                    <div>
                        <p>Model</p>
                        <p>GT-S AMG</p>
                    </div>

                    <div>
                        <p>Model</p>
                        <p>GT-S AMG</p>
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
        };
    },
    methods: {
        
    },
}

</script>