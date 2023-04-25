<template>
    <header class="header relative flex items-center justify-between px-4 py-2 z-10">
        <h1 class="header__logo text-georgia text-xl text-primary font-bold">Dream Agency</h1>
        <nav>
            <ul class="flex space-x-12">
                <li><a href="/" class="header__nav-link header__nav-link--active hover:text-gray-400"><span class="underline">Ho</span>me</a></li>
                <li><a href="/about" class="header__nav-link hover:text-gray-400">About Us</a></li>
                <li><a href="#" class="header__nav-link hover:text-gray-400">Services</a></li>
                <li><a href="#" class="header__nav-link hover:text-gray-400">Contact Us</a></li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
    name: "Header",
};
</script>
<style scoped>
.header {
    padding: 3rem 0 3rem 0;
}

.header__logo {
    font-family: Georgia, sans-serif;
    font-size: 1.5rem;
}

.header__nav-link {
    font-family: Arial, sans-serif;
    font-size: 1rem;
}

.header__nav-link--active {
    font-weight: 700;
}

.underline {
    text-decoration: underline solid #FBBF24 2px;
    text-underline-offset: 5px;
}
</style>