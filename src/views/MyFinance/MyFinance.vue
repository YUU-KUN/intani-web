<template>
    <div class="flex flex-col justify-between items-center w-full">
        <div class="flex flex-col justify-start items-center w-full">
            <div class="bg-primary rounded-lg p-4 text-white w-full text-left mb-6 ">
                <p class="text-16 mb-1">Total Terima Investasi</p>
                <p class="font-bold text-18 ">{{$filters.currency(total_invest_received)}}</p>
            </div>

            <div class="flex justify-between items-center w-full mb-6">
                <p class="font-bold text-16">Pembagian Hasil</p>
                <button @click="inputBagiHasil" class="bg-primary text-white rounded-lg py-3  px-5 ">
                    klik di sini
                </button>
            </div>

            <div v-if="profit_sharing" class="w-full">
                <div class="flex justify-between items-center mb-3 w-full">
                    <p class="font-bold">Profit</p>
                    <p class="font-bold">{{is_profit ? $filters.currency(farmer_profit) : '-'}}</p>
                </div>
                <div class="flex justify-between items-center mb-6 w-full">
                    <p class="font-bold">Loss</p>
                    <p class="font-bold">{{is_profit ? '-' : $filters.currency(farmer_profit)}}</p>
                </div>
        
                <div class="mb-6 w-full h-full overflow-scroll">
                    <div v-for="sharing in profit_sharing" :key="sharing.id" class="rounded-lg bg-white border border-primary px-4 py-3 w-full mb-3">
                        <div class="flex flex-col items-center justify-between">
                            <div class="flex justify-between font-bold w-full mb-3 ">
                                <p>{{sharing.investor.name}}</p>
                                <p>{{$filters.currency(sharing.amount)}}</p>
                            </div>
                            <div class="flex justify-start w-full mb-2 ">
                                <p class="text-12 text-left mr-10">{{sharing.investor.address ? sharing.investor.address : '-'}}</p>
                            </div>
                            <div class="flex justify-between font-bold w-full">
                                <p class="font-medium ">Profit</p>
                                <p class="text-primary font-bold">{{$filters.currency(investor_profit)}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
        <div class="w-full">
            <!-- <div class="font-bold flex justify-between items-center mb-6">
                <p>Total</p>
                <p class="text-primary">2.500.500</p>
            </div> -->
            <CTAButton @click="proceedProfitSharing">Lanjut</CTAButton>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            user_role: this.$store.state.user.user.role,
            profit_sharing: '',
            investment_income: '',
            total_invest_received: 0,
            farmer_profit: 0,
            investor_profit: 0,
            is_profit: false,
        }
    },
    methods: {
        getProfitSharing() {
            this.axios.get('profit-sharing').then(response => {
                var status = response.data.status
                var data = response.data.data
                this.total_invest_received = data.total_invest_received
                if (status != 'error') {
                    this.profit_sharing = data.profit_sharing
                    this.total_invest_received = data.total_invest_received
                    this.investment_income = data.investment_income
                    this.farmer_profit = data.farmer_profit
                    this.investor_profit = data.investor_profit
                    this.is_profit = data.is_profit
                }
                console.log(data);
            }).catch(error => {
                console.log(error.response);
            })
        },
        inputBagiHasil() {
            this.$store.dispatch('setTotalInvestReceived', this.total_invest_received)
            this.$router.push({name: 'Bagi Hasil'})
        },
        proceedProfitSharing() {
            var body = {
                total_invest_received : this.total_invest_received,
                investment_income: this.investment_income,
                farmer_profit: this.farmer_profit,
                investor_profit: this.investor_profit,
                is_profit: this.is_profit
            }
            console.log(body);
            this.axios.post('profit-sharing', body).then(response => {
                console.log(response.data);
                this.$store.dispatch('setTotalInvestReceived', 0);
                $router.push({name: 'Success Bagi Hasil'})
            }).catch(error => {
                console.log(error.response);
            })
        }
    },
    mounted() {
        this.getProfitSharing()
    }
}
</script>

<style>

</style>