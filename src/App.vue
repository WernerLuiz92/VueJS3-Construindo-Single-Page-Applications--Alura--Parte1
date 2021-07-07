<template>
    <div class="px-24">
        <!-- Page Title -->
        <h1 class="mt-10 text-4xl text-center">{{ title }}</h1>

        <!-- Filter Input -->
        <div class="mt-5">
            <input type="text" @input="" name="filter" id="filter" class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Filtrar por parte do título" />
        </div>

        <!-- Image List -->
        <ul role="list" class="mt-5 flex flex-row flex-wrap justify-center items-stretch place-content-around">
            <li v-for="picture in pictures" :key="picture._id" class="p-2 relative mb-10 mx-4 bg-gray-100 rounded-lg shadow-lg hover:shadow-none">
                <wl-image-card :url="picture.url" :title="picture.title" />
                <wl-rounded-button type="button" @click="openModal(picture._id)">
                    <EyeOutline class="h-5 w-5" aria-hidden="true" />
                </wl-rounded-button>
            </li>
        </ul>

        <!-- Show Image Modal -->
        <wl-dialog-modal :show="showModal" @close="closeModal">
            <template #content>
                <div class="flex flex-col flex-wrap items-center">
                    <h1 class="mb-5 text-4xl">{{ modalPicture.title }}</h1>
                    <img class="h-96" :src="modalPicture.url" alt="">
                </div>
            </template>

            <template #footer>
                <!-- <wl-secondary-button @click="closeModal">
                    Cancelar
                </wl-secondary-button>

                <wl-danger-button class="ml-2" @click="deleteException" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Excluir Exceção
                </wl-danger-button> -->
            </template>
        </wl-dialog-modal>

    </div>
</template>

<script>
    import { EyeIcon as EyeOutline } from '@heroicons/vue/solid';
    import WlImageCard from './components/shared/panel/ImageCard';
    import WlDialogModal from './components/shared/Modal/DialogModal';
    import WlRoundedButton from './components/shared/Buttons/RoundedButton';

    export default {

        components: {
            EyeOutline,
            WlImageCard,
            WlDialogModal,
            WlRoundedButton
        },

        data () {

            return {

                title: "Coleção de Imagens",
                pictures: [],
                showModal: false,
                modalPicture: null,
                filter: '',
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
      
        },

        methods: {
            openModal(id) {
                this.showModal = true;
                this.modalPicture = this.pictures.find((picture) => picture._id === id);
            },

            closeModal() {
                this.showModal = false;
                this.modalPicture = null;
            },
        },
    }
</script>
