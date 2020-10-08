import AsyncStorage from '@react-native-community/async-storage';
import { logInWithReadPermissionsAsync, initializeAsync } from 'expo-facebook';
import {
    FACEBOOK_LOGIN_SUCCESS
} from './types';

export const facebookLogin = () => async dispatch => {
    const token = await AsyncStorage.getItem("fb_token");
    if(token) {
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
    } else {
        doFacebookLogin(dispatch);
    }
}

async function doFacebookLogin(dispatch) {
    await initializeAsync('361361821580855', 'Jobs');
    let { type, token } = await logInWithReadPermissionsAsync({ permissions: ['public_profile'] });

    if(type === 'cancel') {
        return dispatch({ type: FACEBOOK_LOGIN_FAIL })
    }

    await AsyncStorage.setItem('fb_token', token);

    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
}