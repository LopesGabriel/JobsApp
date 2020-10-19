import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    ActivityIndicator
} from 'react-native'
import MapView from 'react-native-maps';
import CommonStyles from '../CommonStyles';

export default function MapScreen() {

    const [region, setRegion] = useState({ longitude: -122, latitude: 37, longitudeDelta: 0.04, latitudeDelta: 0.09 })
    const [mapLoaded, setMapLoaded] = useState(false)

    useEffect(() => {
        setMapLoaded(true);
    }, [])

    const onRegionChangeComplete = region => {
        console.log('Region:', region);
        setRegion(region);
    }

    if(!mapLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    return (
        <View style={CommonStyles.container}>
            <MapView style={{ width: '100%', height: '100%' }} 
                region={region}
                onRegionChangeComplete={region => onRegionChangeComplete(region)}
            />
        </View>
    )
}