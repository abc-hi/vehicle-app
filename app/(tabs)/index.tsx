
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import VehicleManagementScreen from './VehicleManagementScreen';
import ServicesScreen from './ServicesScreen';
import RechargeScreen from './RechargeScreen';
import OffersScreen from './OffersScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;
          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Vehicles') iconName = 'car-outline';
          else if (route.name === 'Services') iconName = 'construct-outline';
          else if (route.name === 'Recharge') iconName = 'cash-outline';
          else if (route.name === 'Offers') iconName = 'gift-outline';
          else iconName = 'person-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1E90FF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#fff',
          paddingBottom: 5,
          height: 60,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Vehicles" component={VehicleManagementScreen} />
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="Recharge" component={RechargeScreen} />
      <Tab.Screen name="Offers" component={OffersScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
