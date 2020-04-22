import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { FishTable } from './components/fish/FishTable';

// https://reactnative.dev/docs/0.22/scrollview#scrolleventthrottle
const SCROLL_EVENT_THROTTLE = 12;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView bounces={false} style={styles.scrollView} scrollEventThrottle={SCROLL_EVENT_THROTTLE} >
          <View>
            <FishTable/>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  scrollView: {},
});
