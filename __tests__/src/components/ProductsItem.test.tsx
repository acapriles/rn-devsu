import { fireEvent, render, screen, waitFor } from '@testing-library/react-native'

import { ProductsItem } from '../../../src/components/ProductsItem';


const productItem = {
    id:            '1111',
    name:          'TDC',
    description:   'Something',
    logo:          'Text',
    date_release:  'Text',
    date_revision: 'Text',
}

const mockedDispatch = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: mockedDispatch,
    }),
  };
});



describe('<ProductsItem />', () => {
    beforeEach(() => {
        mockedDispatch.mockClear();
    });
    
    it('Renders correctly', async() => {
        const { getByText, getByTestId } = render(
            <ProductsItem productItem={ productItem } />
        )
        
        await waitFor(() => expect( screen ).toBeDefined());
        await waitFor(() => expect( getByText('TDC')).toBeTruthy());
        await waitFor(() => expect( getByTestId('touchableOpacity') ).toBeTruthy());
        await waitFor(() => fireEvent.press( getByTestId('touchableOpacity') ));
    });
});