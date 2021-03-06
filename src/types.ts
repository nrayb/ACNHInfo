import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Drawer: undefined,
};

export type DrawerNavigatorProps = {
  navigation: StackNavigationProp<RootStackParamList, "Drawer">,
  route: RouteProp<RootStackParamList, "Drawer">,
}

export interface Critter {
  name: string;
  price: string;
  spawnTime: string;
  location: string;
  availability: {
    hours: boolean[],
    northMonths: boolean[],
    southMonths: boolean[],
  };
}
