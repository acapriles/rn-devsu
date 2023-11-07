import { StyleSheet, Text, View } from "react-native"



export const NoProducts = () => {
    const style = styles();

    return (
        <View style={ style.container }>
            <Text>No hay productos cargados en el sistema.</Text>
        </View>
    )
}

const styles = () => {
    return StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center'
        }
    });
}