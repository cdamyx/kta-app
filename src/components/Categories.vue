<template>
    <div class="categories bg-clrLightBlue rounded-tr-huge relative -left-12 mb-24">
        <div class="categories__title flex flex-col items-center text-center">
            <h2 class="font-normal py-24 text-5xl text-primary z-10 leading-none">
                <span class="font-bold">What We Do</span>
                <br>
                For Your Business</h2>
            <div class="bg-secondary relative z-0 w-[170px] h-3 -top-[110px] left-[85px]"></div>
        </div>
        <div class="categories--bottom flex space-x-10 relative left-[50px] pb-24">
            <div v-for="category in categoryData" :key="category.id">
                <Category>
                    <img class="card__icon rounded-lg mb-4" :class="category.style" :src="category.image" :alt="category.alt">
                    <span class="card__title font-bold text-base leading-5 tracking-wider">{{ category.title }}</span>
                </Category>
            </div>
        </div>
        <div>
            <img class="categories__image absolute -z-10 top-[185px] left-[925px]" src="../assets/img/ellipse.svg" alt="Transparent ellipsis with dotted-line border as background style element">
        </div>
    </div>
</template>
<script>
import Category from './Category.vue'
import { categoryData } from '../data/category-data.js'
export default {
    name: "Categories",
    components: {
        Category
    },
    data() {
        return {
            categoryData: categoryData
        }
    }
};
</script>