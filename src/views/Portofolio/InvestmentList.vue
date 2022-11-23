<template>
    <div class="flex flex-col justify-start items-center">
        <div v-for="investment in current_investments" :key="investment.id" @click="$router.push({name: 'Detail Investasi Berlangsung', params: {investment_id: investment.id}})" class="rounded-lg bg-white border border-primary px-4 py-3 w-full mb-3">
            <div class="flex flex-col items-center justify-between">
                <div class="flex justify-between font-bold w-full mb-3 ">
                    <p>{{investment.investor.name}}</p>
                    <p>{{$filters.currency(investment.amount)}}</p>
                </div>
                <div class="flex justify-start w-full">
                    <p class="text-14 text-left mr-10 capitalize">{{investment.investment.address}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            current_investments: '',
        }
    },
    methods: {
        getCurrentInvestment() {
            this.axios.get('farmer_accepted_investment').then(response => {
                console.log(response.data.data);
                this.current_investments = response.data.data;
            }).catch(error => {
                console.log(error.response);
            })
        }
    },
    mounted() {
        this.getCurrentInvestment()
    }
}
</script>

<style>

</style>