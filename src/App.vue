<template>
    <div class="px-24">
        <!-- Page Title -->
        <h1 class="mt-10 text-4xl text-center">{{ title }}</h1>

        <wl-nav-bar></wl-nav-bar>

        <transition name="page">
            <router-view />
        </transition>
    </div>
</template>

<script>
    import WlNavBar from '@/components/shared/Navigation/NavBar';

    export default {

        components: {
            WlNavBar,
        },

        props: {
            title: { type: String, default: 'Coleção de Imagens' }
        }

    }
</script>

<style scoped>
    .page-enter-active, .page-leave-active {
        transition: opacity .3s
    }
    .page-enter, .page-leave-active {
        opacity: 0
    }
</style>