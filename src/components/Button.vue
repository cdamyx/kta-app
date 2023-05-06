<template>
    <button class="btn font-bold py-2 px-4 rounded">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "Button"
};
</script>
<style scoped>
.btn {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px 32px;
    border-radius: 8px;
}
</style>