import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from "react-native";

import { ButtonProps } from "../interfaces/appInterface";
import { COLORS } from "../commons/constants";



export const Button = ( { name, backgoundColor, textColor, onPress, isLoading = false } : ButtonProps ) => {
    const style = styles( backgoundColor, textColor );

    return (
        <TouchableOpacity
            style={ style.button }
            onPress={ onPress }
            disabled={ isLoading }
        >
            {
                isLoading
                ? <ActivityIndicator testID="indicator" size="small" color={ COLORS.white } />
                : <Text style={ style.text }>{ name }</Text>
            }
            
        </TouchableOpacity>
    )
}

const styles = ( bgColor: string, textColor: string ) => {
    return StyleSheet.create({
        button: {
            alignItems: 'center',
            backgroundColor: bgColor,
            padding: 12,
            borderRadius: 4,
            marginBottom: 10,
        },
        text: {
            color: textColor,
            fontWeight: '500',
        }
    });
}
