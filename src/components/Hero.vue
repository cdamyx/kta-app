<template>
    <div class="hero flex items-center justify-between relative -top-[150px]">
        <div class="hero--left w-smMdPercent pt-32">
            <div class="hero__title">
                <h2 class="text-7xl text-primary leading-none"><span class="font-bold">We Help you</span><br>to grow your<br><span>Business</span></h2>
                <div class="bg-secondary relative -z-10 w-[300px] h-5 -top-[22px]"></div>
            </div>
            <p class="pb-6">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
            </p>
            <Button class="hero__btn bg-primary hover:bg-violet-600 text-white">GET STARTED</Button>
        </div>
        <div class="hero--right relative left-12 -z-10">
            <img class="hero__image" src="../assets/img/home-header-graphics.webp" alt="Two well dressed people smiling and working together on a laptop">
        </div>
    </div>
</template>
<script>
import Button from './Button.vue'
export default {
    name: "Hero",
    components: {
        Button
    }
};
</script>