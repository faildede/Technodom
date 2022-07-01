import axios from 'axios'

export default {
    actions: {
        async fetchCart({commit}, id) {
            const res = await axios.get('http://localhost:3001/products');
            const newProducts = res.data;
            const filteredProduct = newProducts[id];
            commit('addProductsCart', filteredProduct)
        },
        removeAll({commit}) {
            commit('clearProducts')
        },
        removeSingleProduct({commit}, receivedID) {
            commit('singleClear', receivedID)
        }
    },
    mutations: {
        addProductsCart(state, filteredProduct) {
            state.cart.push(filteredProduct)
            state.counter = state.cart.length
        },
        clearProducts(state) {
            state.cart = []
            state.counter = 0
        },
        singleClear(state, receivedID) {
            state.cart.splice(receivedID, 1);
            state.counter -= 1
        }
    },
    state: {
        cart: [],
        counter: 0
    },
    getters: {
        cartProducts(state) {
            return state.cart
        },
        counterStatus(state) {
            return state.counter
        }
    }
}