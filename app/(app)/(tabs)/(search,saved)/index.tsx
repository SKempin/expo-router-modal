import { Stack, Link } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';

import { HeaderButton } from '../../../../components/HeaderButton';

export default function Home() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: 'Search',
          headerRight: () => (
            <Link href="/modal" asChild>
              <HeaderButton />
            </Link>
          ),
        }}
      />
      <View style={styles.container}>
        <Text style={{ marginVertical: 30 }}>Search screen - (search)/index.tsx</Text>

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
