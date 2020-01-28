/*
 * action types
 */
export const ACTIVE_ARTICLE = 'ACTIVE_ARTICLE'
export const SUBMIT_ARTICLE = 'SUBMIT_ARTICLE'
/*
 * action creators
 */
export function activeArticle(payload) {
  return { type: ACTIVE_ARTICLE, payload }
}

export function submitArticle(payload) {
  return { type: SUBMIT_ARTICLE, payload }
}