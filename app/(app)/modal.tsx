import { StatusBar } from 'expo-status-bar';
import { Platform, Text } from 'react-native';

export default function Modal() {
  return (
    <>
      <Text>MODAL SCREEN</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
}
