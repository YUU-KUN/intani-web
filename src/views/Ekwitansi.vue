<template>
    <div class="flex flex-col justify-between items-center">
        <div class="text-left">
            <p class="font-bold mb-1  text-left">Info Pengguna</p>
            <div class="mb-9 ">
                <div class="flex justify-between items-start mb-1  ">
                    <p>Nama Lengkap: </p>
                    <p class="font-bold text-right">{{user.name}}</p>
                </div>
                <div class="flex justify-between items-start mb-1  ">
                    <p>Nomor Telepon: : </p>
                    <p class="font-bold text-right">{{user.phone}}</p>
                </div>
                <div class="flex justify-between items-start mb-1  ">
                    <p>Alamat: </p>
                    <p class="font-bold text-right">{{user.address ? user.address : '-'}}</p>
                </div>
            </div>

            <p class="font-bold mb-1  text-left">Rekening Bank</p>
            <div class="mb-9">
                <div class="flex justify-between items-start mb-1  ">
                    <p>Nama Bank: : </p>
                    <!-- temporary -->
                    <p class="font-bold text-right">Bank xxx</p>
                </div>
                <div class="flex justify-between items-start mb-1  ">
                    <p>Pemilik Rekening: : </p>
                    <p class="font-bold text-right">{{user_bank.account_name}}</p>
                </div>
                <div class="flex justify-between items-start mb-1  ">
                    <p>Nomor Rekening: </p>
                    <p class="font-bold text-right">{{user_bank.account_number}}</p>
                </div>
            </div>

            <div class="mb-9">
                <div class="flex justify-between items-start mb-1  ">
                    <p>Nominal Investasi Anda:</p>
                    <p class="font-bold text-right">{{$filters.currency(amount)}}</p>
                </div>
                <div class="flex justify-between items-start mb-1  ">
                    <p>Biaya Administrasi 1%: </p>
                    <p class="font-bold text-right">{{$filters.currency(adminFee(amount))}}</p>
                </div>
            </div>
            
            <hr class="my-5 ">

            <div class="flex justify-between font-bold text-14">
                <p>TOTAL PEMBAYARAN</p>
                <p class="text-rignt text-primary">{{$filters.currency(paymentTotal())}}</p>
            </div>
        </div>
        <CTAButton @click="payInvestation">Invest</CTAButton>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            amount: this.$route.query.amount,
            investment_id: this.$route.params.investment_id,
            user: this.$store.getters.userDetail,
            user_bank: this.$store.getters.userDetail.user.user_bank[0],
            payment_total: 0,
        }
    },
    methods: {
        adminFee(amount) {
            return 1/100 * amount
        },
        paymentTotal() {
            console.log(this.adminFee(this.amount));
            this.payment_total = +this.amount + +this.adminFee(this.amount)
            return this.payment_total
        },
        payInvestation() {
            var data = {
                investment_id: this.investment_id,
                amount: this.paymentTotal(),
            }
            // this.$router.push({name: 'Investasi Berhasil', params: {data}, props: {data}})
            this.axios.post(`pay_investment`, data).then(response => {
                this.$router.push({name: 'Investasi Berhasil'})
            }).catch(error => {
                console.log(error.response);
            })
        }
    },
}
</script>

<style>

</style>