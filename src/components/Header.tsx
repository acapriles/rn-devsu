import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import { COLORS } from "../commons/constants";
import { RootStackParams } from "../navigators/Navigator";


type ProductsScreenNavigationProp = StackNavigationProp<RootStackParams, 'ProductsScreen'>;

export const Header = () => {
    const navigation = useNavigation<ProductsScreenNavigationProp>();
    const style = styles();
    
    return (
        <TouchableOpacity testID="header-touchableOpacity"
            style={ style.container }
            onPress={ () => navigation.navigate('ProductsScreen') }
        >
            <Image
                style={ style.logo }
                source={ require('../assets/logo.png') }
            />
            <Text style={ style.title }>
                BANCO PICHINCHA
            </Text>
        </TouchableOpacity>
    )
}

const styles = () => {
    return StyleSheet.create({
        container: {
            alignItems: 'center',
            borderBottomWidth: 0.5,
            borderColor: COLORS.gray,
            flexDirection: 'row',
            justifyContent: 'center',
            paddingVertical: 15,
            marginBottom: 40,
        },
        logo: {
            height: 18,
            marginRight: 2,
            width: 18,
        },
        title: {
            color: COLORS.blue,
            fontWeight: 'bold',
            marginLeft: 2,
        },
    });
}
