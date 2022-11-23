<template>
	<div class="flex flex-col items-start justify-between h-full">
		<div>
			<div class="flex items-center justify-between bg-gray rounded-lg py-2 px-6 w-full mb-8 ">
				<div class="flex items-center justify-start">
					<i class="fa-solid fa-user mr-4"></i>
					<div class="text-left">
						<p class="font-bold text-14">{{user.name}}</p>
						<p class="text-12 uppercase">{{user.user.role == 'farmer' ? 'petani' : 'investor' }}</p>
					</div>
				</div>
				<i @click="logout" class="fa-solid fa-right-from-bracket"></i>
			</div>
			<div class="bg-primary rounded-lg px-5 py-2 w-full mb-8 ">
				<div class="flex items-center justify-between text-white">
					<div class="text-left">
						<p class="text-16 mb-2 ">KeuanganKu</p>
						<p class="font-bold text-18 ">{{$filters.currency(user.saldo)}}</p>
						<p class="text-12" @click="$router.push({name: 'Keuanganku'})">klik & lihat rincian keuangan</p>
					</div>
					<div class="flex">
						<div class="mr-4">
							<div class="bg-white rounded-lg mb-2">
								<i class="fa-solid fa-plus text-primary p-3"></i>
							</div>
							<p class="font-bold text-10">Isi Saldo</p>
						</div>
						<div>
							<div class="bg-white rounded-lg mb-2">
								<i class="fa-solid fa-minus text-primary p-3"></i>
							</div>
							<p class="font-bold text-10">Transfer</p>
						</div>
					</div>
				</div>
			</div>
	
			<p class="font-bold mb-4 text-left">Berita Terkini</p>
			<div class="rounded-lg bg-white w-full shadow-lg">
				<img src="@/assets/images/news/news_1.png" alt="" class="object-cover w-full rounded-lg">
				<div class="px-5 py-3 text-left">
					<p class="font-bold text-14 mb-4">Cara Amerika Serikat Dalam Memajukan Teknologi Pertanian Kacang Kedelai</p>
					<p class="text-12">Gootex Informasi Teknologi - Mj</p>
					<p class="text-12">02 Mei 2016</p>
	
				</div>
			</div>
		</div>
		<div v-if="user.user.role == 'farmer'" class="flex justify-end items-center w-full">
			<button @click="$router.push({name: 'Tambah Proses Pertanian'})" class="bg-primary rounded-full p-3">
				<i class="fa-solid fa-plus text-white p-3"></i>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: this.$store.getters.userDetail
		}
	},
	methods: {
		logout() {
			this.$store.dispatch('logout').then(() => {
				this.$router.push({name: 'Welcome'})
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