import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './styles/app.css';

import CTAButton from '@/components/CTAButtonPrimary.vue'
import CTAButtonSecondary from '@/components/CTAButtonSecondary.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL =  process.env.NODE_ENV === 'production' ? 'https://api.intaniofficial.com/api/' : 'http://localhost:8000/api/'
axios.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization')

// if (localStorage.getItem('Authorization')) {
//     axios.interceptors.response.use(undefined, function (error) {
//         if (error) {
//             const originalRequest = error.config;
//             if (error.response.status === 401 && !originalRequest._retry) {
//                 originalRequest._retry = true;
//                 console.log('token expired');
//                 store.dispatch('logout')
//                 router.push('/login')
//             }
//         }
//     })
// }

const app = createApp(App)

app.config.globalProperties.$filters = {
    toCurrency(value) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(value)
    },

    currency(value) {
        if (value) {
            return 'Rp' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
        }
    },

    getDate(value) {
        if (value) {
            const date = new Date(value)
            const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
            // const bulan = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']
            return date.getDate() + ' ' + bulan[date.getMonth()] + ' ' + date.getFullYear()
            // return date.toLocaleDateString('id-ID')
        }
    },

    getDurationMonth(duration, current_iso_month) {
        const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember' ]
        var month = new Date(current_iso_month).getMonth();
        var month_start = bulan[month]
        var month_end = bulan[((month + duration) % 12) - 1]
        return month_start + ' - ' + month_end;
    }
}

app
.component('CTAButton', CTAButton)
.component('CTAButtonSecondary', CTAButtonSecondary)

app
.use(store)
.use(router)
.use(VueAxios, axios)
.mount('#app')

