import { render } from '@testing-library/react';
import App from './app';

jest.mock('./shared/components/topbar.tsx', () => ({
    default: () => <div data-testid="topbar-component">Mock TopBar</div>,
}));
jest.mock('./features/top-stories/top-stories', () => ({
    default: () => (
        <div data-testid="topstories-component">Mock Topstories</div>
    ),
}));
jest.mock('./shared/components/pagination.tsx', () => ({
    default: () => (
        <div data-testid="pagination-component">Mock Pagination</div>
    ),
}));
jest.mock('./shared/components/footer.tsx', () => ({
    default: () => <div data-testid="footer-component">Mock Footer</div>,
}));

test('Renders the main page', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('topbar-component')).toBeInTheDocument();
    expect(getByTestId('topstories-component')).toBeInTheDocument();
    expect(getByTestId('pagination-component')).toBeInTheDocument();
    expect(getByTestId('footer-component')).toBeInTheDocument();
});
