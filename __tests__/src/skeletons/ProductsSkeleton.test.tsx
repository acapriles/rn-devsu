
import { render, screen, waitFor } from '@testing-library/react-native'

import { ProductsSkeleton } from '../../../src/skeletons/ProductsSkeleton';



describe('<ProductsSkeleton />', () => {
    
    it('Renders correctly', async() => {
        render( <ProductsSkeleton /> )
        
        await waitFor(() => expect( screen ).toBeDefined());
    });
});