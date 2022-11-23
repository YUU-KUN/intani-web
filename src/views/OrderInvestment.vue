<template>
  <div class="flex flex-col justify-between items-center">
    <div class="w-full" v-if="investment.farm_group || investment.farmer">
        <img src="@/assets/images/kelompok_tani/kelompok_tani_1.png" alt="" class="mx-auto mb-3">
        <div v-if="investment.farm_group">
            <!-- <pre>{{investment.farm_group}}</pre> -->
            <p class="font-bold text-18 mb-6 ">{{investment.farm_group.name}}</p>
        </div>
        <div v-else>
            <p class="font-bold text-18 mb-6 ">{{investment.farm_group ? investment.farm_group.name : investment.farmer.name}}</p>
        </div>
        <p class="text-14 mb-6">{{investment.address}}</p>
    
        <!-- temporary hidden -->
        <div v-if="false" class="grid grid-cols-5 gap-2 border-b pb-6 mb-6">
            <img src="@/assets/images/tani.png" alt="">
            <img src="@/assets/images/tani.png" alt="">
            <img src="@/assets/images/tani.png" alt="">
        </div>

        <div class="mb-6 text-left">
            <p class="font-bold text-14 mb-2 ">Durasi Proses Pertanian</p>
            <!-- <p class="text-14">{{month_start}} - {{month_end}} <span class="text-primary font-semibold">({{investment.duration}} Bulan)</span></p> -->
            <p class="text-14">{{$filters.getDurationMonth(investment.duration, investment.created_at)}} <span class="text-primary font-semibold">({{investment.duration}} Bulan)</span></p>
        </div>

        <div>
            <p class="text-left font-bold text-14 mb-2 ">Jumlah Investasi</p>
            <div class="flex items-stretch justify-between mb-2">
                <button class="border rounded-lg w-[35px] h-[35px]" @click="lembar > 1 ? lembar-- : lembar = 1">
                    <i class="fa-solid fa-minus"></i>
                </button>
                <input type="number" class="border bg-white rounded-lg" v-model="lembar">
                <button class="border rounded-lg w-[35px] h-[35px]" @click="lembar++">
					<i class="fa-solid fa-plus"></i>
                </button>
            </div>
            <p>Lembar</p>
        </div>
    </div>
    <div class="w-full">
        <div class="text-right mb-11 ">
            <p class="font-medium text-12">Total Investasi</p>
            <p class="font-bold text-18 text-primary">{{$filters.currency(total)}}</p>
        </div>
        <CTAButton @click="continueToPayment">Lanjut ke Pembayaran</CTAButton>
    </div>

  </div>
</template>

<script>
export default {
    data() {
        return {
            lembar: 1,
            price: 5000000,
            investment_id: this.$route.params.investment_id,
            investment: {},
            total_investment_price: 0,

        }
    },
    methods: {
        getDetailInvestment() {
            this.axios.get(`investments/${this.investment_id}`)
                .then(res => {
                    this.investment = res.data.data
                })
                .catch(err => {
                    console.log(err.response)
                })
        },
        continueToPayment() {
            var investment_id = this.investment_id
            var amount = this.total_investment_price
            this.$router.push({name: 'Data Investor', params: {investment_id}, query: {amount}})
        },
        
    },
    mounted() {
        this.getDetailInvestment()
    },
    computed: {
        total() {
            return this.total_investment_price = this.lembar * this.price
        }

    }
}
</script>

<style scoped>
::placeholder {
   text-align: center; 
}
input{
   text-align:center;
}

</style>