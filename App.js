
import { Provider } from 'react-redux'
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/Welcome';
import Quiz from './screens/Quiz';
import CurrentLevel from './screens/CurrentLevel';
import CurrentLevel2 from './screens/CurrentLevel2';
import QuizResult from './screens/QuizResult';
import TaskQuizResult from './screens/TaskQuizResult';
import Profile from './screens/Profile';
import { store, persistor } from './slice';

const Stack = createNativeStackNavigator();

const App = () => {
  const [firstVisit, setFirstVisit] = useState(null);

  useEffect(async () => {
    const result = await AsyncStorage.getItem(
      'FirstVisit',
    );
    setFirstVisit(result ? JSON.parse(result) : true);
  }, []);

  if (firstVisit === null) return null;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
            initialRouteName={firstVisit ? 'Welcome' : 'Profile'}
          >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Quiz" component={Quiz} />
            <Stack.Screen
              name="CurrentLevel"
              component={CurrentLevel}
            />
            <Stack.Screen
              name="CurrentLevel2"
              component={CurrentLevel2}
            />
            <Stack.Screen
              name="QuizResult"
              component={QuizResult}
            />
            <Stack.Screen
              name="TaskQuizResult"
              component={TaskQuizResult}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};


export default App;
