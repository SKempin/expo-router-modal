import { useLocalSearchParams, Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';

export default function Two() {
  const { id } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen />
      <View style={styles.container}>
        <Text style={{ marginVertical: 30 }}>DETAILS SCREEN</Text>
        <Text>Details of user {id} </Text>
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
