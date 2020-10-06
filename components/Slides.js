import React from 'react'
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Slide({ data, onComplete }) {

    const renderSlides = data.map((slide, index) => {
        const text = slide.text
        return (
            <View style={{...styles.slide, backgroundColor: slide.color}} key={slide.text}>
                <Text style={styles.slideText}>
                    {text}
                </Text>
                {
                    index === data.length - 1
                    ? <TouchableOpacity style={styles.buttonStyle} onPress={() => onComplete()}>
                        <Text style={styles.buttonLabel}>Continue...</Text>
                    </TouchableOpacity>
                    : null
                }
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
    },
    buttonStyle: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 30,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 3
    },
    buttonLabel: {
        fontSize: 18
    }
});