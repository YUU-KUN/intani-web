<template>
    <div class="flex flex-col justify-between">
        <div class="items-stretch">
    
            <!-- EMAIL -->
            <div class="text-left mb-5 ">
                <div class="mb-2 ">
                    <label for="email">Email <span class="text-red-500 ">*</span></label>
                </div>
                <input class="w-full border-2 border-strong-gray rounded-md py-2 px-3" type="email" id="email" placeholder="example@example.com" v-model="email" required/>
            </div>

            <!-- PASSWORD -->
            <div class="text-left mb-5 password-container">
                <div class="mb-2 ">
                    <label for="password">Kata Sandi <span class="text-red-500 ">*</span></label>
                </div>
                <input class="w-full border-2 border-strong-gray rounded-md py-2 px-3" :type="password_type" id="password"
                    placeholder="Pastikan password anda aman" v-model="password" required />
                <i class="fa-solid" :class="eye_class" id="eye" @click="toggleShowPassword"></i>
            </div>

            <p class="text-red-500">{{message}}</p>

        </div>
        <CTAButton @click="login">
            <!-- <svg class="animate-spin text-white h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg> -->
            Masuk
        </CTAButton>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            message: '',

            password_type: 'password',
            eye_class: 'fa-eye',
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
            }).catch(error => {
                this.message = error.response.data.message;
            })
        },

        toggleShowPassword() {
            this.eye_class = this.eye_class == 'fa-eye' ? 'fa-eye-slash' : 'fa-eye'
            this.password_type = this.password_type == 'password' ? 'text' : 'password'
        }
    },
}
</script>

<style scoped>
.password-container {
    position: relative;
}

.password-container input[type="password"],
.password-container input[type="text"] {
    width: 100%;
    padding: 12px 36px 12px 12px;
    box-sizing: border-box;
}

.fa-solid {
    position: absolute;
    /* top: 28%; */
    top: 60%;
    /* top: 15%; */
    right: 5%;
    cursor: pointer;
    color: lightgray;
}
</style>