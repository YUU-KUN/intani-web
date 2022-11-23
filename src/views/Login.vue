<template>
    <div class="flex flex-col justify-between">
        <div class="items-stretch">
    
            <!-- EMAIL -->
            <div class="text-left mb-5 ">
                <div class="mb-2 ">
                    <label for="email">Email <span class="text-text-red-500 ">*</span></label>
                </div>
                <input class="w-full border-2 border-strong-gray rounded-md py-2 px-3" type="email" id="email" placeholder="example@example.com" v-model="email" required/>
            </div>
    
            <!-- PASSWORD -->
            <div class="text-left mb-5 ">
                <div class="mb-2 ">
                    <label for="password">Kata Sandi <span class="text-red-500 ">*</span></label>
                </div>
                <input class="w-full border-2 border-strong-gray rounded-md py-2 px-3" type="password" id="password" placeholder="Pastikan password anda aman ya~" v-model="password" required/>
            </div>
        </div>
        <CTAButton @click="login">Masuk</CTAButton>

        
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {

        login() {
            var user = {
                email: this.email,
                password: this.password,
            }
            this.$store.dispatch('login', user).then(() => {
                this.$router.push({name: 'Dashboard'})
            })
        }
    },
}
</script>

<style>

</style>