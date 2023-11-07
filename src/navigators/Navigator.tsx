import { createStackNavigator } from "@react-navigation/stack";

import { ProductsScreen } from "../screens/ProductsScreen";
import { DetailScreen } from '../screens/DetailScreen';
import { Product } from "../interfaces/appInterface";
import { AddProductScreen } from "../screens/AddProductScreen";



export type RootStackParams = {
	ProductsScreen: undefined;
    DetailScreen: Product;
    AddProductScreen: Product | undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                },
            }}
        >
            <Stack.Screen name="ProductsScreen" component={ ProductsScreen } />
            <Stack.Screen name="DetailScreen" component={ DetailScreen } />
            <Stack.Screen name="AddProductScreen" component={ AddProductScreen } />
        </Stack.Navigator>
    )
}
