import { Tabs } from 'expo-router';

import { TabBarIcon } from '../../../components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="(search)"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerShown: false,
          title: 'Search',
        }}
      />
      <Tabs.Screen
        name="(saved)"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerShown: false,
          title: 'Saved',
        }}
      />

      <Tabs.Screen
        name="post"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          title: 'Post',
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          title: 'Account',
        }}
      />
    </Tabs>
  );
}
