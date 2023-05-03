<template>
    <div class="grid place-items-center bg-private-tours">
        <div class="bg-black bg-opacity-30 pt-40 pb-40 w-full text-center">
            <h1 class="text-white text-5xl font-bold">LUXURY PRIVATE TOURS</h1>
            <p class="text-white text-2xl mt-6">Your Southwest Adventure Awaits</p>
        </div>
    </div>

    <div class="flex justify-center bg-gray-50">
        <div class="grid grid-cols-2 p-16">
            <div class="mt-6">
                <h2 class="text-4xl font-bold">Why Private Tours?</h2>
                <ul class="grid grid-cols-1 gap-4 mt-8">
                    <li class="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-red-600 font-bold w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg><span class="ml-2">Private guide throughout your tour</span></li>
                    
                    <li class="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-red-600 font-bold w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg><span class="ml-2">Luxury transportation</span></li>

                    <li class="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-red-600 font-bold w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg><span class="ml-2">Pick up and drop off at your hotel or private residence</span></li>

                    <li class="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-red-600 font-bold w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg><span class="ml-2">Surprise stops and sightseeing opportunities</span></li>

                    <li class="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-red-600 font-bold w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg><span class="ml-2">All entry fees and taxes included</span></li>

                </ul>
            </div>

            <div>
                <iframe width="592" height="333" 
                src="https://www.youtube.com/embed/QRgkWXUzseE" 
                title="DETOURS American West Overview with Owner Jeff Slade" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>


    <div class="grid place-items-center">
        <h2 class="text-4xl font-bold">Tour Packages</h2>
        <div class="grid grid-cols-3 gap-6 w-4/6">
            <div class="shadow-xl">
                <img src="https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/sedona.jpg" alt="">
                <h3 class="text-2xl font-bold">Grand Canyon</h3>
                
            </div>

            <div class="shadow-xl">
                <img src="https://lasrental.s3.us-west-2.amazonaws.com/lasrental_website/sedona.jpg" alt="">
                <h3 class="text-2xl font-bold">Grand Canyon</h3>
                
            </div>

            
        </div>

    </div>
</template>


<script setup>
definePageMeta({
  layout: "full-width",
});

useSeoMeta({
    title: 'Other Services - Legendary Exotic Rentals',
    description: '',
    ogDescription: '',
    ogTitle: 'Other Services - Legendary Exotic Rentals',
})
</script>