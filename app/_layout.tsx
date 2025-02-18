import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen
        name="TransactionForm"
        options={{
          presentation: 'modal',
          title: 'Add transaction'
        }}
      />
      <Stack.Screen
        name="PolicyModal"
        options={{
          presentation: 'modal',
          title: 'PrivacyPolicy'
        }}
      />
      <Stack.Screen
        name="CurrencySelect"
        options={{
          presentation: 'modal',
          title: 'Select currency'
        }}
      />
    </Stack>
  );
}

