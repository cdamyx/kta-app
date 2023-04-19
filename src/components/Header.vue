<template>
  <header class="header flex items-center justify-between px-4 py-2">
    <h1 class="header__logo text-georgia text-xl text-primary font-bold">Dream Agency</h1>
    <nav>
      <ul class="flex space-x-12">
        <li><a href="#" class="header__nav-link hover:text-gray-400">Home</a></li>
        <li><a href="#" class="header__nav-link hover:text-gray-400">About Us</a></li>
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

.my-component--modifier { /* modifier styles */ }
</style>