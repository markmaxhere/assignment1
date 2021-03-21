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
  Image,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
     
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {/* Header  */}
          <View style={styles.header}>
            <Image
              style={styles.tinyLogo}
              source={require('./assets/react.png')}
            />
            <Text style={{color: '#56D1F9', fontSize: 26, fontWeight: '700'}}>
              React Native
            </Text>
            <Text style={{color: '#858585', fontSize: 22, fontWeight: '700'}}>
              Learn once, write anywhere.
            </Text>
          </View>
           {/* Image divider  */}
          <View style={styles.imageSep}>
            <Image
              style={[styles.LargeLogo]}
              source={require('./assets/ios.png')}
            />
            <View
              style={{
                height: '125%',
                width: 1,
                backgroundColor: '#A8A8A8',
              }}></View>
            <Image
              style={styles.LargeLogo}
              source={require('./assets/android.png')}
            />
          </View>
            {/* Heading with descriptions */}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                Create native apps for Android and iOS using React
              </Text>
              <Text style={styles.sectionDescription}>
                React Native combines the best parts of native developement with
                React, a best-in-class Javascript library for building user
                interfaces.
              </Text>
              <Text style={[styles.sectionDescription,{marginTop:10}]}>
               Use a little—or a lot. You can use React Native today in your existing Android and iOS projects or you can create a whole new app from scratch.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Written in Javascript—render with native code</Text>
              <Text style={styles.sectionDescription}>
              React primitives render to native platform UI, meaning your app uses the same native platform APIs other apps do.
              </Text>
              <Text style={[styles.sectionDescription,{marginTop:10}]}>
               Many platforms, one React. Create platform-specific versions of components so a single codebase can share code across plarforms. With React Native, one team can maintain two platforms and share a common technology—React.
              </Text>
            </View>
            <View style={[styles.sectionContainer,{marginBottom:15}]}>
              <Text style={styles.sectionTitle}>Native Developement For Everyone</Text>
              <Text style={styles.sectionDescription}>
                React Native lets you create truly native apps and doesn't compromise your user's experience. It provides core set of platform agnostic native components like View, Text, and Image that map directly to the platform's native UI building blocks.
              </Text>
             
            </View>
           
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#DCDCDC',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#DCDCDC',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#141414',
  },
  sectionDescription: {
    // marginTop: 8,
    fontSize: 12,
    fontWeight: '600',
    color: '#5C5C5C',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  tinyLogo: {
    width: 80,
    height: 80,
    backgroundColor: 'transparent',
    resizeMode: 'contain',
  },
  LargeLogo: {
    width: 120,
    height: 120,
    backgroundColor: 'transparent',
    resizeMode: 'contain',
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    paddingBottom: 20,
    paddingTop: 5,
    zIndex: 2,
  },
  imageSep: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#DCDCDC',
    borderBottomColor: '#A8A8A8',
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    height: 190,
  },
});

export default App;
