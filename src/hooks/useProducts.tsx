import { showMessage } from "react-native-flash-message";

import { Product } from "../interfaces/appInterface";
import bankApi from "../config/apis/bankApi";
import { useAppDispatch, useAppSelector } from "../store/store";
import { onAEditProducts, onAddProducts, onDeleteProducts, onLoadProducts, onSetLoading } from "../store/productSlice";


export const useProducts = () => {
    const { isLoading, products } = useAppSelector( ( state ) => state.products );
    const dispatch = useAppDispatch();

    
    const getProducts = async () => {
        try {
            dispatch( onSetLoading( true ) );

            const { data } = await bankApi.get<Product[]>('/bp/products/');
            
            dispatch( onLoadProducts( data ) );
            
        } catch ( error ) {
            dispatch( onSetLoading( false ) );
            handleMessages( 500, 'Error desconocido' );
        }
    }

    const addProduct = async ( product: Product ) => {
        try {
            dispatch( onSetLoading( true ) );

            const response = await bankApi.post<Product>('/bp/products/', product, {
                validateStatus: () => true,
            });

            if ( response.status === 400 ) {
                dispatch( onSetLoading( false ) );

                handleMessages( 400, `Ya existe un producto registrado con el id ${ product.id }` );
                return;
            }

            if ( response.status === 206 ) {
                dispatch( onSetLoading( false ) );

                handleMessages( 206, 'Todos los campos son obligatorios' );
                return;
            }

            handleMessages( 200, 'El producto fue agragado.' );
            dispatch( onAddProducts( response.data ) );
        } catch ( error ) {
            dispatch( onSetLoading( false ) );
            handleMessages( 500, 'Error desconocido' );
        }
    }

    const editProduct = async ( product: Product ) => {
        try {
            dispatch( onSetLoading( true ) );

            const response = await bankApi.put<Product>(`/bp/products`, product, {
                validateStatus: () => true,
            });

            if ( response.status === 401 ) {
                dispatch( onSetLoading( false ) );

                handleMessages( 401, `Ya existe un producto registrado con el id ${ product.id }` );
                return;
            }

            if ( response.status === 400 ) {
                dispatch( onSetLoading( false ) );
                
                handleMessages( 400, 'Error en los datos del formulario' );
                return;
            }

            handleMessages( 200, 'El producto fue actualizado.' );
            dispatch( onAEditProducts( response.data ) );
        } catch ( error ) {
            dispatch( onSetLoading( false ) );
            handleMessages( 500, 'Error desconocido' );
        }
    }

    const deleteProduct = async ( id: string ) => {
        try {
            dispatch( onSetLoading( true ) );

            const response = await bankApi.delete<string>(`/bp/products?id=${ id }`, {
                validateStatus: () => true,
            });

            if ( response.status === 404 ) {
                dispatch( onSetLoading( false ) );

                handleMessages( 404, 'Este producto ya fue eliminado.' );
                return;
            }

            handleMessages( 200, 'El producto fue eliminado.' );
            dispatch( onDeleteProducts( id ) );
        } catch ( error ) {
            dispatch( onSetLoading( false ) );
            handleMessages( 500, 'Error desconocido' );
        }
    }

    
    type CodeError = 200 | 206 | 400 | 401 | 404 | 500;
    
    const handleMessages = ( codeError: CodeError, message: string ) => {

        switch ( codeError ) {
            case 200:
                showMessage({
                    message: message,
                    type: "success",
                });
                break;
            default:
                showMessage({
                    message: message,
                    type: "danger",
                });
                break;
        }
    }
    
    return {
        isLoading,
        products,
        // Functions
        addProduct,
        editProduct,
        deleteProduct,
        getProducts,
    }
}