<template>
    <div @click="$emit('click')" class="group block w-72 aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-300 overflow-hidden">
        <img
            :src="url"
            :alt="title"
            class="object-cover pointer-events-none transition-opacity ease-out duration-700"
            :class="!visible ? ['opacity-0'] : ['opacity-100']"
        />
    </div>
    <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
        {{ title }}
    </p>
</template>

<script>

    export default {

        emits: ['click'],

        props: {
            url: { type: String, default: "#" },
            title: { type: String, default: "" },
            visible: { type: Boolean, default: true },
        },

    };

</script>
