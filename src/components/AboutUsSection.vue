<template>
    <div class="about-us flex items-center space-x-9 mb-24">
        <div class="about-us--left">
            <img class="about-us__image" src="../assets/img/about-graphics.webp" alt="Four people collaborating on work in an office. Three are smiling, one is thinking deeply with hand covering mouth">
        </div>
        <div class="about-us--right w-mdPercent text-primary space-y-6">
            <div class="about-us__title">
                <h2 class="text-5xl tracking-tighter leading-none font-light"><span class="font-bold">About Us</span><br>Fake or Real</h2>
                <div class="bg-secondary relative -z-10 w-[95px] h-2 -top-[13px] left-[155px]"></div>
            </div>
            <p>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div>
                <Button class="about-us__btn bg-primary hover:bg-violet-600 text-white">EXPLORE MORE</Button>
            </div>
        </div>
    </div>
</template>
<script>
import Button from "./Button.vue"
export default {
    name: "AboutUsSection",
    components: {
        Button
    }
};
</script>