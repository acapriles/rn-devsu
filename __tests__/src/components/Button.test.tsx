import { render, screen } from '@testing-library/react-native'

import { Button } from '../../../src/components/Button';


describe('<Button />', () => {
    it('Renders correctly', () => {
        render(
            <Button
                name='Delete'
                onPress={() => {}}
                backgoundColor='red'
                textColor='blue'
            />
        );
        expect( screen.getByText('Delete') ).toBeTruthy();

        render(
            <Button
                name='Delete'
                onPress={() => {}}
                backgoundColor='red'
                textColor='blue'
                isLoading={ true }
            />
        );
        expect( screen.getByTestId('indicator')).toBeTruthy();

    });
});