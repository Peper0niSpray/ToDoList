
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        articles: [],
        user: {},
    },
    getters: {
        getArticles: state => state.articles,
        getArticleById: state => id => state.articles.find(article => article.id == id),
        getUser: state => {
            return state.user;
        }
    },
    mutations: {
        setArticles(state, articles) {
            state.articles = articles,
            state.filteredProducts = articles
        },
        userLogin (state, user) {
            state.user = user
        },
    },
    actions: {
        async loadArticles(ctx) {
            const articles = await fetch('/articles.json').then(r => r.json())
            if (articles) ctx.commit('setArticles', articles)
        },
    }
})

export default store 