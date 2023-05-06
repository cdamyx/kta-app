<template>
    <header class="header relative flex items-center justify-between py-12 z-10">
        <h1 class="header__logo font-georgia text-2xl text-primary font-bold">Dream Agency</h1>
        <nav class="flex space-x-12">
            <router-link to="/" exact class="header__nav-link hover:text-gray-400">
                <span>Ho</span>me
            </router-link>
            <router-link to="/about" class="header__nav-link hover:text-gray-400">
                <span>Ab</span>out Us
            </router-link>
            <router-link to="/services" class="header__nav-link hover:text-gray-400">
                <span>Se</span>rvices
            </router-link>
            <router-link to="/contact" class="header__nav-link hover:text-gray-400">
                <span>Co</span>ntact Us
            </router-link>
        </nav>
    </header>
</template>
<script>
export default {
    name: "Header"
};
</script>
<style scoped>
a.router-link-active {
    font-weight: 700;
}
a.router-link-active span {
    text-decoration: underline solid #FBBF24 2px;
    text-underline-offset: 5px;
}
</style>