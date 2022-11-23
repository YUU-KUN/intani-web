<template>
    <div class="flex flex-col justify-start items-center">
        <div v-if="user_role == 'investor'" class="bg-primary rounded-lg p-4 text-white w-full text-left mb-9">
            <p class="text-16 mb-1">Total Terima Investasi</p>
            <p class="font-bold text-18 ">Rp48.000.000.000</p>
        </div>

        <div v-if="user_role == 'farmer'" class="mb-6 w-full">
            <div class="flex justify-between items-center mb-4 ">
                <p class="font-bold">Menunggu Konfirmasi</p>
                <!-- <p @click="$router.push({name: ''})" class="font-bold text-primary">Lihat Semua</p> -->
            </div>
            <div v-if="pending_investment" class="rounded-lg bg-white border border-primary px-4 py-3 w-full mb-3">
                <div class="flex flex-col items-center justify-between">
                    <div class="flex justify-between font-bold w-full mb-3 ">
                        <p class="capitalize">{{pending_investment.investor.name}}</p>
                        <p>{{$filters.currency(pending_investment.amount)}}</p>
                    </div>
                    <div class="flex justify-between w-full">
                        <p class="text-14 text-left mr-10">{{user_role == 'farmer' ? 'Investor' : 'Petani'}}</p>
                        <button @click="acceptInvestment(pending_investment.investment.id)" class="text-white rounded bg-primary text-center px-3 py-2 ">Terima</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="mb-6 w-full">
            <div class="flex justify-between items-center mb-4 ">
                <p class="font-bold">Investasi Berlangsung</p>
                <p @click="$router.push({name: 'Investasi Berlangsung'})" class="font-bold text-primary">Lihat Semua</p>
            </div>
            <div v-if="ongoing_investment" @click="$router.push({name: 'Detail Investasi Berlangsung', params: {investment_id: ongoing_investment.id, halo: 'halooo'}})" class="rounded-lg bg-white border border-primary px-4 py-3 w-full mb-3">
                <div class="flex flex-col items-center justify-between">
                    <div class="flex justify-between font-bold w-full mb-3 ">
                        <p>{{ongoing_investment.investor.name}}</p>
                        <p>{{$filters.currency(ongoing_investment.amount)}}</p>
                    </div>
                    <div class="flex justify-start w-full">
                        <p class="text-14 text-left mr-10">{{user_role == 'farmer' ? 'Investor' : 'Petani'}}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- RIWAYAT INVESTASI -->
        <div class="mb-6 w-full">
            <div class="flex justify-between items-center mb-4 ">
                <p class="font-bold">Riwayat Investasi</p>
                <p @click="$router.push({name: 'Riwayat Investasi'})" class="font-bold text-primary">Lihat Semua</p>
            </div>
            <div v-if="history_investment" @click="$router.push({name: 'Detail Riwayat Investasi', params: {history_investment_id: history_investment.id}})" class="rounded-lg bg-white border border-primary px-4 py-3 w-full mb-3">
                <div class="flex flex-col items-center justify-between">
                    <div class="flex justify-between font-bold w-full mb-3 ">
                        <p>{{history_investment.investor.name}}</p>
                        <p>{{$filters.currency(history_investment.amount)}}</p>
                    </div>
                    <div class="flex justify-start w-full">
                        <!-- <p class="text-14 text-left mr-10">Cisangkuy, Pangalengan, Bandung</p> -->
                        <p class="text-14 text-left mr-10">{{user_role == 'farmer' ? 'Investor' : 'Petani'}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: this.$store.state.user, //farmer
            user_role: '',
            pending_investment: '',
            ongoing_investment: '',
            history_investment: '',

        }
    },
    methods: {
        getFarmerPendingInvestment() {
            this.axios.get('farmer_pending_investment').then(response => {
                this.pending_investment = response.data.data[0];
            }).catch(error => {
                console.log(error.response);
            })
        },
        getFarmerOngoingInvestment() {
            this.axios.get('farmer_accepted_investment').then(response => {
                this.ongoing_investment = response.data.data[0];
            }).catch(error => {
                console.log(error.response);
            })
        },
        getFarmerHistoryInvestment() {
            this.axios.get('farmer_history_investment').then(response => {
                this.history_investment = response.data.data[0]
            }).catch(error => {
                console.log(error.response);
            })
        },
        acceptInvestment(investment_id){
            this.axios.put(`accept_investment/${investment_id}`, {
                investment_id: investment_id
            }).then(response => {
                console.log(response.data);
                this.getFarmerPendingInvestment();
            }).catch(error => {
                console.log(error.response);
            })
        }
    },
    mounted() {
        this.user_role = this.user.user.role;
        this.getFarmerPendingInvestment()
        this.getFarmerOngoingInvestment()
        this.getFarmerHistoryInvestment()
        // if (this.user_role == 'farmer') {
        //     this.getFarmerPendingInvestment()
        //     this.getFarmerOngoingInvestment()
        //     this.getFarmerHistoryInvestment()
        // } else {
            
        // }
    }
}
</script>

<style>

</style>