<template>
    <router-link v-if="first" :to="to" class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">{{ label }}</router-link>
    <router-link v-else-if="last" :to="to" class="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">{{ label }}</router-link>
    <router-link v-else :to="to" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">{{ label }}</router-link>
</template>

<script>

    export default {
        
        props: {
            to: { type: String, default: '' },
            label: { type: String, default: '...' },
            first: { type: Boolean },
            last: { type: Boolean },
        }

    }

</script>