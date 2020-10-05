import React from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Slide({ data }) {

    const renderSlides = data.map(slide => {
        const text = slide.text
        return (
            <View style={{...styles.slide, backgroundColor: slide.color}} key={slide.text}>
                <Text style={styles.slideText}>
                    {text}
                </Text>
            </View>
        )
    })

    return(
        <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
        >
            {renderSlides}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    slideText: {
        fontSize: 30,
        color: '#FFF',
        textAlign: 'center'
    },
    slide: {
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center'
    }
});