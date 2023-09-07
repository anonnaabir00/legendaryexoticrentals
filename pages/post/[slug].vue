<template>
    <div>
        <div v-html="body"></div>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const route = useRoute();
const body = ref();

const getPost = async () => {
  try {
    const slug = route.params.slug
    const response = await axios.get('https://booking.legendaryexoticrentals.com/api/post/get/' + slug);
    console.log(response.data.body);
    body.value = response.data.body;
    // const responseData = response.data['available_cars'];
  } catch (error) {
    console.error(error);
    // Swal.fire('Error', 'Failed to fetch cars', 'error');
  }
};

// const getPost = async () => {
//   console.log(route.params);
// };

onMounted(getPost);


definePageMeta({
  layout: "full-width",
});

</script>