import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
    return (
<Tabs screenOptions={{tabBarActiveTintColor: '#007AFF'}}>
<Tabs.Screen
name="home"
options ={{
    title: 'Home',
    tabBarIcon: ({color, size}) => (
        <Ionicons name="home" color={color} size={size} />
        ),
    }}
/>
<Tabs.Screen
name="Transactions"
options={{
    title: 'Transactions',
    tabBarIcon: ({color, size}) => (
        <Ionicons name="home" color={color} size={size} />
        ),
    }}
/>
<Tabs.Screen 
name="Settings"
options={{
    title: 'Settings',
    tabBarIcon: ({color, size}) => (
        <Ionicons name="home" color={color} size={size} />
        ),
    }}
/>
</Tabs> 
);
}