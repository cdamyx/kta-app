<template>
    <div class="category rounded-xl shadow-md bg-white w-73 pt-5 pb-7 px-5">
        <img class="icon" alt="">
        <h3 class="text-lg font-bold"></h3>
        <slot></slot>
        <p class="text-clrLightPurple tracking-wide text-sm pt-1">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
    </div>
</template>
<script>
export default {
    name: "Category",
    props: {
        title1: {
            type: String,
            required: true,
        },
    },
};
</script>
<style scoped>
.category {}

.category__element {}

.category--modifier {}
</style>