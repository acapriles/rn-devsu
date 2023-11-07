import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';

import { ProductItemProps } from "../interfaces/appInterface";
import { RootStackParams } from "../navigators/Navigator";
import { COLORS } from "../commons/constants";
 



type DetailsScreenNavigationProp = StackNavigationProp<RootStackParams, 'DetailScreen'>;

export const ProductsItem = ( { productItem }: ProductItemProps ) => {
    const navigation = useNavigation<DetailsScreenNavigationProp>();
    const style = styles();

    return(
        <TouchableOpacity
            onPress={ () => navigation.navigate('DetailScreen', productItem) }
        >
            <View style={ style.container }>
                <View>
                    <Text style={ style.titleText }>{ productItem.name }</Text>
                    <Text style={ style.idText }>ID: { productItem.id }</Text>
                </View>
                <View style={ style.iconContainer }>
                    <Icon name='chevron-forward' size={ 14 } />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderLeftWidth: 0.5,
            borderRightWidth: 0.5,
            borderColor: COLORS.gray,
            paddingHorizontal: 10,
        },
        titleText: {
            fontWeight: '500',
            // fontSize: 14,
            marginTop: 6,
        },
        idText: {
            marginBottom: 6,
        },
        iconContainer: {
            justifyContent: 'center'
        }
    });
}
