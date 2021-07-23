<template>
    <div class="p-2 relative mb-10 mx-4 bg-gray-100 rounded-lg shadow-lg hover:shadow-none">
        <wl-image-card :visible="showCard" :url="picture.url" :title="picture.title" @click="modalToggle"/>

        <wl-rounded-button type="button" @click="modalToggle">
            <ArrowsExpandOutline class="h-5 w-5" aria-hidden="true" />
        </wl-rounded-button>
        <wl-rounded-button class="ml-2" type="button" @click="cardToggle">
            <EyeOffSolid v-if="showCard" class="h-5 w-5" aria-hidden="true" />
            <EyeSolid v-else class="h-5 w-5" aria-hidden="true" />
        </wl-rounded-button>


        <!-- Show Image Modal -->
        <wl-dialog-modal :show="showModal" @close="modalToggle">
            <template #content>
                <div class="flex flex-col flex-wrap items-center">
                    <div>
                        <h1 class="mb-5 text-4xl">{{ picture.title }}</h1>
                    </div>
                    <div class="overflow-hidden">
                        <img v-wl-transform:scale.animate="1.5" class="h-96" :src="picture.url" alt="">
                    </div>
                </div>
            </template>

            <template #footer>
                <wl-secondary-button @click="modalToggle">
                    Fechar
                </wl-secondary-button>

                <wl-danger-button class="ml-2" @click="confirmingPictureDeletion" >
                    Excluir Foto
                </wl-danger-button>
            </template>
        </wl-dialog-modal>

        <!-- Delete Image Modal -->
        <wl-dialog-modal :show="showDeleteModal" @close="confirmingPictureDeletion">
                <template #title>
                    <b>Excluir Foto</b>
                </template>

                <template #content>
                    Tem certeza que deseja excluir esta foto? Depois que for excluída, não será possivel recuperá-la.
                </template>

                <template #footer>
                    <wl-secondary-button @click="confirmingPictureDeletion">
                        Cancelar
                    </wl-secondary-button>

                    <wl-danger-button class="ml-2" @click="deletePicture">
                        Excluir Permanentemente
                    </wl-danger-button>
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
    import WlDangerButton from '../Buttons/DangerButton';

    export default {

        components: {
            ArrowsExpandOutline,
            EyeOffSolid,
            EyeSolid,
            WlImageCard,
            WlRoundedButton,
            WlDialogModal,
            WlSecondaryButton,
            WlDangerButton,
        },

        props: {
            picture: { type: Object },
        },

        data () {

            return {
                showModal: false,
                showDeleteModal: false,
                showCard: true,
            }
        },

        methods: {

            modalToggle() {
                this.showModal = !this.showModal;
            },

            confirmingPictureDeletion() {
                this.showDeleteModal = !this.showDeleteModal;
            },

            cardToggle() {
                this.showCard = !this.showCard;
            },

        },

    }

</script>