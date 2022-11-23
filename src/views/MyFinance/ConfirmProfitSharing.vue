<template>
  <div class="flex flex-col justify-between items-center">
    <div></div>
    <div>
        <p class="font-bold text-48  mb-20 "><span class="text-primary">IN</span>TANI</p>
        <p class="font-bold text-18 mb-2">PEMBAGIAN HASIL BERHASIL</p>
        <p id="subtitle" class="text-14 font-medium">
            Selamat dan semoga sukses
        </p>
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