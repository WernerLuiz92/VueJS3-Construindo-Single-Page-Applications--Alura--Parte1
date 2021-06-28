<template>
    <div class="flex flex-col justify-items-center items-center">
        <h1 class="text-4xl text-center">{{ title }}</h1>
        <ul>
            <li v-for="picture in pictures" :key="picture.url">
                <img class="max-w-xs mt-4" :src="picture.url" :alt="picture.description">
            </li>
        </ul>
    </div>
</template>

<script>

    export default {

        data() {

            return {

                title: "Coleção de Imagens",
                pictures: [
                    {
                        url: 'https://s2.glbimg.com/VJVCcMAqTPFgb2iIgGQ07l-B80E=/0x0:3000x2704/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2018/t/F/yPSiQtSgAkC8aFiXr2bA/huji.jpg',
                        description: 'Flor'
                    },
                    {
                        url: 'https://s2.glbimg.com/VJVCcMAqTPFgb2iIgGQ07l-B80E=/0x0:3000x2704/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2018/t/F/yPSiQtSgAkC8aFiXr2bA/huji.jpg',
                        description: 'Flor'
                    },
                ]

            }

        },

    }

</script>
