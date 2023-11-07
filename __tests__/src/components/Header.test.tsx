import { fireEvent, render, screen, waitFor } from '@testing-library/react-native'

import { Header } from '../../../src/components/Header';



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



describe('<Header />', () => {
    beforeEach(() => {
        mockedDispatch.mockClear();
    });
    
    it('Renders correctly', async() => {
        const { getByText, getByTestId } = render(
            <Header />
        )
        
        await waitFor(() => expect( screen ).toBeDefined());
        await waitFor(() => expect( getByText('BANCO PICHINCHA')).toBeTruthy());
        await waitFor(() => expect( getByTestId('header-touchableOpacity') ).toBeTruthy());
        await waitFor(() => fireEvent.press( getByTestId('header-touchableOpacity') ));
    });
});