<template>
    <div class="flex flex-col justify-between items-center w-full">
        <div class="flex flex-col justify-start items-center w-full">
            <div class="flex w-full items-center justify-center">
                <img src="@/assets/images/kelompok_tani/kelompok_tani_1.png" alt="" class="mb-5 ">
            </div>
    
            <div class="flex justify-between items-center mb-3 w-full">
                <p class="font-bold">Profit</p>
                <p class="font-bold">30.000.000</p>
            </div>
            <div class="flex justify-between items-center mb-6 w-full">
                <p class="font-bold">Loss</p>
                <p class="font-bold">-</p>
            </div>  
    
            <div class="mb-6 w-full h-full overflow-scroll">
                <div class="rounded-lg bg-white border border-primary px-4 py-3 w-full mb-3">
                    <div class="flex flex-col items-center justify-between">
                        <div class="flex justify-between font-bold w-full mb-3 ">
                            <p>Faisal Agus</p>
                            <p>20.000.000</p>
                        </div>
                        <div class="flex justify-start w-full mb-2 ">
                            <p class="text-12 text-left mr-10">Wamasari, Pangalengan, Bandung</p>
                        </div>
                        <div class="flex justify-between font-bold w-full ">
                            <p class="font-medium ">Profit</p>
                            <p class="text-primary font-bold">2.500.500</p>
                        </div>
                    </div>
                </div>
                <div class="rounded-lg bg-white border border-primary px-4 py-3 w-full mb-3">
                    <div class="flex flex-col items-center justify-between">
                        <div class="flex justify-between font-bold w-full mb-3 ">
                            <p>Faisal Agus</p>
                            <p>20.000.000</p>
                        </div>
                        <div class="flex justify-start w-full mb-2 ">
                            <p class="text-12 text-left mr-10">Wamasari, Pangalengan, Bandung</p>
                        </div>
                        <div class="flex justify-between font-bold w-full">
                            <p class="font-medium ">Profit</p>
                            <p class="text-primary font-bold">2.500.500</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full">
            <div class="font-bold flex justify-between items-center mb-2 ">
                <p>Biaya Admin</p>
                <p class="text-12 font-medium">300.000</p>
            </div>
            <div class="font-bold flex justify-between items-center mb-6">
                <p>Total</p>
                <p class="text-primary">2.500.500</p>
            </div>
            <CTAButton>Bagikan</CTAButton>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            user_role: this.$store.state.user.user.role
        }
    },
    mounted() {
    }
}
</script>

<style>

</style>