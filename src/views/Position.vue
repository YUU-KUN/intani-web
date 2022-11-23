<template>
    <div class="flex flex-col justify-between items-start">
        <div class="w-full">
            <p class="text-left mb-8 ">Saya sebagai :</p>
            <div class="flex items-center justify-between">
                <label for="farmer-position">
                    <div class="flex flex-col rounded-md" :class="position == first ? 'bg-gray border border-primary w-[160px]' : 'w-[120px]'">
                        <img :src="require('@/assets/images/petani_position.png')" alt="farmer position">
                        <div class="py-3 px-auto">
                            <p class="font-bold text-18">Petani</p>
                        </div>
                    </div>
                </label>
                <input class="hidden" id="farmer-position" type="radio" v-model="position" :value="first" />
    
                <label for="investor-position">
                    <div class="flex flex-col rounded-md" :class="position == second ? 'bg-gray border border-primary w-[160px]' : 'w-[120px]'">
                        <img :src="require('@/assets/images/investor_position.png')" alt="investor position">
                        <div class="py-3 px-auto">
                            <p class="font-bold text-18">Investor</p>
                        </div>
                    </div>
                </label>
                <input class="hidden" id="investor-position" type="radio" v-model="position" :value="second" />
            </div>
        </div>
        <CTAButton @click="redirectRegister(position)">Lanjut</CTAButton>
    </div>
</template>

<script>
export default {
    data() {
        return {
            first: 'farmer',
            second: 'investor',
            position: 'farmer',
        }
    },
    methods: {
        redirectRegister(position) {
            this.$router.push({ name: 'Buat Akun', params: { position } })
        }
    }
}
</script>

<style>

</style>