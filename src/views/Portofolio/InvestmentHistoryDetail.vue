<template>
    <div class="flex flex-col justify-start items-center">
        <div v-if="detail_history_investment" class="w-full">
            <!-- <p class="font-bold mb-5 text-left">Info Data</p> -->
            <div class="text-left mb-5 ">
                <p>Jenis Tani</p>
                <p class="font-bold ">{{detail_history_investment.investment.farm_group_id ? 'Kelompok Tani' : 'Petani Tunggal'}}</p>
            </div>
            <div class="text-left mb-5 ">
                <p>Nama Investor: </p>
                <p class="font-bold">{{detail_history_investment.investor.name}}</p>
            </div>
            <div class="text-left mb-5 ">
                <p>Alamat: </p>
                <p class="font-bold">{{detail_history_investment.investor.address ? detail_history_investment.investor.address : '-'}}</p>
            </div>
            <div class="text-left mb-5 ">
                <p>Investasi: </p>
                <p class="font-bold">{{$filters.currency(detail_history_investment.amount)}}</p>
            </div>
            <div class="text-left mb-5 ">
                <p>Tanggal Investasi: </p>
                <p class="font-bold">{{$filters.getDate(detail_history_investment.created_at)}}</p>
            </div>
            <div class="text-left mb-5 ">
                <p>Nama Komoditas: </p>
                <p class="font-bold">{{detail_history_investment.investment.commodity}}</p>
            </div>
            <div class="text-left mb-5 ">
                <p>Periode: </p>
                <p class="font-bold">{{$filters.getDurationMonth(detail_history_investment.investment.duration, detail_history_investment.created_at)}}</p>
            </div>
            <div class="text-left mb-5 ">
                <p class="font-bold">STATUS</p>
                <p class="font-bold text-primary">BERHASIL</p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            user_role: this.$store.state.user.user.role, //farmer
            investment_id: this.$route.params.history_investment_id,
            detail_history_investment: ''
        }
    },
    methods: {
        getDetailHistoryInvestment() {
            this.axios.get(`investor_investments/${this.investment_id}`).then(res => {
                this.detail_history_investment = res.data.data
                console.log(this.detail_history_investment);
            }).catch(err => {
                console.log(err.response);
            })
        }
    },
    mounted() {
        this.getDetailHistoryInvestment();
    }
}
</script>

<style>

</style>