import { useEffect } from 'react';
import { AppState } from 'react-native';
import { Provider } from 'react-redux';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { store } from './src/store';

import { usePermissions } from './src/hooks/usePermissions';
import AppScreens from './src/AppScreens';

function App(): JSX.Element {

  const { checkLocationPermission } = usePermissions();

  useEffect(() => {

    AppState.addEventListener('change', state => {
      if (state !== 'active') return;
      checkLocationPermission();
    });

  },[]);

  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <AppScreens />
      </Provider>
    // </GestureHandlerRootView>
  )

}

export default App;
