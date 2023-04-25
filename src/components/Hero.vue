<template>
    <div class="hero flex items-center justify-between relative top-[-150px]">
        <div class="hero--left">
            <h2 class="text-7xl text-primary leading-none"><span class="font-bold">We Help you</span><br>to grow your<br><span class="none">Business</span></h2>
            <div class="bg-secondary relative z-[-1] w-[300px] h-5 top-[-22px]"></div>
            <p class="text-clrLightPurple">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
            </p>
            <br>
            <button class="btn bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                GET STARTED
            </button>
        </div>
        <div class="hero--right relative left-[48px] -z-10">
            <div class="img">
                <img src="../assets/img/home-header-graphics.webp">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Hero",
};
</script>
<style scoped>
.hero {}

.hero__element {}

.hero--left {
    width: 35%;
    padding-top: 125px;
}

.hero--right {}
</style>