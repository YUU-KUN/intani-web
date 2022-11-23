import { createStore } from 'vuex'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

export default createStore({
	plugins: [createPersistedState()],
	state: {
		token: localStorage.getItem('Authorization') || '',
		user: {},
		total_invest_received: 0,
	},
	mutations: {
		auth_request(state) {},
		auth_success(state, token) {
			state.token = token
		},
		userDetail(state, user) {
			state.user = user
		},
		setTotalInvestReceived(state, total_invest_received) {
			state.total_invest_received = total_invest_received
		},
		auth_error(state) {},
		logout(state) {
			state.token = ''
			state.user = {}
		},
	},
	actions: {
		// register({ commit }, user) {
		// 	return new Promise((resolve, reject) => {
		// 		commit('auth_request')
		// 		axios.post('auth/register', user).then(response => {
		// 			sessionStorage.setItem('name', user.name)
		// 			sessionStorage.setItem('email', user.email)
		// 			sessionStorage.setItem('password', user.password)
		// 			sessionStorage.setItem('phone', user.phone)
					
		// 			this.$router.push({name: 'Verification'})
		// 			resolve(response)
		// 		}).catch(error => {
		// 			reject(error)
		// 		})
		// 	})
		// },
		
		login({ commit }, user) {
			return new Promise((resolve, reject) => {
				axios.post('login', user).then(response => {
          const token = `Bearer ${response.data.data.token}`
          const user = response.data.data.user
          commit('userDetail', user)
          localStorage.setItem('Authorization', token)
          axios.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization')
          commit('auth_success', token)
					resolve(response)
				})
				.catch(err => {
					commit('auth_error')
					localStorage.removeItem('Authorization')
					reject(err)
				})
			})
		},

		getProfile({ commit }) {
			return new Promise((resolve, reject) => {
				axios.get('profile').then(response => {
					if (response.data.success) {
						const userData = response.data.data
						commit('userDetail', userData)
					}
					resolve(response)
				})
				.catch(err => {
					reject(err.response)
				})
			})
		},

		setTotalInvestReceived({ commit }, total) {
			commit('setTotalInvestReceived', total)
		},

		logout({ commit }) {
			return new Promise((resolve, reject) => {
				commit('logout')
				localStorage.removeItem('Authorization')
				delete axios.defaults.headers.common['Authorization']
				resolve()
			})
		},
	},
	getters: {
		isLoggedIn: state => !!state.token,
		userDetail: state => state.user,
		totalInvestReceived: state => state.total_invest_received,
	}
})