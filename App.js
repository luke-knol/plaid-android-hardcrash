/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import PlaidLink from 'react-native-plaid-link-sdk';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <PlaidLink
                publicKey="a4b52619202472b132ee1c0299bb15"
                clientName="RaiseRight"
                product={['auth']}
                userEmailAddress="test.email@email.com"
                userPhoneNumber="555-555-5555"
                userLegalName="New User"
                language="en"
                countryCodes={['US']}
                onSuccess={() => {}}
                onExit={() => {}}
                env="sandbox">
                <Text>Launch Plaid</Text>
              </PlaidLink>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 20,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
});

export default App;
