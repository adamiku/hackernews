import { useQuery } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import * as routerDom from 'react-router-dom';
import TopStories from './top-stories';

jest.mock('@tanstack/react-query', () => ({
    useQuery: jest.fn().mockReturnValue({
        data: {},
        isPending: true,
        error: undefined,
    }),
}));
jest.mock('react-router-dom', () => ({
    useSearchParams: jest.fn(),
}));
jest.mock('./top-story.tsx', () => ({
    default: () => <div data-testid="topstory-id">Mock Top Story</div>,
}));

describe('TopStories renders correctly', () => {
    beforeEach(() => {
        const setSearchParamsMock = jest
            .fn()
            .mockImplementation((param) => searchParamsMock.set('page', param));
        const searchParamsMock = new URLSearchParams();

        jest.spyOn(routerDom, 'useSearchParams').mockReturnValue([
            searchParamsMock,
            setSearchParamsMock,
        ]);
    });
    test('with isPending state', async () => {
        render(<TopStories />);

        const skeletonElements = screen.getByTestId('top-story-card-skeleton');
        expect(skeletonElements).toBeInTheDocument();
    });

    test('with error state', () => {
        (useQuery as jest.Mock).mockReturnValue({
            data: {},
            isPending: false,
            error: { message: 'Error' },
        });
        render(<TopStories />);

        const errorElement = screen.getByTestId('topstories-error');

        expect(errorElement).toBeInTheDocument();
    });

    test('with success state and page is 1', () => {
        (useQuery as jest.Mock).mockReturnValue({
            data: Array.from({ length: 100 }, (_, index) => index + 1),
            isPending: false,
            error: undefined,
        });
        render(<TopStories />);
        const topStoryElements = screen.getAllByTestId('topstory-id');

        expect(topStoryElements).toHaveLength(10);
    });

    test('with success state and page is 2', () => {
        (useQuery as jest.Mock).mockReturnValue({
            data: Array.from({ length: 100 }, (_, index) => index + 1),
            isPending: false,
            error: undefined,
        });
        const setSearchParamsMock = jest
            .fn()
            .mockImplementation((param) => searchParamsMock.set('page', param));
        const searchParamsMock = new URLSearchParams();

        jest.spyOn(routerDom, 'useSearchParams').mockReturnValue([
            searchParamsMock,
            setSearchParamsMock,
        ]);
        searchParamsMock.set('page', '2');

        render(<TopStories />);
        const topStoryElements = screen.getAllByTestId('topstory-id');

        expect(topStoryElements).toHaveLength(20);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});
