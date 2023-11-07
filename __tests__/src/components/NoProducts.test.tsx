import { render } from '@testing-library/react-native'

import { NoProducts } from '../../../src/components/NoProducts';

let component: any;

describe('<NoProducts />', () => {
    beforeEach(() => {
        component = render(<NoProducts />);
    });

    it('Renders correctly', () => {
        expect( component ).toBeDefined();
        // expect( component.getByTestId('message')).toBeDefined();
        expect( component.getByText('No hay productos cargados en el sistema.')).toBeDefined();
    });
});