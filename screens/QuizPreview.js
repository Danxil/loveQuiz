import React, { useRef } from 'react';
import {
    SafeAreaView,
    ImageBackground,
    Text,
    View,
    Animated
  } from 'react-native';
import Btn  from './Btn';

const QuizPreview = ({ text, title, btnLabel, onDone }) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: 'black'
        }}>
            <ImageBackground
                style={{
                    position: 'relative',
                    flex: 1,
                    paddingVertical: 20,
                    paddingHorizontal: 20,
                    justifyContent: 'space-evenly',
                }}
            >
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: '#00000040'
                    }}
                ></View>
                <View>
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 35,
                    }}>{title}</Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 25,
                        marginTop: 50,
                    }}>{text}</Text>
                </View>
                <View>
                    <Btn
                        onPress={onDone}
                    >
                        {btnLabel}
                    </Btn>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default QuizPreview
