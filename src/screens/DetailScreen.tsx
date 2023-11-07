import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";

import { useProducts } from "../hooks/useProducts";
import { Header } from "../components/Header"
import { COLORS, SIZES } from "../commons/constants";
import { Button } from "../components/Button";
import { RootStackParams } from "../navigators/Navigator";
import { ConfirmationModal } from "../components/ConfirmationModal";



export interface DetailScreenProps extends StackScreenProps<RootStackParams, 'DetailScreen'>{}


export const DetailScreen = ({ route, navigation }: DetailScreenProps ) => {
    const { isLoading, deleteProduct } = useProducts();
    const [ isModalVisible, setModalVisible ] = useState( false );
    const { id, name, description, logo, date_revision, date_release } = route.params;
    const { top } = useSafeAreaInsets();

    const style = styles( top );


    const toggleModal = () => {
        setModalVisible( !isModalVisible );
    };


    const handleButton = ( event: 'delete' | 'edit' ) => {

        switch ( event ) {
            case 'delete':
                setModalVisible( !isModalVisible );
                break;

            case 'edit':
                navigation.navigate('AddProductScreen', {
                    id, name, description, logo, date_revision, date_release
                })
                break;
            
            default:
                break;
        }
    }

    const formatDate = (value: string) => value.substring(0, 10);

    const handleDeleteConfirmation = () => {
        deleteProduct( id );
        toggleModal();
    }


    return (
        <View style={ style.container }>
            <Header />

            <ConfirmationModal 
                toggleModal={ toggleModal } 
                isVisible={ isModalVisible }
                deleteProduct={ handleDeleteConfirmation }
                isLoading={ isLoading }
                productName={ name }
            />

            <View style={ style.generalContainer }>
                <Text style={ style.idText }>ID: { id }</Text>
                <Text>Información extra</Text>

                <View style={{
                    marginHorizontal: 10,
                    marginTop: 30,
                }}>
                    <View style={ style.infoContainer }>
                        <Text>Nombre</Text>
                        <Text>{ name }</Text>
                    </View>

                    <View style={ style.infoContainer }>
                        <Text>Descripción</Text>
                        <Text>{ description }</Text>
                    </View>

                    <View style={ style.logoInfoContainer }>
                        <Text>Logo</Text>
                        <View style={ style.logoContainer }>
                            <Image
                                style={ style.logo }
                                source={{ uri: logo }}
                            />
                        </View>
                    </View>

                    <View style={ style.infoContainer }>
                        <Text>Fecha liberación</Text>
                        <Text>{ formatDate( date_release.toString() )}</Text>
                    </View>

                    <View style={ style.infoContainer }>
                        <Text>Fecha revisión</Text>
                        <Text>{ formatDate( date_revision.toString() )}</Text>
                    </View>

                </View>
            </View>
            
            <View style={ style.buttonContainer }>
                <Button
                    name='Editar'
                    onPress={ () => handleButton('edit') }
                    backgoundColor={ COLORS.gray }
                    textColor={ COLORS.blue }
                />
                <Button
                    name='Eliminar'
                    onPress={ () => handleButton('delete') }
                    backgoundColor={ COLORS.red }
                    textColor={ COLORS.white }
                />
            </View>
        </View>
    )
}

const styles = ( top: number ) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            borderWidth: 1,
            marginVertical: 5,
            marginHorizontal: 5,
            marginTop: top,
        },
        generalContainer: {
            flexGrow: 1,
            marginHorizontal: SIZES.marginHorizontal,
        },
        idText: {
            color: COLORS.black,
            fontWeight: 'bold',
            marginBottom: 6,
            fontSize: 18,
        },
        infoContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 12,
        },
        logoInfoContainer: {
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginBottom: 12,
        },
        logoContainer: {
            alignItems: 'center',
            marginBottom: 12,
        },
        logo: {
            width: 160,
            height: 100,
            borderRadius: 4,
        },
        buttonContainer: {
            marginHorizontal: SIZES.marginHorizontal,
            marginBottom: 10,
        }
    });
}
