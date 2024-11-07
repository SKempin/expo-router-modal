import { Stack, Link } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';

export default function Saved() {
  return (
    <>
      <Stack.Screen options={{ headerTitle: 'Saved' }} />
      <View style={styles.container}>
        <Text style={{ marginVertical: 30 }}>SAVED screen - (search)/saved.tsx</Text>
        <Link
          href={{
            pathname: '/[id]',
            params: { id: 'bacon' },
          }}>
          <Text>View dynamic ID screen</Text>
        </Link>
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
