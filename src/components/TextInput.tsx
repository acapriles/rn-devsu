import { KeyboardTypeOptions, TextInput as RNTextInput, StyleSheet } from 'react-native';

import { COLORS } from '../commons/constants';


interface FormInputProps {
    style?: object;
    onChangeText: ( text: string ) => void;
    value: string | undefined;
    placeholder?: string;
    keyboardType?: KeyboardTypeOptions | undefined;
    secureTextEntry?: boolean;
    onBlur?: ( e: any ) => void;
    autoComplete?: AutoComplete;
    editable?: boolean,
    placeholderTextColor?: string,
    autoCapitalize?: AutoCapitalize,
    multiline?: boolean,
};

type AutoComplete =
    "url"             | 
    "additional-name" | 
    "address-line1"   | 
    "address-line2"   | 
    "birthdate-day"   | 
    "birthdate-full"  | 
    "birthdate-month" | 
    "birthdate-year"  | 
    "cc-csc"          | 
    "cc-exp"          | 
    "cc-exp-day"      | 
    undefined;

type AutoCapitalize = "none" | "sentences" | "words" | "characters" | undefined;


export const TextInput = ({
    style,
    placeholder,
    secureTextEntry,
    onChangeText,
    onBlur,
    value=undefined,
    autoComplete,
    keyboardType = 'default',
    editable = true,
    placeholderTextColor,
    autoCapitalize = 'none',
    multiline = false,
}: FormInputProps) => {
    const styles = dinamicStyle();

    return (
        <RNTextInput
            style={[ styles.textInput, style ]}
            placeholder={ placeholder }
            secureTextEntry={ secureTextEntry }
            onChangeText={ onChangeText }
            onKeyPress={ onBlur }
            onBlur={ onBlur }
            value={ value }
            autoComplete= { autoComplete }
            keyboardType={ keyboardType }
            editable={ editable }
            placeholderTextColor={ placeholderTextColor }
            autoCapitalize={ autoCapitalize }
            multiline={ multiline }

        />
    )
}


const dinamicStyle = () =>{ 
    return StyleSheet.create({
        textInput: {
            color: COLORS.black,
            borderColor: COLORS.gray,
            borderWidth: 1,
            borderRadius: 4,
            height: 35,
            paddingLeft: 10,
        },
    });
}