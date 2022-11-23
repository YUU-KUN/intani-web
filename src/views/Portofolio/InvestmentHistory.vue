<template>
    <div class="flex flex-col justify-start items-center">
        <div v-for="investment_history in investment_histories" :key="investment_history.id" @click="$router.push({name: 'Detail Riwayat Investasi', params: {history_investment_id: investment_history.id}, state: {halo: 'state haloo'}})" class="rounded-lg bg-white border border-primary px-4 py-3 w-full mb-3">
            <div class="flex flex-col items-center justify-between">
                <div class="flex justify-between font-bold w-full mb-3 ">
                    <p>{{investment_history.investor.name}}</p>
                    <p>{{$filters.currency(investment_history.amount)}}</p>
                </div>
                <div class="flex justify-between w-full">
                    <p class="text-14 text-left mr-10 capitalize">{{investment_history.investment.address}}</p>
                    <button class="bg-primary rounded text-white text-12 font-medium px-2 uppercase">BERHASIL</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            investment_histories: [],
        }
    },
    methods: {
        getInvestmentHistory() {
            this.axios.get('farmer_history_investment').then(response => {
                console.log(response.data.data);
                this.investment_histories = response.data.data;
            }).catch(error => {
                console.log(error.response);
            })
        }
    },
    mounted() {
        this.getInvestmentHistory()
    }
}
</script>

<style>

</style>