import React, {useEffect, useRef} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Image,
  Text,
  View,
  Animated,
} from 'react-native';
import Btn from './Btn';
import {useTranslation} from 'react-i18next';

const Welcome = ({navigation}) => {
  const {t} = useTranslation();
  const logoPosition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(logoPosition, {
          toValue: 15,
          duration: 1500,
          useNativeDriver: false,
        }),
        Animated.timing(logoPosition, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: false,
        }),
      ]),
      {},
    ).start();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <ImageBackground
        source={require('../assets/images/bg.jpg')}
        style={{
          position: 'relative',
          flex: 1,
          paddingVertical: 20,
          paddingHorizontal: 30,
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#00000040',
          }}
        />
        <View>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 50,
              textAlign: 'center',
            }}>
            Locks
          </Text>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 25,
              marginTop: 50,
              textAlign: 'center',
            }}>
            {t('welcomeScreen.slogan')}
          </Text>
        </View>
        <View>
          <Animated.View
            style={{
              marginTop: 10,
              height: 150,
            }}>
            <Animated.View
              style={{
                position: 'absolute',
                top: logoPosition,
                left: 0,
                right: 0,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: 100, height: 150, resizeMode: 'contain'}}
                source={require('../assets/images/logo.png')}
              />
            </Animated.View>
          </Animated.View>
          <Btn onPress={() => navigation.navigate('CurrentLevel')}>
            {t('welcomeScreen.startBtn')}
          </Btn>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Welcome;
