<template>
    <div class="categories__card card rounded-xl shadow-md bg-white w-73 pt-5 pb-7 px-5">
        <slot></slot>
        <p class="tracking-wide text-sm pt-1">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
    </div>
</template>
<script>
export default {
    name: "Category"
};
</script>