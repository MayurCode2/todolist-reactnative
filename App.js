import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TodoApp from './crud/TodoApp.js'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TodoApp"
          component={TodoApp}
          options={{ title: 'Todo List' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
