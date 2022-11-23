<template>
    <div class="flex flex-col items-center justify-center h-full">
        <img class="mb-7 " :src="require('@/assets/images/welcome-image.png')" alt="">
        <p class="font-bold text-18 mb-3">Selamat datang di <span class="text-primary">IN</span>TANI</p>
        <p class="text-12 mb-20">Memajukan dan memudahkan petani Indonesia</p>
        
        <CTAButton @click="$router.push({ name: 'Masuk' })" class="mb-2 ">Masuk</CTAButton>
        <CTAButtonSecondary @click="$router.push('/position')" class="mb-8 ">Belum ada akun? Daftar dulu</CTAButtonSecondary>
        
        <!-- temporary -->
        <!-- <p class="mb-3">Atau masuk dengan</p>
        <button class="rounded-full bg-white shadow-lg p-3 ">
            <img :src="require('@/assets/images/icons/google-icon.png')" alt="">
        </button> -->

    </div>
</template>
<script>
export default {
    name: 'Welcome',
    mounted() {
    }
};
</script>