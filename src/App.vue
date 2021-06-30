<template>
    <div class="flex flex-col justify-items-center items-center">
        <h1 class="text-4xl text-center">{{ title }}</h1>
        <ul>
            <li v-for="picture in pictures" :key="picture.url">
                <img class="w-72 max-w-xs mt-4" :src="picture.url" :alt="picture.description">
            </li>
        </ul>
    </div>
</template>

<script>

    export default {

        data() {

            return {

                title: "Coleção de Imagens",
                pictures: []

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

    /*
            promise .then(
                res => this.pictures = res.data
            );
    */      
        }

    }

</script>
