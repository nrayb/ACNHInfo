import React from 'react';
import { Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppDrawer } from './src/components/AppDrawer';
import { HemisphereProvider } from './src/context/Hemisphere'
import { Page, Pages } from "./src/pages/Pages";
import { DrawerNavigatorProps, RootStackParamList } from "./src/types";

export default function App() {
  const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

  return (
    <HemisphereProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Navigator>
            <Screen
              name="Drawer"
              component={DrawerNavigator}
              // TODO: Add typing to this function
              options={({ navigation }) => ({
                headerLeft: () => (
                  <Icon
                    size={25}
                    style={{ padding: 5, paddingLeft: 20 }}
                    type="font-awesome"
                    name="bars"
                    onPress={() => {
                      navigation.dispatch(DrawerActions.toggleDrawer());
                    }}
                  />
                )
              })}
            />
          </Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
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
