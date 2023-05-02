<template>
    <div class="grid grid-cols-1 place-items-center pt-12 pb-12">
        <h1 class="text-4xl font-bold">Rental Requirments</h1>
        <div class="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-4 md:gap-0 sm:w-5/6 md:w-3/5 mt-20 mb-12 bg-gray-100">
            <div class="border border-black sm:p-8 md:p-16 w-full">
                    <h4 class="text-center text-xl font-bold sm:mt-0 md:mt-8">Age</h4>
                    <p class="text-center mt-2">25+</p>
            </div>
            <div class="border border-black sm:p-8 md:p-16">
                <h4 class="text-center text-xl font-bold">Details</h4>
                <p class="text-center mt-2">Minimum Age requirements are strictly enforced and ensure proper insurance protection. All renters who allow an underage driver will be fined $2,500 and their rental will be immediately canceled.</p>
            </div>

            <div class="border border-black sm:p-8 md:p-16">
                <h4 class="text-center text-xl font-bold sm:mt-0 md:mt-12">Drivers License</h4>
                <p class="text-center mt-2">United States Drivers License</p>
            </div>

            <div class="border border-black sm:p-8 md:p-16">
                <h4 class="text-center text-xl font-bold">Details</h4>
                <p class="text-center mt-2">Every driver is required to be listed on the rental agreement and provide a VALID and NON-EXPIRED drivers license with the name matching EXACTLY the name on the rental agreement. Note: International Drivers Licenses are accepted.</p>
            </div>

            <div class="border border-black sm:p-8 md:p-16">
                <h4 class="text-center text-xl font-bold mt-20">Car Insurance</h4>
                <p class="text-center mt-2">Comp/Collision 250/500/50</p>
            </div>

            <div class="border border-black sm:p-8 md:p-16">
                <h4 class="text-center text-xl font-bold">Details</h4>
                <p class="text-center mt-2">Each driver is required to provide their own car insurance that covers any liability claim up to $250k/$500k/$50k and has full comprehensive & collision coverage with a maximum $1,000 deductible. Note: Your insurance policy still requires Comp/Collision coverage even if you decide to purchase an optional insurance upgrade.</p>
            </div>
        </div>
    </div>

</template>

<script setup>
definePageMeta({
  layout: "full-width",
});
</script>