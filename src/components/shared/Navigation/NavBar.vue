<template>
    <div id="nav">
        <span class="relative mb-6 z-0 inline-flex shadow-sm rounded-md">
            <div v-for="(link, linkIdx) in links" :key="link.path">
                <wl-nav-button v-if="linkIdx === 0" first :to="link.name" :label="link.label"/>
                <wl-nav-button v-else-if="linkIdx === links.length - 1" last :to="link.name" :label="link.label"/>
                <wl-nav-button v-else :to="link.name" :label="link.label"/>
            </div>
        </span>
    </div>
</template>

<script>
    import { routes } from '@/router/index.js';
    import WlNavButton from '@/components/shared/Buttons/NavButton';

    export default {

        components: {
            WlNavButton
        },

        data() {

            return {
                links: routes.filter(route => route.navBar),
            }
        }

    }
</script>