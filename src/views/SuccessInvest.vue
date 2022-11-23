<template>
    <div class="flex flex-col justify-between items-center">
        <p class="font-bold text-48 "><span class="text-primary">IN</span>TANI</p>
        <div>
            <div class="mb-7 text-left">
                <p class="font-bold text-18 text-primary">INVESTASI ANDA BERHASIL</p>
                <p class="text-14">Senin, 22 Agustus 2022</p>
            </div>
            <p class="font-bold mb-1  text-left">Info Pengguna</p>
            <div class="mb-9 ">
                <div class="flex justify-between items-start mb-1  ">
                    <p>Nama Lengkap: </p>
                    <p class="font-bold text-right">Yanti Kusmianti</p>
                </div>
                <div class="flex justify-between items-start mb-1  ">
                    <p>Nomor Telepon: : </p>
                    <p class="font-bold text-right">08xxxxxxxxxxx</p>
                </div>
                <div class="flex justify-between items-start mb-1  ">
                    <p>Alamat: </p>
                    <p class="font-bold text-right">Cisangkuy, Pangalengan, Bandung</p>
                </div>
            </div>

            <p class="font-bold mb-1  text-left">Rekening Bank</p>
            <div class="mb-9">
                <div class="flex justify-between items-start mb-1  ">
                    <p>Nama Bank: : </p>
                    <p class="font-bold text-right">Bank xxx</p>
                </div>
                <div class="flex justify-between items-start mb-1  ">
                    <p>Pemilik Rekening: : </p>
                    <p class="font-bold text-right">Yanti xxxxxx</p>
                </div>
                <div class="flex justify-between items-start mb-1  ">
                    <p>Nomor Rekening: </p>
                    <p class="font-bold text-right">13xxxxxxxxxx</p>
                </div>
                <div class="flex justify-between items-start mb-1  ">
                    <p>Periode: </p>
                    <p class="font-bold text-right">November-Januari</p>
                </div>
            </div>

            <div class="mb-9">
                <div class="flex justify-between items-start mb-1  ">
                    <p>Nominal Investasi Anda:</p>
                    <p class="font-bold text-right">5.000.000</p>
                </div>
                <div class="flex justify-between items-start mb-1  ">
                    <p>Biaya Administrasi 1%: </p>
                    <p class="font-bold text-right">50.000</p>
                </div>
            </div>

            <hr class="my-5 ">

            <div class="flex justify-between font-bold text-14">
                <p>TOTAL PEMBAYARAN</p>
                <p class="text-primary">5.050.000</p>
            </div>
        </div>
        <CTAButton @click="$router.push({name: 'Dashboard'})">Selesai</CTAButton>
    </div>
</template>

<script>
export default {
}
</script>

<style>

</style>