import { NativeBaseProvider } from 'native-base';
import Navigator from './src/navigator/Navigator';
import { Provider } from 'react-redux';

import { store } from './src/store';
// import store from "./src/store";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Navigator />
      </NativeBaseProvider>
    </Provider>
  )

}

export default App;
