import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="index" options={{
        title: 'Hope you had a good day at work <3', 
        headerStyle: {backgroundColor: '#000D0C',},
        headerTitleStyle: {fontWeight: 'bold', color: '#CCCC43'}
      }}/>
    </Stack>
  );
}
