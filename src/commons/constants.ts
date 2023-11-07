import { Dimensions } from "react-native";


const { width, height } = Dimensions.get("screen");

export const COLORS = {
    white: "rgb(255, 255, 255)",
    black: "rgb(0, 0, 0)",
    blue: "rgb(0, 0, 128)",
    yellow: "rgb(255, 195, 0)",
    red: "rgb(255, 0, 0)",
    gray: "rgb(192, 192, 192)",
    darkGray: "rgba(57, 46, 52, 0.77)",
};

export const SIZES = {
    screenWidth: width,
    screenHeight: height,
    marginVertical: 25,
    marginHorizontal: 20,
    skeletonBorderRadius: 4,
};

export const MESSAGE = {
    required: 'Este campo requerido',
    url: 'Debe ingresar una URL válida',
    min: {
        id: "Ingrese mas de 2 caracteres",
        name: "Ingrese mas de 4 caracteres",
        description: "Ingrese mas de 9 caracteres",
    },
    max: {
        id: "Ingrese menos de 11 caracteres",
        name: "Ingrese menos de 101 caracteres",
        description: "Ingrese menos de 201 caracteres",
    },
    date: {
        typeError: 'Debe colocar una fecha válida (YYYY-MM-DD)',
        lessThanToday: 'La fecha no puede ser menor a hoy',
        oneYear: 'La fecha tiene que ser un año exacto despues a la fecha de liberación',
    }
};