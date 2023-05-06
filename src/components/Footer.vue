<template>
    <div
        class="footer flex flex-row -mx-12 top-6 bg-primary justify-center"
        :class="$route.path === '/' ? 'pt-12 pb-4' : 'py-6'">
            <p class="text-sm text-white">
                © 2023 Dream Agency, Inc. All right reserved | Privacy Policy | Terms of Use
            </p>
    </div>
</template>
<script>
export default {
    name: "Footer",
};
</script>