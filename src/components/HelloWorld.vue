<template>
    <div class="px-24">
        <h1 class="text-4xl text-center">{{ title }}</h1>
        <ul role="list" class="mt-5 flex flex-row flex-wrap justify-center items-stretch place-content-around">
            <li v-for="picture in pictures" :key="picture.url" class="relative mb-10 mx-4">
                <div class="group block w-72 aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-300 overflow-hidden">
                    <img :src="picture.url" alt="" class="object-cover pointer-events-none group-hover:opacity-75" />
                    <button type="button" class="absolute inset-0 focus:outline-none">
                        <span class="sr-only">View details for {{ picture.title }}</span>
                    </button>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{{ picture.title }}</p>
            </li>
        </ul>

        <wl-modal></wl-modal>
    </div>
</template>

<script>
    import WlModal from './components/shared/Modal';

    export default {

        components: {
            WlModal,
        },

        data () {

            return {

                title: "Coleção de Imagens",
                pictures: [],
            }
        },

        created() {

            this.axios.get("http://localhost:3000/v1/pictures")
                .then(res => {
                    this.pictures = res.data
                })
                .catch(err => {
                    if (err.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        console.log(err.response.data);
                        console.log(err.response.status);
                        console.log(err.response.headers);
                    } else if (err.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        console.log('Request:');
                        console.log(err.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', err.message);
                    }
                    console.log('Config:');
                    console.log(err.config);
            });
      
        }

    }

</script>
