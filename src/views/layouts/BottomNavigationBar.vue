<template>
    <div class="flex justify-between items-center bg-white h-[60px] px-10 py-4">
        <div>
            <img v-if="isCurrentPage('Dashboard')" src="@/assets/images/icons/home-active.png" alt="home active">
            <img @click="redirect('Dashboard')" v-else src="@/assets/images/icons/home.png" alt="home nonactive">
        </div>
        <div v-if="user.user.role == 'farmer'">
            <img v-if="isCurrentPage('Datapedia')" src="@/assets/images/icons/datapedia-active.png" alt="datapedia active">
            <img @click="redirect('Datapedia')" v-else src="@/assets/images/icons/datapedia.png" alt="datapedia nonactive">
        </div>
        <div v-else>
            <img v-if="isCurrentPage('Cari Tani')" src="@/assets/images/icons/caritani-active.png" alt="cari tani active">
            <img @click="redirect('Cari Tani')" v-else src="@/assets/images/icons/caritani.png" alt="cari tani nonactive">
        </div>
        <div>
            <img v-if="isCurrentPage('Portofolio')" src="@/assets/images/icons/portfolio-active.png" alt="portfolio active">
            <img @click="redirect('Portofolio')" v-else src="@/assets/images/icons/portfolio.png" alt="portfolio nonactive">
        </div>
        <div>
            <img v-if="isCurrentPage('Datakom')" src="@/assets/images/icons/datakom-active.png" alt="datakom active">
            <img @click="redirect('Datakom')" v-else src="@/assets/images/icons/datakom.png" alt="datakom nonactive">
        </div>
        <div>
            <img v-if="isCurrentPage('Survey')" src="@/assets/images/icons/survey-active.png" alt="survey active">
            <img @click="redirect('Survey')" v-else src="@/assets/images/icons/survey.png" alt="survey nonactive">
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
        isCurrentPage(page) {
            return this.$route.name === page
        },
        redirect(name) {
            this.$router.push({ name })
        }
    }
}
</script>

<style>

</style>