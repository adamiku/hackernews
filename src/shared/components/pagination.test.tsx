import { fireEvent, render } from '@testing-library/react';
import * as routerDom from 'react-router-dom';
import PaginationElement from './pagination';

jest.mock('react-router-dom', () => ({
    useSearchParams: jest.fn(),
}));

test('PaginationElement handles pagination correctly', () => {
    const setSearchParamsMock = jest
        .fn()
        .mockImplementation((param) => searchParamsMock.set('page', param));
    const searchParamsMock = new URLSearchParams();

    jest.spyOn(routerDom, 'useSearchParams').mockReturnValue([
        searchParamsMock,
        setSearchParamsMock,
    ]);
    const { getByTestId } = render(<PaginationElement />);
    // Test clicking the previous button when on the first page
    fireEvent.click(getByTestId('pagination-previous'));
    expect(getByTestId('pagination-link')).toHaveTextContent('1'); // Assert current page remains 1

    expect(setSearchParamsMock).not.toHaveBeenCalled();

    // Test clicking the next button
    fireEvent.click(getByTestId('pagination-next'));
    expect(setSearchParamsMock).toHaveBeenCalledWith(searchParamsMock);

    // Test clicking the next button again
    fireEvent.click(getByTestId('pagination-next'));
    expect(setSearchParamsMock).toHaveBeenCalledWith(searchParamsMock);

    // Test clicking the previous button after moving forward
    fireEvent.click(getByTestId('pagination-previous'));
    expect(setSearchParamsMock).toHaveBeenCalledWith(searchParamsMock);

    // Test clicking the previous button again
    fireEvent.click(getByTestId('pagination-previous'));
    expect(setSearchParamsMock).toHaveBeenCalledWith(searchParamsMock);
});
