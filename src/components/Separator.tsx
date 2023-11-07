import { View } from 'react-native';
import { COLORS } from '../commons/constants';


export const Separator = () => {

    return (
        <View
            style={{
                borderBottomWidth: 0.5,
                borderColor: COLORS.gray,
            }} 
        />
    )
}