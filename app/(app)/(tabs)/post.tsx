import { Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';

export default function Post() {
  return (
    <>
      <Stack.Screen />
      <View style={styles.container}>
        <Text>POST SCREEN</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
