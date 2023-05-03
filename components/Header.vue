<template>
    <Topbar />

    <!-- Desktop Header -->
    <div class="sm:hidden md:grid place-items-center bg-black">
        <div class="flex w-4/6 text-white p-2 justify-between items-center">
            <div class="flex w-2/5">
                <a href="/"><img class="w-2/5" src="https://legendaryexoticrentals.com/wp-content/uploads/2022/03/laslogo_new.png" alt=""></a>
            </div>

            <div>
                <ul class="flex text-base w-full space-x-12">
                    <a href="/"><li>Home</li></a>
                    <a href="/private-tours"><li>Private Tours</li></a>
                    <a href="#services"><li>Services</li></a>
                    <a href="#cars"><li>Available Cars</li></a>
                    <a href="#locations"><li>Location</li></a>
                    <a href="#contact"><li>Contact</li></a>
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
            <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </MenuButton>
    </div>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="py-1">
        <MenuItem v-slot="{ active }">
            <a href="/private-tours" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Private Tours</a>
          </MenuItem>
        <MenuItem v-slot="{ active }">
            <a href="#services" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Services</a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a href="#cars" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Available Cars</a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a href="#locations" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Location</a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a href="#contact" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Contact</a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>

        </div>
    </div>
  </div>

    
</template>

<script setup>
import 'flowbite';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

// export default  {
//     data() {
//         return {
//             mobilemenu: {
//                 display: 'none'
//             }
//         }
//     },
//     methods: {
//         toggleDrawer() {
//             this.mobilemenu.display = 'block';
//         }
//     }
// }

</script>