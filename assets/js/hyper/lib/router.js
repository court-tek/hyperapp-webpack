import { ROUTES } from "../components/siteNavigation.js";

/* Subscription for onhashchange */
export const Hash = (() => {
    let subscribed = false
    const sub = (dispatch, action) => {
        let handler = () => dispatch(action, window.location.hash ||'#')
        if (!subscribed) {
            subscribed = true
            handler()
        }
        window.addEventListener('hashchange', handler)
        return () => window.removeEventListener('hashchange', handler)
    }
    return action => [sub, action]
})()

export const HandleRoute = (state, route) => ({ ...state, page: ROUTES[route]})