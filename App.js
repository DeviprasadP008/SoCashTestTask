import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persist from './src/redux/config/store';
import AppNavigator from './src/navigation/AppNavigator';
import Game from './src/screens/Game/Game';
import store from './src/redux/config/store';


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    );
  }
}
 
 export default App;


//const persistorStore = persist();
 /*const App = () => {

   React.useEffect(() => {
   
   }, []);

    return (
      <Provider store={store}>
        <Game />
      </Provider>
    );
 
};*/


 /*
    return (
      <Provider store={persistorStore.store}>
        <PersistGate loading={null} persistor={persistorStore.persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    )
 */