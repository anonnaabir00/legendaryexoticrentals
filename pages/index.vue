<template>
    <div>
        <Header />

        <!-- Hero Main -->
        <div class="bg-hero bg-cover bg-center bg-no-repeat">
            <div class="grid place-items-center w-full p-72 bg-black bg-opacity-40">
                <h1 class="text-white text-4xl opacity-100">Rent Your Dream Car</h1>
                <a class="bg-red-600 text-white p-2 pl-12 pr-12 mt-6 rounded-md" href="#">Book A Supercar</a>
            </div>
        </div>

        <!-- Hero Main End -->

        <!-- Hero Sub -->
        <div class="flex w-full h-[38rem]">
            <img class="w-full h-full object-cover" src="https://legendaryexoticrentals.com/wp-content/uploads/2022/03/image11-768x768.jpeg" alt="">
            <img class="w-full h-full object-cover" src="https://legendaryexoticrentals.com/wp-content/uploads/2022/03/image10-min-768x768.jpeg" alt="">
        </div>

        <!-- Hero Sub End -->

        <!-- Services Section -->

        <div id="services" class="grid place-items-center mt-24 mb-24">
            <div>
                <div class="flex justify-between items-center space-x-6">
                    <div class="p-4">
                        <p class="text-7xl font-bold text-gray-300">01</p>
                        <p class="text-sm">What We Offer</p>
                    </div>
                    <div class="p-4">
                        <a href="#">
                            <p class="text-3xl font-bold text-left">Rental Requirements</p>
                        </a>
                    </div>
                </div>
            </div>

             <div>
                <div class="flex justify-between items-center space-x-28">
                    <div class="p-4">
                        <p class="text-7xl font-bold text-gray-300">02</p>
                        <p class="text-sm">What We Offer</p>
                    </div>
                    <div class="p-4">
                        <a href="#">
                        <p class="text-3xl font-bold text-left">Extra Packages</p>
                        </a>
                    </div>
                    
                </div>
            </div>

             <div>
                <div class="flex justify-between items-center space-x-28">
                    <div class="p-4">
                        <p class="text-7xl font-bold text-gray-300">03</p>
                        <p class="text-sm">What We Offer</p>
                    </div>
                    <div class="p-4">
                        <a href="#">
                        <p class="text-3xl font-bold text-left">Other Services</p>
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

        <div class="grid place-items-center w-full mt-24 mb-24">
            <h2 class="text-4xl font-bold mb-8">RALLY PACKAGES</h2>
            <p class="text-lg mb-8">Call now to book one of our exclusive Legendary regularly hosted Rally’s or partnered Fuel Run Rally’s with the vehicle of your dreams</p>
            <video class="rounded-xl" width="1100" autoplay muted>
            <source src="https://legendaryexoticrentals.com/wp-content/uploads/2022/03/Sam-rental-company-video.mp4" type="video/mp4">
            </video>
        </div>

        <!-- Video Section End -->

        <!-- Available Cars Section -->

        <div class="grid place-items-center w-full mt-24 mb-24">
            <h2 class="text-4xl font-bold mb-8">Available Cars</h2>
            <p class="text-lg mb-8">Book your favorite car before booked by others.</p>

            <div class="grid grid-cols-2 mt-4 mb-4 gap-8 w-3/5">
                <div class="bg-white shadow-lg">
                    <img class="w-full h-96 object-cover" src="https://legendaryexoticrentals.com/wp-content/uploads/2022/03/Mercedes_thumbnail-scaled.jpg" alt="">
                    <div class="text-center mt-8 mb-8">
                    <h4 class="mb-4">Mercedes GT-S AMG</h4>
                    <p class="mb-6">24HR: $800</p>
                    <a class="bg-red-600 text-white p-2 pl-8 pr-8 rounded-md" href="#">Book Now</a>
                    </div>
                    
                </div>


                <div class="bg-white shadow-lg">
                    <img class="w-full h-96 object-cover" src="https://legendaryexoticrentals.com/wp-content/uploads/2022/03/Mclaren_GT_01-scaled.jpg" alt="">
                    <div class="text-center mt-8 mb-8">
                    <h4 class="mb-4">Mercedes GT-S AMG</h4>
                    <p class="mb-6">24HR: $800</p>
                    <a class="bg-red-600 text-white p-2 pl-8 pr-8 rounded-md" href="#">Book Now</a>
                    </div>
                    
                </div>

            </div>


            <div class="grid grid-cols-3 gap-8 mt-8 mb-8 w-3/5">
                <div class="bg-white shadow-lg">
                    <img class="w-full h-72 object-cover" src="https://legendaryexoticrentals.com/wp-content/uploads/2022/03/Ferrari_488_main-scaled.jpeg" alt="">
                    <div class="text-center mt-8 mb-8">
                    <h4 class="mb-4">Ferrari 488</h4>
                    <p class="mb-6">24HR: $1500</p>
                    <a class="bg-red-600 text-white p-2 pl-8 pr-8 rounded-md" href="#">Book Now</a>
                    </div>
                    
                </div>


                <div class="bg-white shadow-lg pb-4">
                    <img class="w-full h-72 object-cover" src="https://legendaryexoticrentals.com/wp-content/uploads/2022/03/Lamborghini_HC_Thumbnail.jpg" alt="">
                    <div class="text-center mt-8 mb-8">
                    <h4 class="mb-4">Lamborghini Huracan</h4>
                    <p class="mb-6">24HR: $1500</p>
                    <a class="bg-red-600 text-white p-2 pl-8 pr-8 rounded-md" href="#">Book Now</a>
                    </div>
                    
                </div>

                <div class="bg-white shadow-lg pb-4">
                    <img class="w-full h-72 object-cover" src="https://legendaryexoticrentals.com/wp-content/uploads/2022/06/nissan_gtr_new_2022_june_02.jpeg" alt="">
                    <div class="text-center mt-8 mb-8">
                    <h4 class="mb-4">Nissan GTR</h4>
                    <p class="mb-6">24HR: $800</p>
                    <a class="bg-red-600 text-white p-2 pl-8 pr-8 rounded-md" href="#">Book Now</a>
                    </div>
                    
                </div>

            </div>
        </div>

        <!-- Available Cars Section End -->

        <!-- Map Section -->

        <div class="grid place-items-center w-full mt-24 p-16 bg-color-invert">
            <h2 class="text-4xl font-bold mb-8 text-white">Car Rental Location</h2>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.561629911873!2d-111.925248584545!3d33.616676880726644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b744148b7a2a7%3A0x184791015cb67629!2s7326%20E%20Evans%20Rd%2C%20Scottsdale%2C%20AZ%2085260%2C%20USA!5e0!3m2!1sen!2sbd!4v1679031308417!5m2!1sen!2sbd" width="1100" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <!-- Map Section End -->

        <Footer />


    </div>
</template>
