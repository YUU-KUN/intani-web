<template>
    <button class="bg-white border border-primary rounded w-full h-12 text-primary font-semibold">
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