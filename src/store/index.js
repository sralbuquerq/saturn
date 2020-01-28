import { createStore } from 'redux';

const initial_state = {
    articles: [{
        title: 'Aquele título maroto...',
        subject: 'esports',
        timer: '10/02/1993 18:30',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. \n" +
            "\n" +
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n" +
            "\n" +
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. \n" +
            "\n" +
            "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        active: false
    }, {
        title: 'Aquele título maroto...',
        subject: 'football',
        timer: '10/02/1993 18:30',
        active: false
    }, {
        title: 'Aquele título maroto...',
        subject: 'soccer',
        timer: '10/02/1993 18:30',
        active: false
    }, {}],
    articleActive: {}
};

function reducer(state = initial_state, action) {
    switch (action.type) {
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
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;