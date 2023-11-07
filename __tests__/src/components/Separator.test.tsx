import { render } from '@testing-library/react-native'

import { Separator } from '../../../src/components/Separator';



describe('<Separator />', () => {

    it('Renders correctly', () => {
        expect( render(<Separator />) ).toBeDefined();
    });
});