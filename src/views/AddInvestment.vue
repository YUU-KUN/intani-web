<template>
    <div class="flex flex-col justify-between">
        <div class="items-stretch">
    
            <!-- COMMODITY -->
            <div class="text-left mb-5 ">
                <div class="mb-2 ">
                    <label for="commodity">Nama Komoditas <span class="text-text-red-500 ">*</span></label>
                </div>
                <input class="w-full border-2 border-strong-gray rounded-md py-2 px-3" type="text" id="commodity" placeholder="Ketik Nama Komoditas" v-model="commodity" required/>
            </div>
    
            <!-- DURATION -->
            <div class="text-left mb-5 ">
                <div class="mb-2 ">
                    <label for="duration">Durasi mulai bertani (bulan) <span class="text-red-500 ">*</span></label>
                </div>
                <input class="w-full border-2 border-strong-gray rounded-md py-2 px-3" type="number" id="duration" placeholder="example: 3 bulan" v-model="duration" required/>
            </div>
    
            <!-- ADDRESS -->
            <div class="text-left mb-5 ">
                <div class="mb-2 ">
                    <label for="address">Alamat <span class="text-red-500 ">*</span></label>
                </div>
                <input class="w-full border-2 border-strong-gray rounded-md py-2 px-3" type="text" id="address" placeholder="Ketik alamat kebun" v-model="address" required/>
            </div>
        </div>
        <CTAButton @click="AddInvestment()">Tambahkan</CTAButton>
    </div>
</template>

<script>
export default {
    data() {
        return {
            commodity: '',
            duration: '',
            address: '',
        }
    },
    methods: {

        AddInvestment() {
            var body = {
                commodity: this.commodity,
                duration: this.duration,
                address: this.address,
            }

            this.axios.post('investments', body).then(response => {
                console.log(response.data.data);
                this.$router.push({name: 'Dashboard'});
            }).catch(error => {
                console.log(error.response);
            })
        }
    },
    mounted() {
    }
}
</script>

<style>

</style>