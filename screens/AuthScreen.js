import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { facebookLogin } from '../store/actions/auth_actions'
import {
    View,
    ActivityIndicator
} from 'react-native'
import CommonStyles from '../CommonStyles';

export default function AuthScreen({ navigation }) {
    const dispatch = useDispatch();
    const { token, isLoading } = useSelector(state => state.auth);

    useEffect(() => {
        if(!isLoading && token === null)
            dispatch(facebookLogin())

    }, [token])

    if(token) {
        navigation.navigate('Main')
    }

    return (
        <View style={CommonStyles.container}>
            <ActivityIndicator color="#000" size={50} />
        </View>
    )

}