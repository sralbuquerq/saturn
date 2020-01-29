import { createStore } from 'redux';

const initial_state = {
    started: false,
    articles: [{}, {}, {}, {}],
    articleActive: {}
};

function reducer(state = initial_state, action) {
    switch (action.type) {
        case 'GET_ARTICLES':
            return {
                ...state,
                started: true,
                articles: [
                    ...action.payload
                ]
            }
        case 'ACTIVE_ARTICLE':
            return {
                ...state,
                articles: [
                    ...state.articles.map(article => (article === action.payload) ? { ...article.active = true, ...article } : { ...article, ...article.active = false })
                ],
                articleActive: action.payload
            }
        case 'SUBMIT_ARTICLE':
            return {
                ...state,
                articles: [
                    ...state.articles,
                    action.payload
                ]
            }
        case 'DELETE_ARTICLE':
            return {
                ...state,
                articles: [
                    ...state.articles.filter(article => article.active !== true)
                ],
                articleActive: {}
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;