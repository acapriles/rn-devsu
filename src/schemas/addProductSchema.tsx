import * as Yup from 'yup';
import moment from 'moment';

import { Product } from '../interfaces/appInterface';
import { MESSAGE } from '../commons/constants';


export const addProductSchema = Yup.object().shape({
    id: Yup.string()
        .min(3, MESSAGE.min.id )
        .max(10, MESSAGE.max.id )
        .required( MESSAGE.required ),
    name: Yup.string()
        .min(5, MESSAGE.min.name )
        .max(100,  MESSAGE.max.name )
        .required( MESSAGE.required ),
    description: Yup.string()
        .min(10, MESSAGE.min.description )
        .max(200, MESSAGE.max.description )
        .required( MESSAGE.required ),
    logo: Yup.string()
        .url( MESSAGE.url )
        .required( MESSAGE.required ),
    date_release: Yup.date()
        .min( moment( new Date() ).subtract( 1, 'day' ), MESSAGE.date.lessThanToday )
        .typeError( MESSAGE.date.typeError )
        .required( MESSAGE.required ),
    date_revision: Yup.date()
        .when('date_release',
            ( date_release, schema ) => {
                if ( isCorrectDate( date_release[ 0 ] ) ) {
                    const afterYear = moment( date_release[ 0 ] ).add( 1, 'year');
                    return schema.min( afterYear , MESSAGE.date.oneYear );
                }
                
                return schema;
            }
        )
        .when('date_release',
            ( date_release, schema ) => {
                if ( isCorrectDate( date_release[ 0 ] ) ) {
                    const afterYear = moment( date_release[ 0 ] ).add( 1, 'year');
                    return schema.max( afterYear , MESSAGE.date.oneYear );
                }
                
                return schema;
            }
        )
        .typeError( MESSAGE.date.typeError )
        .required( MESSAGE.required )
});

export const addProductInitialValues: Product = {
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: '',
    date_revision: '',
};

const isCorrectDate = ( date: Date ): boolean => date instanceof Date && isFinite( date.getTime() );