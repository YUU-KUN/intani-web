<template>
  <div class="flex flex-col justify-between items-center">
    <div></div>
    <div>
        <p class="font-bold text-48  mb-20 "><span class="text-primary">IN</span>TANI</p>
        <p class="font-bold text-18 mb-2">PENDAFTARAN BERHASIL</p>
        <p id="subtitle" class="text-14 font-medium">
            Selamat datang di <span class="font-bold"><span class="text-primary">IN</span>TANI</span>
        </p>
    </div>
    <CTAButton @click="login">Lanjut</CTAButton>
  </div>
</template>

<script>
export default {
    data() {
        return {
            user: this.$route.params.user
        }
    },
    methods: {
        login() {
            this.$store.dispatch('login', user).then(() => {
                this.$router.push({name: 'Dashboard'})
            })
        }
    },
    mounted() {
      console.log(this.user);
    }
}
</script>

<style>

</style>