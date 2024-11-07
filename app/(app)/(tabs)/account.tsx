import { Stack, Link } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';

import { HeaderButton } from '../../../components/HeaderButton';

export default function Account() {
  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Link href="/modal" asChild>
              <HeaderButton />
            </Link>
          ),
        }}
      />
      <View style={styles.container}>
        <Text>ACCOUNT SCREEN</Text>
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
