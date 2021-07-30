<template>
    <div class="space-y-6">
        <form class="space-y-6" @submit.prevent="persist()">
            <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
                <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Nova Foto</h3>
                        <p class="mt-1 text-sm text-gray-500">
                            Preencha aqui as informações dea novas imagem.
                        </p>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                        <div class="grid grid-cols-3 gap-6">
                            <div class="mb-4 col-span-3 sm:col-span-2">
                                <label for="title" class="block text-sm font-medium text-gray-700">
                                    Título
                                </label>
                                <div class="mt-1 flex rounded-md shadow-sm">
                                    <input
                                        v-model="picture.title"
                                        type="text" 
                                        name="title" 
                                        id="title" 
                                        class="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" 
                                        autocomplete="off" 
                                        placeholder="Titulo da foto" 
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-3 gap-6">
                            <div class="mb-4 col-span-3 sm:col-span-2">
                                <label for="url" class="block text-sm font-medium text-gray-700">
                                    URL
                                </label>
                                <div class="mt-1 flex rounded-md shadow-sm">
                                    <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                        http://
                                    </span>
                                    <input
                                        v-model.lazy="picture.url"
                                        type="text" 
                                        name="url" 
                                        id="url" 
                                        class="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" 
                                        autocomplete="off" 
                                        placeholder="www.example.com" 
                                    />
                                </div>
                                <div class="mt-2 h-72 flex justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md overflow-hidden">
                                    <div v-if="!picture.url" class="space-y-1 text-center">
                                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="flex text-sm text-gray-600">
                                            <p class="pl-1">Previsulização da foto</p>
                                        </div>
                                        <p class="text-xs text-gray-500">
                                            PNG, JPG, GIF up to 10MB
                                        </p>
                                    </div>
                                    <img v-else class="h-72" :src="picture.url" :alt="picture.title">
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-3 gap-6">
                            <div class="mb-4 col-span-3 sm:col-span-2">
                                <label for="description" class="block text-sm font-medium text-gray-700">
                                    Descrição
                                </label>
                                <div class="mt-1">
                                    <textarea
                                        v-model="picture.description"
                                        id="description" 
                                        name="description" 
                                        rows="3" 
                                        class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md" 
                                        autocomplete="off" 
                                        placeholder="Esta foto é muito bonita." 
                                    />
                                </div>
                                <p class="mt-2 text-sm text-gray-500">
                                    Uma breve descrição da foto.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pb-10 flex justify-end">
                <router-link to="/">
                    <wl-secondary-button type="button" class="mx-2">
                        Cancelar
                    </wl-secondary-button>
                </router-link>
                <wl-button class="mx-2" type="submit">
                    Salvar
                </wl-button>
            </div>
        </form>
    </div>
</template>

<script>
    import WlButton from '../shared/Buttons/Button';
    import WlSecondaryButton from '../shared/Buttons/SecondaryButton';
    import Picture from '../../domain/picture/Picture';

    export default {
        
        components: {
            WlButton,
            WlSecondaryButton,
        },

        data() {

            return {
                picture: new Picture(),
            }
        },

        methods: {

            persist() {

                this.axios.post("http://localhost:3000/v1/pictures", this.picture)
                .then(() => this.picture = new Picture())
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
    }
</script>