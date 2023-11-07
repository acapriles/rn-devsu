import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackScreenProps } from '@react-navigation/stack';

import { Header } from '../components/Header';
import { COLORS, SIZES } from '../commons/constants';
import { useProducts } from '../hooks/useProducts';
import { ProductsItem } from '../components/ProductsItem';
import { ProductsSkeleton } from '../skeletons/ProductsSkeleton';
import { Button } from '../components/Button';
import { Separator } from '../components/Separator';
import { RootStackParams } from '../navigators/Navigator';
import { NoProducts } from '../components/NoProducts';
import { Product } from '../interfaces/appInterface';
import { TextInput } from '../components/TextInput';



export interface ProductsScreenProps extends StackScreenProps<RootStackParams, 'ProductsScreen'>{}


export const ProductsScreen = ({ navigation }: ProductsScreenProps ) => {
    const { isLoading, products, getProducts } = useProducts();
    const [ search, setSearch ] = useState('');
    const [ filteredProducts, setFilteredProducts ] = useState<Product[]>([]);

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        setFilteredProducts( products );
    }, [ products ]);

    const { top } = useSafeAreaInsets();

    const style = styles( top );

    const handleSearchChange = ( value: string ) => { 
        
        setSearch( value )
    
        const filteredItems = products.filter(( product ) =>
            product.name.toLowerCase().includes( value.toLowerCase() )
        );
    
        setFilteredProducts( filteredItems );
    }

    const handleButton = () => navigation.navigate('AddProductScreen');

    
    return (
        <View style={ style.container }>
            <Header />
            {
                isLoading 
                ?   <ProductsSkeleton />
                : (
                    <>
                        <View style={ style.flatListContainer }>
                            <View style={{
                                marginBottom: 30,
                            }}>
                                <TextInput
                                    placeholder="Search"
                                    value={ search }
                                    onChangeText={ handleSearchChange }
                                    style={{ borderColor: COLORS.gray }}
                                />
                            </View>

                            {
                                filteredProducts.length === 0
                                ?   <NoProducts />
                                :   (
                                    <>
                                        <FlatList 
                                            data={ filteredProducts }
                                            renderItem={ ({ item }) => <ProductsItem productItem={ item } /> }
                                            ListHeaderComponent={ () => <Separator /> }
                                            ItemSeparatorComponent={ () =>  <Separator /> }
                                            keyExtractor={ ( item ) => item.id }
                                            ListFooterComponent={ () => <Separator /> }
                                            showsVerticalScrollIndicator={ false }
                                        />
                                    </>
                                )
                            } 

                        </View>

                        <View style={ style.buttonContainer }>
                            <Button
                                isLoading={ isLoading }
                                name='Agregar'
                                onPress={ handleButton }
                                backgoundColor={ COLORS.yellow }
                                textColor={ COLORS.blue }
                            />
                        </View>
                    </>
                )
            }
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
        title: {
            color: COLORS.blue,
            fontWeight: 'bold',
        },
        flatListContainer: {
            flex: 1,
            marginHorizontal: SIZES.marginHorizontal,
        },
        buttonContainer: {
            marginHorizontal: SIZES.marginHorizontal,
            marginBottom: 20,
        }
    });
}
