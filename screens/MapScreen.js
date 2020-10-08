import React from 'react'
import {
    View,
    Text
} from 'react-native'
import MapView from 'react-native-maps';
import CommonStyles from '../CommonStyles';

export default function MapScreen() {
    return (
        <View style={CommonStyles.container}>
            <MapView style={{ width: '100%', height: '100%' }} />
        </View>
    )
}