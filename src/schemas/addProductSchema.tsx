import * as Yup from 'yup';

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
    date_release: Yup.string()
        // .max(new Date(), 'La fecha no puede ser menor a hoy')
        .required( MESSAGE.required ),
    date_revision: Yup.string()
        .required( MESSAGE.required )
        // .test('date-range', 'End date must be after start date', validateDateRange),
});

// const validateDateRange = ( obj ) => {
//     const { start, end } = obj;
//     if (!start || !end) {
//       return true; // don't validate if either field is missing
//     }
//     return moment(end).isSameOrAfter(start); // custom validation logic
//   };

export const addProductInitialValues: Product = {
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: '',
    date_revision: '',
};