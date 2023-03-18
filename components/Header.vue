<template>
    <Topbar />

    <!-- Desktop Header -->
    <div class="sm:hidden md:grid place-items-center bg-black">
        <div class="flex w-4/6 text-white p-2 justify-between items-center">
            <div class="flex w-2/5">
                <img class="w-2/5" src="https://legendaryexoticrentals.com/wp-content/uploads/2022/03/laslogo_new.png" alt="">
            </div>

            <div>
                <ul class="flex text-base w-full space-x-12">
                    <a href="/"><li>Home</li></a>
                    <li>Private Tours</li>
                    <a href="#services"><li>Services</li></a>
                    <li>Available Cars</li>
                    <li>Location</li>
                    <li>Contact</li>
                </ul>
            </div>

        </div>
    </div>

    <!-- Mobile Header -->

    <div class="sm:grid md:hidden grid-cols-2 items-center bg-black p-6">
    <div><a href="/">
        <img class="w-4/5" src="https://legendaryexoticrentals.com/wp-content/uploads/2022/03/laslogo_new.png" alt="">
    </a></div>

    <div>
        <div class="flex justify-end items-center">
            <div>
            <!-- drawer init and toggle -->
            <div class="text-center">
            <button class="text-white" type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            </button>
            </div>
            </div>

            <!-- drawer component -->
            <div id="drawer-example" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-label">
                <ul class="text-base font-normal p-6">
                <li class="p-2">
                   
                </li>
                <li class="p-1 mt-6">
                    <a class="border rounded-lg text-white font-light p-3 pl-6 pr-6"></a>
                </li>
              </ul>
            </div>

        </div>
    </div>
  </div>

    
</template>

<script setup>
import 'flowbite';

</script>