<script>
export default {
    props: {
        containerTitle: {
            type: String,
            required: true,
        },
    },
};
</script>
<template>
    <div class="border p-3 bg-gray-100 rounded">
        <h2 class="font-bold text-lg">{{ containerTitle }}</h2>
        <div class="mt-4 p-2 rounded">
            <slot></slot>
        </div>
    </div>
</template>
