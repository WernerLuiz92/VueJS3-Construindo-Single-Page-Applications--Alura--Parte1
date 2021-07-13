<template>
    <div class="px-24">
        <!-- Page Title -->
        <h1 class="mt-10 text-4xl text-center">{{ title }}</h1>

        <!-- Filter Input -->
        <div class="mt-5">
            <input type="text" @input="filter = $event.target.value" name="filter" id="filter" class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Filtrar por parte do título" />
        </div>

        <!-- Image List -->
        <ul role="list" class="mt-5 flex flex-row flex-wrap justify-center items-stretch place-content-around">
            <li v-for="picture in filteredPictures" :key="picture._id">
                <wl-card :picture="picture" />
            </li>
        </ul>

    </div>
</template>

<script>

    import WlCard from './components/shared/Panel/Card';

    export default {

        components: {
            WlCard
        },

        data () {

            return {

                title: "Coleção de Imagens",
                pictures: [],
                filter: '',
            }
        },

        computed: {

            filteredPictures() {
                if(this.filter) {
                    let exp = new RegExp(this.filter.trim(), 'i');

                    return this.pictures.filter(picture => exp.test(picture.title));
                } else {
                    return this.pictures;
                }
            }

        },

        created () {

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
      
        },
    }
</script>
