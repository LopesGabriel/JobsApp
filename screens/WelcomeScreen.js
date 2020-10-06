import React from 'react'
import Slides from '../components/Slides'

const SLIDE_DATA = [
    { text: 'Welcome to JobApp', color: '#03A9F4' },
    { text: 'Use this to get a Job', color: '#009688' },
    { text: 'Set your location, then swipe away', color: '#03A9F4' }
];

export default function WelcomeScreen({ navigation }) {

    const onSlidesComplete = () => navigation.navigate('Auth');

    return (
        <Slides data={SLIDE_DATA} onComplete={onSlidesComplete} />
    )
}