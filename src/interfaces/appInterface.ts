export interface Product {
    id:            string;
    name:          string;
    description:   string;
    logo:          string;
    date_release:  string;
    date_revision: string;
};

export interface ProductItemProps {
    productItem: Product;
};

export interface ButtonProps {
    name: string;
    backgoundColor: string;
    textColor: string;
    onPress: ( e: any ) => void;
    isLoading?: boolean;
};

export interface ProductsState {
    isLoading: boolean;
    products: Product[];
}