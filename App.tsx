import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { BugsPage } from './src/pages/BugsPage';
import { FishPage } from './src/pages/FishPage';
import { AppDrawer } from './src/components/AppDrawer';
import { HemisphereProvider } from './src/context/Hemisphere'

export default function App() {
  const { Navigator, Screen } = createDrawerNavigator();

  return (
    <HemisphereProvider>
      <NavigationContainer>
        <Navigator drawerContent={(props) => <AppDrawer {...props} />}>
          <Screen name="Fish" component={FishPage} />
          <Screen name="Bugs" component={BugsPage} />
        </Navigator>
      </NavigationContainer>
    </HemisphereProvider>
  );
}
