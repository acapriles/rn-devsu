import { fireEvent, render, screen } from '@testing-library/react-native'

import { TextInput } from '../../../src/components/TextInput';


describe('<TextInput />', () => {
    const mockFn = jest.fn();
    beforeEach( ()=> jest.clearAllMocks() );

    const renderInput = () =>
        render(
            <TextInput
                placeholder="Search"
                value={ '123' }
                onChangeText={ mockFn }
            />
        );

    it('Renders correctly', () => {
        const { getByTestId } = renderInput();
        const input = getByTestId('input');
        
        expect( screen ).toBeDefined();
        expect( input.props.placeholder ).toBe('Search');
    });
    
    it('Should apply the value when changing text', () => {
        const { getByTestId } = renderInput();
        const input = getByTestId('input');
        fireEvent.changeText(input, '123');
        expect( input.props.value ).toBe('123');
    });
});