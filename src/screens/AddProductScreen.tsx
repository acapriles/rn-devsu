import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFormik } from 'formik';

import { Header } from '../components/Header';
import { useProducts } from '../hooks/useProducts';
import { COLORS, SIZES } from '../commons/constants';
import { addProductInitialValues, addProductSchema } from '../schemas/addProductSchema';
import { Button } from '../components/Button';
import { TextInput } from '../components/TextInput';
import { RootStackParams } from '../navigators/Navigator';



export interface AddProductScreenProps extends StackScreenProps<RootStackParams, 'AddProductScreen'>{}


export const AddProductScreen = ({ route }: AddProductScreenProps) => {
    const { isLoading, addProduct, editProduct } = useProducts();

    const product = route.params;

    const { top } = useSafeAreaInsets();
    const style = styles( top );



    const { handleChange, handleSubmit, handleBlur, resetForm , values, errors } = useFormik({
		initialValues: ( product === undefined ) ? addProductInitialValues : product,
		validationSchema: addProductSchema,
		onSubmit: async ( values ) => {
            ( product === undefined )
            ?   addProduct( values )
            :   editProduct( values )
		},
	});

    
    return (
        <View style={ style.container }>
            <Header />

            <ScrollView 
                showsVerticalScrollIndicator={ false }
                style={ style.generalContainer }
            >
                <Text style={ style.title }>Formulario de Registro</Text>

                <View style={ style.inputContainer }>
                    <Text style={ style.label }>
                        ID
                    </Text>
                    <TextInput
                        placeholder="Nombre completo"
                        value={ values.id }
                        onChangeText={ handleChange("id") }
                        onBlur={ handleBlur("id") }
                        style={{ borderColor:  errors.id ? 'red' : COLORS.gray }}
                        editable={ product === undefined }
                    />
                    { errors.id && <Text style={{ color: COLORS.red, fontSize: 12, }}>{errors.id}</Text> }
                </View>

                <View style={ style.inputContainer }>
                    <Text style={ style.label }>
                        Nombre
                    </Text>
                    <TextInput
                        placeholder="Nombre completo"
                        value={ values.name }
                        onChangeText={ handleChange("name") }
                        onBlur={ handleBlur("name") }
                        style={{ borderColor:  errors.name ? 'red' : COLORS.gray }}
                    />
                    { errors.name && <Text style={{ color: COLORS.red, fontSize: 12, }}>{errors.name}</Text> }
                </View>

                <View style={ style.inputContainer }>
                    <Text style={ style.label }>
                        Descripción
                    </Text>
                    <TextInput
                        placeholder="Nombre completo"
                        value={ values.description }
                        onChangeText={ handleChange("description") }
                        onBlur={ handleBlur("description") }
                        style={{ borderColor:  errors.description ? 'red' : COLORS.gray }}
                        multiline={ true }
                    />
                    { errors.description && <Text style={{ color: COLORS.red, fontSize: 12, }}>{errors.description}</Text> }
                </View>

                <View style={ style.inputContainer }>
                    <Text style={ style.label }>
                        Logo
                    </Text>
                    <TextInput
                        placeholder="Nombre completo"
                        value={ values.logo }
                        onChangeText={ handleChange("logo") }
                        onBlur={ handleBlur("logo") }
                        style={{ borderColor:  errors.logo ? 'red' : COLORS.gray }}
                    />
                    { errors.logo && <Text style={{ color: COLORS.red, fontSize: 12, }}>{errors.logo}</Text> }
                </View>

                <View style={ style.inputContainer }>
                    <Text style={ style.label }>
                        Fecha Liberación
                    </Text>
                    <TextInput
                        placeholder="Nombre completo"
                        value={ values.date_release }
                        onChangeText={ handleChange("date_release") }
                        onBlur={ handleBlur("date_release") }
                        style={{ borderColor:  errors.date_release ? 'red' : COLORS.gray }}
                    />
                    { errors.date_release && <Text style={{ color: COLORS.red, fontSize: 12, }}>{errors.date_release}</Text> }
                </View>
                
                <View style={ style.inputContainer }>
                    <Text style={ style.label }>
                        Fecha Revisión
                    </Text>
                    <TextInput
                        placeholder="Nombre completo"
                        value={ values.date_revision }
                        onChangeText={ handleChange("date_revision") }
                        onBlur={ handleBlur("date_revision") }
                        style={{ borderColor:  errors.date_revision ? 'red' : COLORS.gray }}
                    />
                    { errors.date_revision && <Text style={{ color: COLORS.red, fontSize: 12, }}>{errors.date_revision}</Text> }
                </View>

                
                <Button
                    name='Enviar'
                    isLoading={ isLoading }
                    onPress={ ( e: any ) => handleSubmit( e ) }
                    backgoundColor={ COLORS.yellow }
                    textColor={ COLORS.blue }
                />
                <Button
                    name='Reiniciar'
                    isLoading={ isLoading }
                    onPress={ ( e: any ) => resetForm( e ) }
                    backgoundColor={ COLORS.gray }
                    textColor={ COLORS.blue }
                />
            </ScrollView>
            
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
        title: {
            color: COLORS.black,
            fontWeight: 'bold',
            marginBottom: 20,
            fontSize: 20,
        },
        inputContainer: {
            marginBottom: 20,
        },
        label: {
            marginBottom: 6,
        }
    });
}
