<template>
    <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen px-4">
            <div class="fixed inset-0 transition-opacity" @click="$emit('close')">
                <div class="absolute inset-0 bg-gray-800 opacity-30"></div>
            </div>
            <div class="bg-white rounded-lg transform w-[840px] h-[470px] flex flex-column flex-start p-12 gap-6">
                <form class="pr-10 py-4">
                    <h3 class="form-title text-primary text-2xl font-bold">GET IN TOUCH</h3>
                    <!-- form fields go here -->
                    <div class="flex flex-row flex-start py-4 gap-2">
                        <div class="block">
                            <label class="text-xs text-primary mb-2" for="name">FULL NAME</label>
                            <input class="border-2 border-solid border-slate-400 rounded-md w-[350px] py-2" id="name" type="text">
                        </div>
                        <div class="block">
                            <label class="text-xs text-primary mb-2" for="email">EMAIL</label>
                            <input class="border-2 border-solid border-slate-400 rounded-md w-[350px] py-2" id="email" type="text">
                        </div>
                    </div>
                    <div class="flex flex-row flex-start">
                        <div class="block">
                            <label class="text-xs text-primary mb-2" for="message">MESSAGE</label>
                            <input class="border-2 border-solid border-slate-400 rounded-md w-[708px] py-10" id="message" type="text">
                        </div>
                    </div>
                    <div class="mt-4">
                        <button type="submit" class="bg-primary hover:bg-blue-700 text-white text-xs font-bold py-3 px-6 rounded-md">
                            SEND
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        fields: {
            type: Array,
            required: true
        }
    }
};
</script>