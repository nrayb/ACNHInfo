import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppDrawer } from './src/components/AppDrawer';
import { HemisphereProvider } from './src/context/Hemisphere'
import { Page, Pages } from "./src/pages/Pages";
import { DrawerNavigatorProps, RootStackParamList } from "./src/types";

export default function App() {
  const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

  return (
    <HemisphereProvider>
      <NavigationContainer>
          <Navigator>
            <Screen
              name="Drawer"
              component={DrawerNavigator}
            />
          </Navigator>
      </NavigationContainer>
    </HemisphereProvider>
  );
}

const DrawerNavigator = ({ navigation }: DrawerNavigatorProps) => {
  const { Navigator, Screen } = createDrawerNavigator();

  return (
    <Navigator drawerContent={(props) => <AppDrawer {...props} rootNavigator={navigation}/>}>
      {
        Object.keys(Pages).map((page) => (
          <Screen key={page} name={page} component={Pages[page as Page]} />
        ))
      }
    </Navigator>
  );
};
