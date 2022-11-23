<template>
    <div class="flex flex-col items-center justify-between">
        <img src="@/assets/images/petani_survey.png" alt="" class=" w-1/2v">
        <div class="items-stretch w-full">
    
            <!-- COMMODITY -->
            <div class="text-left mb-2 ">
                <div class="mb-2 ">
                    <label for="commodity">Nama Petani</label>
                </div>
                <input class="w-full border-2 border-strong-gray rounded-md py-2 px-3" type="text" id="commodity" placeholder="Ketik nama anda" v-model="commodity" required/>
            </div>

            <!-- PRICE -->
            <div class="text-left mb-2 ">
                <div class="mb-2 ">
                    <label for="commodity">Harga Jual</label>
                </div>
                <input class="w-full border-2 border-strong-gray rounded-md py-2 px-3" type="number" id="duration" placeholder="Masukan Harga Jual Anda" v-model="price" required/>
            </div>

            <!-- DURATION -->
            <div class="text-left mb-2 ">
                <div class="mb-2 ">
                    <label for="commodity">Waktu Jual</label>
                </div>
                <input class="w-full border-2 border-strong-gray rounded-md py-2 px-3" type="date" id="duration" placeholder="MM/DD/YYYY" v-model="duration" required/>
            </div>

            <!-- COMMODITY TYPE -->
            <div class="text-left mb-2 ">
                <div class="mb-2 ">
                    <label for="commodity">Jenis Sayur</label>
                </div>
                <input class="w-full border-2 border-strong-gray rounded-md py-2 px-3" type="text" id="duration" placeholder="Masukan Jenis Sayur Anda" v-model="commodity_type" required/>
            </div>
        </div>
        <CTAButton>Kirim</CTAButton>
    </div>
</template>

<script>
export default {
    data() {
        return {
            commodity_type: '',
            duration: '',
            price: '',
            commodity: '',
        }
    }
}
</script>

<style>

</style>