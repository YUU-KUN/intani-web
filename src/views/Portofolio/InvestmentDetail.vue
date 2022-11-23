<template>
    <div v-if="user_role == 'farmer'" class="flex flex-col justify-between items-center">
        <div v-if="detail_investment" class="w-full">
            <!-- <p class="font-bold mb-5 text-left">Info Data</p> -->
            <div class="text-left mb-5 ">
                <p>Jenis Tani</p>
                <p class="font-bold ">{{detail_investment.investment.farm_group_id ? 'Kelompok Tani' : 'Petani Tunggal'}}</p>
            </div>
            <div class="text-left mb-5 ">
                <p>Nama Investor: </p>
                <p class="font-bold">{{detail_investment.investor.name}}</p>
            </div>
            <div class="text-left mb-5 ">
                <p>Alamat: </p>
                <p class="font-bold">{{detail_investment.investor.address ? detail_investment.investor.address : '-'}}</p>
            </div>
            <div class="text-left mb-5 ">
                <p>Investasi: </p>
                <p class="font-bold">{{$filters.currency(detail_investment.amount)}}</p>
            </div>
            <div class="text-left mb-5 ">
                <p>Tanggal Investasi: </p>
                <p class="font-bold">{{$filters.getDate(detail_investment.created_at)}}</p>
            </div>
            <div class="text-left mb-5 ">
                <p>Nama Komoditas: </p>
                <p class="font-bold">{{detail_investment.investment.commodity}}</p>
            </div>
            <div class="text-left mb-5 ">
                <p>Periode: </p>
                <p class="font-bold">{{$filters.getDurationMonth(detail_investment.investment.duration, detail_investment.created_at)}}</p>
            </div>
        </div>
        <CTAButton @click="finishInvestment()">Selesaikan Proses Investasi</CTAButton>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user_role: this.$store.state.user.user.role, //farmer
            investment_id: this.$route.params.investment_id,
            detail_investment: '',
        }
    },
    methods: {
        getDetailInvestment() {
            this.axios.get(`investor_investments/${this.investment_id}`).then(res => {
                this.detail_investment = res.data.data
            }).catch(err => {
                console.log(err.response);
            })
        },
        finishInvestment() {
            this.axios.post(`farmer_finish_investment/${this.investment_id}`).then(res => {
                this.$router.push({name: 'Portofolio'})
            }).catch(err => {
                console.log(err.response);
            })
        }
    },  
    mounted() {
        this.getDetailInvestment()
        console.log(this.$route.params);
    }
}
</script>

<style>

</style>