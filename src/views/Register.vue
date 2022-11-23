<template>
    <div class="flex flex-col justify-between">
        <div v-if="state == first" class="items-stretch">
            <!-- NAME -->
            <div class="text-left mb-5 ">
                <div class="mb-2 ">
                    <label for="name">Nama <span class="text-text-red-500 ">*</span></label>
                </div>
                <input class="w-full border-2 border-strong-gray rounded-md py-2 px-3" type="text" id="name" placeholder="Ketik nama anda" v-model="name" required/>
            </div>
    
            <!-- EMAIL -->
            <div class="text-left mb-5 ">
                <div class="mb-2 ">
                    <label for="email">Email <span class="text-text-red-500 ">*</span></label>
                </div>
                <input class="w-full border-2 border-strong-gray rounded-md py-2 px-3" type="email" id="email" placeholder="example@example.com" v-model="email" required/>
            </div>
    
            <!-- PHONE -->
            <div class="text-left mb-5 ">
                <div class="mb-2 ">
                    <label for="phone">Nomor HP <span class="text-red-500 ">*</span></label>
                </div>
                <input class="w-full border-2 border-strong-gray rounded-md py-2 px-3" type="phone" id="phone" placeholder="08xxxxxxxxxxxxx" v-model="phone" required/>
            </div>
    
            <!-- PASSWORD -->
            <div class="text-left mb-5 ">
                <div class="mb-2 ">
                    <label for="password">Kata Sandi <span class="text-red-500 ">*</span></label>
                </div>
                <input class="w-full border-2 border-strong-gray rounded-md py-2 px-3" type="password" id="password" placeholder="Pastikan password anda aman ya~" v-model="password" required/>
            </div>
    
            <!-- NIK -->
            <div class="text-left mb-5 ">
                <div class="mb-2 ">
                    <label for="nik">NIK <span class="text-red-500 ">*</span></label>
                </div>
                <input class="w-full border-2 border-strong-gray rounded-md py-2 px-3" type="password" id="nik" placeholder="Ketik NIK anda" v-model="nik" required/>
            </div>
    
            <!-- KTP -->
            <div class="text-left mb-5 ">
                <div class="mb-2 ">
                    <label for="ktp">Scan KTP <span class="text-red-500 ">*</span></label>
                </div>
                <input ref="file" class="w-full border-2 border-strong-gray rounded-md py-2 px-3" type="file" id="ktp" placeholder="Ketik ktp anda" required @change="selectImage()"/>
            </div>
    
            <!-- FARM GROUP -->
            <div v-if="role == 'farmer'" class="text-left mb-5 ">
                <div class="mb-2 ">
                    <label for="farm-group">Kelopmpok Tani</label>
                </div>
                <select id="farm-group" class="w-full border-2 border-strong-gray rounded-md py-2 px-3" v-model="farm_group_id">
                    <option value="" selected disabled>Pilih Kelopmpok Tani</option>
                    <option v-for="farm_group in farm_groups" :value="farm_group.id" :key="farm_group.id">{{farm_group.name}}</option>
                </select>
            </div>
        </div>
        <div v-else-if="state == second" class="items-stretch">
            <!-- CHOOSE BANK -->
            <div v-if="role == 'farmer'" class="text-left mb-5 ">
                <div class="mb-2 ">
                    <label for="name">Nama Bank <span class="text-text-red-500 ">*</span></label>
                </div>
                <select id="farm-group" class="w-full border-2 border-strong-gray rounded-md py-2 px-3" v-model="bank_id">
                    <option value="" selected disabled>Pilih bank anda</option>
                    <option v-for="bank in banks" :value="bank.id" :key="bank.id">{{bank.bank_name}}</option>
                </select>
            </div>

            <!-- BANK ACCOUNT NUMBER -->
            <div class="text-left mb-5 ">
                <div class="mb-2 ">
                    <label for="name">Nomor Rekening <span class="text-text-red-500 ">*</span></label>
                </div>
                <input class="w-full border-2 border-strong-gray rounded-md py-2 px-3" type="number" id="name" placeholder="Pastikan nomor rekening benar ya~" v-model="account_number" required/>
            </div>

            <!-- BANK USER NAME -->
            <div class="text-left mb-5 ">
                <div class="mb-2 ">
                    <label for="name">Nama Pemiliki Rekening <span class="text-text-red-500 ">*</span></label>
                </div>
                <input class="w-full border-2 border-strong-gray rounded-md py-2 px-3" type="text" id="name" placeholder="Ketik nama pemilik rekening" v-model="account_name" required/>
            </div>
        </div>
        <CTAButton v-if="state == first" @click="state = second; getAllBanks()">Lanjut</CTAButton>
        <CTAButton v-else @click="register">Daftar</CTAButton>

        
    </div>
</template>

<script>
export default {
    data() {
        return {
            banks: [],
            farm_groups: [],

            first: 'user',
            second: 'bank',
            state: 'user',

            nik: '',
            phone: '',
            email: '',
            password: '',
            name: '',
            role: this.$route.params.position,
            farm_group_id: '',

            account_name: '',
            account_number: '',
            bank_id: '',

            currentImage: '',
            previewImage: ''

        }
    },
    methods: {
        getFarmGroups() {
            this.axios.get('farm_groups').then(response => {
                this.farm_groups = response.data.data
            }).catch(error => {
                console.log(error.response);
            })
        },

        getAllBanks() {
            this.axios.get('banks').then(response => {
                this.banks = response.data.data
            }).catch(error => {
                console.log(error.response);
            })
        },

        selectImage() {
            this.ktp = this.$refs.file.files.item(0);
        },

        register() {
            var formData = new FormData()
            formData.append('email', this.email)
            formData.append('password', this.password)
            formData.append('role', this.role)

            formData.append('name', this.name)
            formData.append('phone', this.phone)
            formData.append('nik', this.nik)
            formData.append('ktp', this.ktp)
            if (this.role == 'farmer') {
                formData.append('farm_group_id', this.farm_group_id)
            }
            
            formData.append('bank_id', this.bank_id)
            formData.append('account_number', this.account_number)
            formData.append('account_name', this.account_name)

            this.axios.post('register', formData).then(response => {
                // this.$router.push({name: 'login'})
                var user = {
                    email: this.email,
                    password: this.password
                }
                this.$router.push({name: 'Confirm Register', params: {user}})
                // this.$store.dispatch('login', user).then(() => {
                //     this.$router.push({name: 'Confirm Register', params: {user}})
                // })
            }).catch(error => {
                console.log(error.response);
            })
        }
    },
    mounted() {
        this.getFarmGroups()
    }
}
</script>

<style>

</style>