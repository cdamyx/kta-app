<template>
    <div class="modal modal--position fixed z-10 inset-0 overflow-y-auto">
        <div class="modal--center flex items-center justify-center min-h-screen px-4">
            <div class="modal--transition fixed inset-0 transition-opacity" @click="$emit('close')">
                <div class="modal--bg absolute inset-0 bg-gray-800 opacity-30"></div>
            </div>
            <div class="modal--container bg-white rounded-lg transform w-[840px] h-[470px] flex flex-column flex-start p-12 gap-6">
                <form class="pr-10 py-4">
                    <h3 class="modal__title form-title text-primary text-2xl font-bold">GET IN TOUCH</h3>
                    <div class="flex flex-row flex-start py-4 gap-2">
                        <div class="modal__name">
                            <label class="text-xs text-primary mb-2" for="name">FULL NAME</label>
                            <input class="border-2 border-solid border-slate-400 rounded-md w-[350px] py-2 text-black" id="name" type="text">
                        </div>
                        <div class="modal__email">
                            <label class="text-xs text-primary mb-2" for="email">EMAIL</label>
                            <input class="border-2 border-solid border-slate-400 rounded-md w-[350px] py-2 text-black" id="email" type="text">
                        </div>
                    </div>
                    <div class="flex flex-row flex-start">
                        <div class="modal__message">
                            <label class="text-xs text-primary mb-2" for="message">MESSAGE</label>
                            <textarea class="border-2 border-solid border-slate-400 rounded-md w-[708px] text-black" rows="5" id="message" type="text"></textarea>
                        </div>
                    </div>
                    <button type="submit" class="modal__btn bg-primary hover:bg-blue-700 text-white text-xs font-bold py-3 px-6 mt-4 rounded-md">
                        SEND
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ModalForm"
};
</script>