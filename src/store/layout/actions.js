import { ACTIVATE_AUTH_LAYOUT, ACTIVATE_NON_AUTH_LAYOUT, TOGGLE } from './actionTypes';

export const activateAuthLayout = () => {
    return {
        type: ACTIVATE_AUTH_LAYOUT,
        payload: {
            topbar: true,
            sidebar: true,
            footer: true,
            layoutType: 'Auth'
        }
    }
}

export const activateNonAuthLayout = () => {
    return {
        type: ACTIVATE_NON_AUTH_LAYOUT,
        payload: {
            topbar: false,
            sidebar: false,
            footer: false,
            layoutType: 'NonAuth'
        }
    }
}

export const toggleSidebar = (is_toggle) => {
    return {
        type: TOGGLE,
            payload: { is_toggle }
           
    }
}


