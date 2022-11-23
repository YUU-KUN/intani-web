import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'

// Auth
import Position from '../views/Position.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

// Confirm
import ConfirmRegister from '../views/confirm/ConfirmRegister.vue'

import Dashboard from '../views/Dashboard.vue'
import AddInvestment from '../views/AddInvestment.vue'

// Portfolio
import Portofolio from '../views/Portofolio/Portofolio.vue'
import InvestmentList from '../views/Portofolio/InvestmentList.vue'
import InvestmentDetail from '../views/Portofolio/InvestmentDetail.vue'
import InvestmentHistory from '../views/Portofolio/InvestmentHistory.vue'
import InvestmentHistoryDetail from '../views/Portofolio/InvestmentHistoryDetail.vue'

// Keuanganku
import MyFinance from '../views/MyFinance/MyFinance.vue'
import ProfitSharing from '../views/MyFinance/ProfitSharing.vue'
import ConfirmProfitSharing from '../views/MyFinance/ConfirmProfitSharing.vue'

import Ekwitansi from '../views/Ekwitansi.vue'

import CariTani from '../views/CariTani.vue'
import OrderInvestment from '../views/OrderInvestment.vue'
import SuccessInvest from '../views/SuccessInvest.vue'
import Datakom from '../views/Datakom.vue'
import Datapedia from '../views/Datapedia.vue'
import Survey from '../views/Survey.vue'

// layouts
import AppBar from '../views/layouts/AppBar.vue'
import BottomNavigationBar from '../views/layouts/BottomNavigationBar.vue'

const routes = [
    {
        path: '/survey',
        name: 'Survey',
        components: {default: Survey, AppBar, BottomNavigationBar},
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/datapedia',
        name: 'Datapedia',
        components: {default: Datapedia, AppBar, BottomNavigationBar},
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/datakom',
        name: 'Datakom',
        components: {default: Datakom, AppBar, BottomNavigationBar},
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/datakom',
        name: 'Datakom',
        components: {default: Datakom, AppBar, BottomNavigationBar},
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/success-invest',
        name: 'Investasi Berhasil',
        component: SuccessInvest,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/ekwitansi-investment/:investment_id',
        name: 'Data Investor',
        components: {default: Ekwitansi, AppBar, BottomNavigationBar},
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/order-investment/:investment_id',
        name: 'Order Investment',
        components: {default: OrderInvestment, AppBar, BottomNavigationBar},
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/cari-tani',
        name: 'Cari Tani',
        components: {default: CariTani, BottomNavigationBar},
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/confirm-profit-sharing',
        name: 'Success Bagi Hasil',
        component: ConfirmProfitSharing,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/profit-sharing',
        name: 'Bagi Hasil',
        components: {default: ProfitSharing, AppBar, BottomNavigationBar},
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/my-finance',
        name: 'Keuanganku',
        components: {default: MyFinance, AppBar, BottomNavigationBar},
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/detail-history-investment/:history_investment_id',
        name: 'Detail Riwayat Investasi',
        components: {default: InvestmentHistoryDetail, AppBar, BottomNavigationBar},
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/history-investment',
        name: 'Riwayat Investasi',
        components: {default: InvestmentHistory, AppBar, BottomNavigationBar},
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/detail-investment/:investment_id',
        name: 'Detail Investasi Berlangsung',
        components: {default: InvestmentDetail, AppBar, BottomNavigationBar},
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/current-investment',
        name: 'Investasi Berlangsung',
        components: {default: InvestmentList, AppBar, BottomNavigationBar},
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/portofolio',
        name: 'Portofolio',
        components: {default: Portofolio, AppBar, BottomNavigationBar},
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/add-investment',
        name: 'Tambah Proses Pertanian',
        components: {default: AddInvestment, AppBar, BottomNavigationBar},
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        components: { default: Dashboard, BottomNavigationBar },
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/confirm-register',
        name: 'Confirm Register',
        component: ConfirmRegister
    },
    {
        path: '/login',
        name: 'Masuk',
        components: { default: Login, AppBar }
    },
    {
        path: '/register/:position',
        name: 'Buat Akun',
        components: { default: Register, AppBar }
    },
    {
        path: '/position',
        name: 'Posisi',
        components: { default: Position, AppBar }
    },
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/About.vue')
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
    },
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
})

export default router
