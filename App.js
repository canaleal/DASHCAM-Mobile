import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import LocationPage from './src/pages/LocationPage';
import ImagePickerPage from './src/pages/ImagePickerPage';
import VideoPlayerPage from './src/pages/VideoPlayerPage';
import MapPage from './src/pages/MapPage';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LocationPage"
          component={LocationPage}
          
        />
         <Stack.Screen name="MapPage" component={MapPage} />
        <Stack.Screen name="ImagePickerPage" component={ImagePickerPage} />
        <Stack.Screen name="VideoPlayerPage" component={VideoPlayerPage} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
