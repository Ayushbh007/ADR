// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SelectionScreen from './screens/SelectionScreen';
import Oncologist from './screens/Oncologists';
import Pharmacist from './screens/Pharmacists';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Selection">
        <Stack.Screen name="Selection" component={SelectionScreen}
         options={{
          headerStyle:{
            backgroundColor: "#0f4c75"
          },
          title: 'ADR',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            textAlign: "center",
            alignSelf: "center",
            color: "#00b7c2"
          }
        }} 
        />
        <Stack.Screen name="Oncologist" component={Oncologist} />
        <Stack.Screen name="Pharmacist" component={Pharmacist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
