import { fireEvent, render, screen, waitFor } from '@testing-library/react-native'

import { ConfirmationModal } from '../../../src/components/ConfirmationModal';



describe('<ConfirmationModal />', () => {
    const mockFn = jest.fn();
    const mockHandleClose = jest.fn();
    
    it('Renders correctly', async () => {
        const { getByText } = await waitFor(() => render(
            <ConfirmationModal
                toggleModal={ mockHandleClose }
                isVisible={ true }
                deleteProduct={ mockFn }
                isLoading={ false }
                productName='TDC'
            />
        ))
        
        await waitFor(() => expect( screen ).toBeDefined());
        await waitFor(() => expect( getByText('¿Estás seguro de eliminar el producto TDC?')).toBeTruthy());
    });

    it('Call Cancel Button', async() => {
        const { getByText } = await waitFor(() => render(
            <ConfirmationModal
                toggleModal={ mockHandleClose }
                isVisible={ true }
                deleteProduct={ mockFn }
                isLoading={ false }
                productName='TDC'
            />
        ))
        
        await waitFor(() => fireEvent.press( getByText('Cancelar') ));
        await waitFor(() => expect( mockHandleClose ).toHaveBeenCalledTimes( 1 ));
    });
});