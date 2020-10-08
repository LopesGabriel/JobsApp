import { FACEBOOK_LOGIN_FAIL, FACEBOOK_LOGIN_START, FACEBOOK_LOGIN_SUCCESS } from '../actions/types'

const initialState = {
    token: null ,
    isLoading: false
}

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case FACEBOOK_LOGIN_START: {
            return { ...state, isLoading: true }
        }
        case FACEBOOK_LOGIN_SUCCESS: {

            return { ...state, token: payload, isLoading: false }

        }
        case FACEBOOK_LOGIN_FAIL: {
            return { ...state, token: null, isLoading: false }
        }
        default:
            return state;
    }
}