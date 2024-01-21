import { fireEvent, render, screen } from '@testing-library/react';
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
    render(<PaginationElement />);
    // Test clicking the previous button when on the first page
    fireEvent.click(screen.getByTestId('pagination-previous'));
    expect(screen.getByTestId('pagination-link')).toHaveTextContent('1'); // Assert current page remains 1

    expect(setSearchParamsMock).not.toHaveBeenCalled();

    // Test clicking the next button
    fireEvent.click(screen.getByTestId('pagination-next'));
    expect(setSearchParamsMock).toHaveBeenCalledWith(searchParamsMock);

    // Test clicking the next button again
    fireEvent.click(screen.getByTestId('pagination-next'));
    expect(setSearchParamsMock).toHaveBeenCalledWith(searchParamsMock);

    // Test clicking the previous button after moving forward
    fireEvent.click(screen.getByTestId('pagination-previous'));
    expect(setSearchParamsMock).toHaveBeenCalledWith(searchParamsMock);

    // Test clicking the previous button again
    fireEvent.click(screen.getByTestId('pagination-previous'));
    expect(setSearchParamsMock).toHaveBeenCalledWith(searchParamsMock);
});
