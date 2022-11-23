<template>
  <div class="flex flex-col justify-start items-center">
    <input type="text" placeholder="Cari tani / kelompok tani"  class="bg-gray rounded mb-6 px-4 py-3 w-full ">
    <div class="text-left">
        <p class="font-bold mb-4">Berdasarkan Kategori</p>
        <div class="flex items-center justify-start mb-10">
            <div class="rounded-full bg-primary text-white mr-3 px-1 py-3 ">
                <p class="font-bold text-12 px-3 py-1">Terbaik</p>
            </div>
            <div class="rounded-full bg-white border border-primary text-black mr-3 px-1 py-3 ">
                <p class="font-bold text-12 px-3 py-1">Provinsi</p>
            </div>
            <div class="rounded-full bg-white border border-primary text-black mr-3 py-3 ">
                <p class="font-bold text-12 px-3 py-1">Jenis Komoditas</p>
            </div>
        </div>

        <div @click="$router.push({name: 'Order Investment', params: {investment_id: investment.id}})" v-for="investment in available_investments" :key="investment.id" class="flex justify-between items-start py-4 border-b ">
            <div class="flex justify-start items-center">
                <img src="@/assets/images/kelompok_tani/kelompok_tani_1.png" alt="" class="mr-4 ">
                <div>
                    <p class="font-semibold text-16">{{investment.farm_group ? investment.farm_group.name : investment.farmer.name}}</p>
                    <p class="text-12 font-medium capitalize">{{investment.address}}</p>
                </div>
            </div>
            <div class="flex flex-col justify-start items-end">
                <div class="flex items-center">
                    <i class="fa-solid fa-star text-yellow "></i>
                    {{investment.farm_group ? investment.farm_group.rating : investment.farmer.rating}}
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
            available_investments: []
        }
    },
    methods: {
        // async getAvailableInvestment() {
        //     const response = await this.$axios.get('available_investments')
        //     this.available_investment = response.data.data
        // }
        getAvailableInvestment() {
            this.axios.get('available_investments').then(response => {
                console.log(response.data.data);
                this.available_investments = response.data.data
            }).catch(error => {
                console.log(error.response);
            })
        }
    },
    mounted() {
        this.getAvailableInvestment()
    }
}
</script>

<style>

</style>