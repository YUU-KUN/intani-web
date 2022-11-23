<template>
    <div class="flex flex-col justify-between">
        <div class="items-stretch">
    
            <!-- TOTAL RECEIVED INVESTMENT -->
            <div class="text-left mb-5 ">
                <div class="mb-2 ">
                    <label for="total_received_investment">Total Terima Investasi</label>
                </div>
                <input class="w-full border-2 border-strong-gray rounded-md py-2 px-3" type="text" id="total_received_investment" :placeholder="$filters.currency(total_received_investment)" v-model="total_received_investment" required disabled/>
            </div>
    
            <!-- INCOME -->
            <div class="text-left mb-5 ">
                <div class="mb-2 ">
                    <label for="income">Pendapatan <span class="text-red-500 ">*</span></label>
                </div>
                <input class="w-full border-2 border-strong-gray rounded-md py-2 px-3" type="number" id="income" placeholder="example: 3 bulan" v-model="income" required/>
            </div>
        </div>
        <pre class="text-black">{{income}}</pre>
        <CTAButton @click="confirm()">Konfirmasi</CTAButton>
    </div>
</template>

<script>
export default {
    data() {
        return {
            total_received_investment: this.$store.getters.totalInvestReceived,
            income: '',
        }
    },
    methods: {
        confirm() {
            const body = {
                income: this.income
            }
            this.axios.put('profit-sharing', body).then(response => {
                console.log(response.data.data);
                this.$router.push({name: 'Keuanganku'})
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