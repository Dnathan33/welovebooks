import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {initStore} from './redux/store';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const style = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <GestureHandlerRootView>
      <Provider store={initStore()}>
        <SafeAreaView style={style}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={style.backgroundColor}
          />
          <HomeScreen />
        </SafeAreaView>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
