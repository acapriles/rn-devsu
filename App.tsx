import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import FlashMessage from "react-native-flash-message";

import { Navigator } from './src/navigators/Navigator';
import { store } from './src/store/store';



export const App = () => {
    return (
		<NavigationContainer>
			<Provider store={ store }>
				<Navigator />
			</Provider>
			<FlashMessage position="top" />
		</NavigationContainer>
    )
}

export default App;