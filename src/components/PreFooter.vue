<template>
    <div class="flex pre-footer text-white bg-primary rounded-tr-large mx-[-48px] space-x-20 pt-12">
        <div class="pre-footer--left">
            <h2 class="pre-footer__logo font-bold text-georgia text-4xl">Dream Agency</h2>
            <br>
            <p>
                Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen
                book. It has survived not only five centuries.
            </p>
        </div>
        <div class="pre-footer--right flex items-end">
            <div>
                <h3 class="text-lg font-bold">GET IN TOUCH</h3>
                <br>
                <button class="btn bg-secondary hover:bg-yellow-300 text-primary tracking-tight text-base font-bold py-2 px-4 rounded" @click="showModal = true">
                    REQUEST MORE INFORMATION
                </button>
                <ModalForm v-if="showModal" @close="showModal = false" :title="'Add Item'" :fields="fields"></ModalForm>
            </div>
        </div>
    </div>
</template>
<script>
import ModalForm from '@/components/ModalForm.vue'
export default {
    name: "PreFooter",
    components: {
        ModalForm
    },

    data() {
        return {
            showModal: false,
            fields: [{
                    name: "name",
                    label: "Name",
                    type: "text",
                    placeholder: "Enter your name"
                },
                {
                    name: "email",
                    label: "Email",
                    type: "email",
                    placeholder: "Enter your email"
                }
            ]
        };
    }
};
</script>
<style scoped>
.pre-footer {}

.pre-footer__logo {
    font-family: Georgia, sans-serif;
}

.pre-footer--left {
    width: 30%;
    margin-left: 48px;

}

.pre-footer--right {}
</style>