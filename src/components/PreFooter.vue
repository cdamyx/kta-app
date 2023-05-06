<template>
    <div class="pre-footer flex text-white bg-primary rounded-tr-large -mx-12 space-x-20 pt-12">
        <div class="pre-footer--left w-smPercent ml-12">
            <h2 class="pre-footer__logo font-bold font-georgia text-4xl pb-6">Dream Agency</h2>
            <p class="text-white">
                Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen
                book. It has survived not only five centuries.
            </p>
        </div>
        <div class="pre-footer--right flex items-end">
            <div>
                <h3 class="pre-footer__contact-title text-lg font-bold pb-6">GET IN TOUCH</h3>
                <Button class="pre-footer__contact-btn bg-secondary hover:bg-yellow-200 text-primary" @click="showModal = true">REQUEST MORE INFORMATION
                </Button>
                <ModalForm v-if="showModal" @close="showModal = false" :title="'Add Item'" :fields="fields"></ModalForm>
            </div>
        </div>
    </div>
</template>
<script>
import Button from "./Button.vue"
import ModalForm from "@/components/ModalForm.vue"
export default {
    name: "PreFooter",
    components: {
        ModalForm,
        Button
    },
    data() {
        return {
            showModal: false,
        };
    }
};
</script>