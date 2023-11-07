import { View, Text, Pressable, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/Ionicons';

import { COLORS, SIZES } from "../commons/constants";
import { Separator } from "./Separator";
import { Button } from "./Button";


export interface ConfirmationModalProps {
    toggleModal: () => void;
    deleteProduct: () => void;
    isVisible: boolean;
    isLoading: boolean;
    productName: string;
}

export const ConfirmationModal = ({ toggleModal, isVisible, deleteProduct, isLoading, productName }: ConfirmationModalProps) => {
    
    const style = styles();


    return (
        <Modal
            isVisible={ isVisible }
            onBackdropPress={ toggleModal }
            style={ style.modal }
        >
            <View style={ style.container }>
                <View style={ style.header }>
                    <Pressable
                        onPress={ toggleModal }
                        style={ style.closeButton }
                    >
                        <Icon name="close" size={ 20 } color={ COLORS.darkGray } />
                    </Pressable>
                </View>

                <Separator />

                <View style={ style.body }>
                    <View style={ style.textContainer }>
                        <Text style={ style.text }>
                            ¿Estás seguro de eliminar el producto { productName }?
                        </Text>
                    </View>

                    <Separator />

                    <View style={ style.buttonContainer }>
                        <Button
                            isLoading={ isLoading }
                            name='Confirmar'
                            onPress={ deleteProduct }
                            backgoundColor={ COLORS.yellow }
                            textColor={ COLORS.blue }
                        />

                        <Button
                            isLoading={ isLoading }
                            name='Cancelar'
                            onPress={ toggleModal }
                            backgoundColor={ COLORS.gray }
                            textColor={ COLORS.blue }
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = () => {
    return StyleSheet.create({
        modal: {
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginBottom: 0
        },
        container: { 
            backgroundColor: 'white',
            width: SIZES.screenWidth,
            height: SIZES.screenHeight / 2.5,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
        },
        header: {
            alignItems: 'flex-end',
            paddingHorizontal: SIZES.marginHorizontal,
        },
        closeButton: {
            paddingVertical: 10,
            paddingLeft: 10,
        },
        body: {
            flex: 1,
            marginTop: 20,
        },
        textContainer: {
            flexGrow: 1,
        },
        text: {
            textAlign: 'center',
        },
        buttonContainer: {
            paddingHorizontal: SIZES.marginHorizontal,
            marginTop: 30,
            marginBottom: 10,
        },
    });
}


