/*
 * action types
 */
export const GET_ARTICLES = 'GET_ARTICLES'
export const ACTIVE_ARTICLE = 'ACTIVE_ARTICLE'
export const SUBMIT_ARTICLE = 'SUBMIT_ARTICLE'
export const DELETE_ARTICLE = 'DELETE_ARTICLE'
/*
 * action creators
 */
export function getArticles(payload) {
return { type: GET_ARTICLES, payload }
}

export function activeArticle(payload) {
  return { type: ACTIVE_ARTICLE, payload }
}

export function submitArticle(payload) {
  return { type: SUBMIT_ARTICLE, payload }
}

export function deleteArticle(payload) {
  return { type: DELETE_ARTICLE, payload }
}