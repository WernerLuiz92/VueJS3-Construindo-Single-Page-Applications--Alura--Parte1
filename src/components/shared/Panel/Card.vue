<template>
    <div class="p-2 relative mb-10 mx-4 bg-gray-100 rounded-lg shadow-lg hover:shadow-none">
        <transition>
            <wl-image-card :visible="showCard" :url="picture.url" :title="picture.title"/>
        </transition>

        <wl-rounded-button type="button" @click="modalToggle">
            <ArrowsExpandOutline class="h-5 w-5" aria-hidden="true" />
        </wl-rounded-button>
        <wl-rounded-button class="ml-2" type="button" @click="cardToggle">
            <EyeOffSolid v-if="showCard" class="h-5 w-5" aria-hidden="true" />
            <EyeSolid v-else class="h-5 w-5" aria-hidden="true" />
        </wl-rounded-button>


        <!-- Show Image Modal -->
        <wl-dialog-modal :show="showModal" @close="closeModal">
            <template #content>
                <div class="flex flex-col flex-wrap items-center">
                    <h1 class="mb-5 text-4xl">{{ picture.title }}</h1>
                    <img class="h-96" :src="picture.url" alt="">
                </div>
            </template>

            <template #footer>
                <wl-secondary-button @click="modalToggle">
                    Fechar
                </wl-secondary-button>

                <!-- <wl-danger-button class="ml-2" @click="deleteException" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Excluir Exceção
                </wl-danger-button> -->
            </template>
        </wl-dialog-modal>
    </div>
</template>

<script>
    import { ArrowsExpandIcon as ArrowsExpandOutline } from '@heroicons/vue/outline';
    import { EyeOffIcon as EyeOffSolid } from '@heroicons/vue/solid';
    import { EyeIcon as EyeSolid } from '@heroicons/vue/solid';
    import WlImageCard from './ImageCard';    
    import WlRoundedButton from '../Buttons/RoundedButton';
    import WlDialogModal from '../Modal/DialogModal';
    import WlSecondaryButton from '../Buttons/SecondaryButton';

    export default {

        components: {
            ArrowsExpandOutline,
            EyeOffSolid,
            EyeSolid,
            WlImageCard,
            WlRoundedButton,
            WlDialogModal,
            WlSecondaryButton,
        },

        props: {
            picture: { type: Object },
        },

        data () {

            return {
                showModal: false,
                showCard: true,
            }
        },

        methods: {

            modalToggle() {
                this.showModal = !this.showModal;
            },

            cardToggle() {
                this.showCard = !this.showCard;
            },

        },

    }

</script>