<template>
    <div>

        <!-- Hero Main -->
        <div class="bg-hero bg-cover bg-center bg-no-repeat">
            <div class="grid place-items-center w-full sm:p-20 md:p-72 bg-black bg-opacity-40">
                <h1 class="text-white text-center font-bold leading-normal text-4xl opacity-100">Rent Your Dream Car</h1>
                <a class="bg-red-600 text-white text-base p-2 sm:pl-6 md:pl-12 sm:pr-6 md:pr-12 mt-6 rounded-md" href="/booking">Book A Supercar</a>
            </div>
        </div>

        <!-- Hero Main End -->

        <!-- Hero Sub -->
        <div class="flex w-full sm:h-56 md:h-[38rem]">
            <nuxt-img class="w-3/6 h-full object-cover"  src="https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/image11.jpeg" alt="" />
            <nuxt-img class="w-3/6 h-full object-cover" src="https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/image10-min.jpeg" alt="" />
            
        </div>

        <!-- Hero Sub End -->

        <!-- Services Section -->

        <div id="services" class="grid place-items-center sm:p-4 md:p-0 sm:mt-2 md:mt-24 sm:mb-2 md:mb-24">
            <div>
                <div class="flex justify-between items-center space-x-6">
                    <div class="p-4">
                        <p class="sm:text-5xl md:text-7xl font-bold text-gray-300">01</p>
                        <p class="text-sm">What We Offer</p>
                    </div>
                    <div class="p-4">
                        <a href="/must-have">
                            <p class="sm:text-2xl md:text-3xl font-bold sm:text-right md:text-left">Rental Requirements</p>
                        </a>
                    </div>
                </div>
            </div>

             <div>
                <div class="flex justify-between items-center space-x-28">
                    <div class="p-4">
                        <p class="sm:text-5xl md:text-7xl font-bold text-gray-300">02</p>
                        <p class="text-sm">What We Offer</p>
                    </div>
                    <div class="p-4">
                        <a href="/extra-packages">
                        <p class="sm:text-2xl md:text-3xl font-bold sm:text-right md:text-left">Extra Packages</p>
                        </a>
                    </div>
                    
                </div>
            </div>

             <div>
                <div class="flex justify-between items-center space-x-28">
                    <div class="p-4">
                        <p class="sm:text-5xl md:text-7xl font-bold text-gray-300">03</p>
                        <p class="text-sm">What We Offer</p>
                    </div>
                    <div class="p-4">
                        <a href="/other-services">
                        <p class="sm:text-2xl md:text-3xl font-bold sm:text-right md:text-left">Other Services</p>
                        </a>
                    </div>
                </div>
            </div>

            <div>

            </div>

            <div>

            </div>

        </div>

        <!-- Services Section End -->

        <!-- Video Section -->

        <div class="grid place-items-center w-full sm:p-4 md:p-0 sm:mt-2 md:mt-24 sm:mb-8 md:mb-24">
            <h2 class="sm:text-2xl md:text-4xl font-bold mb-8">Walkthrough</h2>
            <p class="sm:text-base md:text-lg leading-loose text-center mb-8">Check out our tutorial on how to easily check out one of our exotic vehicles.</p>
            <!--
                <video class="rounded-xl" width="1100" autoplay="autoplay" loop="loop" muted defaultMuted playsinline oncontextmenu="return false;"  preload="auto">
            <source src="https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/lasrental.mp4" type="video/mp4">
            </video>
            
            <video autoplay loop muted playsinline class="rounded-xl sm:w-5/6 md:w-3/6">
            <source src="https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/lasrental.mp4" type="video/mp4">
            </video>
            -->
            <video
            id="my-video"
            class="rounded-xl sm:w-5/6 md:w-2/5"
            controls
            preload="auto"
            poster="https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/lasvid.jpg"
            data-setup="{}"
            >
    <source src="https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/lasrental.mp4" type="video/mp4" /></video>
            <!-- <video playsinline class="rounded-xl sm:w-5/6 md:w-3/6">
            <source src="https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/lasrental.mp4" type="video/mp4">
            </video>-->
        </div>

        <!-- Video Section End -->

        <!-- Available Cars Section -->

        <div id="cars" class="grid place-items-center w-full sm:md-8 md:mt-24 sm:mb-8 md:mb-24">
            <h2 class="sm:text-2xl md:text-4xl text-center font-bold mb-8">Available Cars</h2>
            <p class="sm:text-base md:text-lg mb-8">Book your favorite car before booked by others.</p>

            <div class="grid sm:grid-cols-1 md:grid-cols-2 mt-4 mb-4 gap-8 sm:w-4/5 md:w-3/5">
                <div class="bg-white shadow-lg">
                    <a href="/mercedes-gts"><nuxt-img class="w-full sm:h-56 md:h-96 object-cover" src="https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/Mercedes_thumbnail.jpg" alt="" /></a>
                    <div class="text-center mt-8 mb-8">
                    <h4 class="mb-4">Mercedes GT-S AMG</h4>
                    <p class="mb-6">24HR: $800</p>
                    <a class="bg-red-600 text-white p-2 pl-8 pr-8 rounded-md" href="/mercedes-gts">Book Now</a>
                    </div>    
                </div>


                <div class="bg-white shadow-lg">
                    <a href="/maclaren-gt-rental"><nuxt-img class="w-full sm:h-56 md:h-96 object-cover" src="https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/Mclaren_GT_01.jpg" alt="" /></a>
                    <div class="text-center mt-8 mb-8">
                    <h4 class="mb-4">Mclaren GT</h4>
                    <p class="mb-6">24HR: $1500</p>
                    <a class="bg-red-600 text-white p-2 pl-8 pr-8 rounded-md" href="/maclaren-gt-rental">Book Now</a>
                    </div>
                    
                </div>

            </div>


            <div class="grid sm:grid-cols-1 md:grid-cols-3 gap-8 mt-8 mb-8 sm:w-4/5 md:w-3/5">
                <div class="bg-white shadow-lg">
                    <a href="/ferrari-rental"><nuxt-img class="w-full sm:h-56 md:h-72 object-cover" src="https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/Ferrari_488_main.jpeg" alt="" /></a>
                    <div class="text-center mt-8 mb-8">
                    <h4 class="mb-4">Ferrari 488</h4>
                    <p class="mb-6">24HR: $1500</p>
                    <a class="bg-red-600 text-white p-2 pl-8 pr-8 rounded-md" href="/ferrari-rental">Book Now</a>
                    </div>
                    
                </div>


                <div class="bg-white shadow-lg pb-4">
                    <a href="/lamborghini-huracan-rental"><nuxt-img class="w-full sm:h-56 md:h-72 object-cover" src="https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/Lamborghini_HC_Thumbnail.jpg" alt="" /></a>
                    <div class="text-center mt-8 mb-8">
                    <h4 class="mb-4">Lamborghini Huracan</h4>
                    <p class="mb-6">24HR: $1500</p>
                    <a class="bg-red-600 text-white p-2 pl-8 pr-8 rounded-md" href="/lamborghini-huracan-rental">Book Now</a>
                    </div>
                    
                </div>

                <div class="bg-white shadow-lg pb-4">
                    <a href="/audi-r8-rental"><nuxt-img class="w-full sm:h-56 md:h-72 object-cover" src="https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/nissan_gtr_new_2022_june_02.jpeg" alt="" /></a>
                    <div class="text-center mt-8 mb-8">
                    <h4 class="mb-4">Nissan GTR</h4>
                    <p class="mb-6">24HR: $800</p>
                    <a class="bg-red-600 text-white p-2 pl-8 pr-8 rounded-md" href="/audi-r8-rental">Book Now</a>
                    </div>
                    
                </div>

            </div>
        </div>

        <!-- Available Cars Section End -->

        <!-- Map Section -->

        <div id="locations" class="grid place-items-center w-full sm:mt-8 md:mt-24 sm:p-8 md:p-16 bg-color-invert">
            <h2 class="sm:text-2xl md:text-4xl text-center font-bold mb-8 text-white">Car Rental Location</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.561629911873!2d-111.925248584545!3d33.616676880726644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b744148b7a2a7%3A0x184791015cb67629!2s7326%20E%20Evans%20Rd%2C%20Scottsdale%2C%20AZ%2085260%2C%20USA!5e0!3m2!1sen!2sbd!4v1679031308417!5m2!1sen!2sbd" class="sm:w-full md:w-4/6 sm:h-56 md:h-96" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <!-- Map Section End -->

    </div>
</template>

<script setup>
definePageMeta({
  layout: "full-width",
});

useSeoMeta({
    title: 'Legendary Exotic Rentals - Launch Auto Sports Rentals',
    description: '',
    ogDescription: '',
    ogTitle: 'Legendary Exotic Rentals - Launch Auto Sports Rentals',
})
</script>



