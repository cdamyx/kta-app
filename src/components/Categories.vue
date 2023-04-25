<template>
    <div class="categories bg-clrLightBlue rounded-tr-huge relative left-[-48px] mb-24">
        <div class="flex flex-col items-center text-center">
            <h2 class="font-normal py-24 text-5xl text-primary z-10 leading-none"><span class="font-bold">What We Do</span>
                <br>
                For Your Business</h2>
            <div class="bg-secondary relative z-0 w-[170px] h-3 top-[-110px] left-[85px]"></div>
        </div>
        <div class="bottom flex space-x-10 relative left-[50px] pb-24">
            <Category :title1="parentTitle1"><img class="bg-clrPink rounded-lg mb-4" src="./icons/website-icon.svg"><span class="font-bold text-base leading-5 tracking-wider">WEBSITE DESIGN</span></Category>
            <Category :title1="parentTitle1"><img class="bg-clrLightYellow rounded-lg mb-4" src="./icons/computer-icon.svg"><span class="font-bold text-base leading-5 tracking-wider">WEB DEVELOPMENT</span></Category>
            <Category :title1="parentTitle1"><img class="bg-clrBlue rounded-lg mb-4" src="./icons/mobile-phone-icon.svg"><span class="font-bold text-base leading-5 tracking-wider">MOBILE APP DEVELOPMENT</span></Category>
            <Category :title1="parentTitle1"><img class="bg-clrLightPink rounded-lg mb-4" src="./icons/rocket-icon.svg"><span class="font-bold text-base leading-5 tracking-wider">MARKETING</span></Category>
        </div>
        <div>
            <img class="img absolute z-[-10] top-[185px] left-[925px]" src="../assets/img/ellipse.svg">
        </div>
    </div>
</template>
<script>
import Category from './Category.vue'

export default {
    name: "Categories",
    components: {
        Category
    },
    data() {
        return {
            parentTitle1: 'WEBSITE DESIGN'
        }
    }
};
</script>
<style scoped>
.categories {}
</style>