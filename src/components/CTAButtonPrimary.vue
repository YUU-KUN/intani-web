<template>
    <button class="bg-primary rounded w-full h-12 py-3 text-white font-semibold">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: 'Button'
        }
    }
}
</script>

<style>

</style>