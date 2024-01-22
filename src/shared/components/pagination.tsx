import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/shared/components/ui/pagination';
import { useSearchParams } from 'react-router-dom';

function PaginationElement() {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    const handlePagination = (page: number) => {
        if (currentPage + page <= 1) return;
        searchParams.set('page', String(currentPage + page));
        setSearchParams(searchParams);
    };

    return (
        <Pagination className="py-5">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => handlePagination(-1)}
                        aria-disabled={currentPage === 1}
                        data-testid="pagination-previous"
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink data-testid="pagination-link">
                        {currentPage}
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis data-testid="pagination-ellipsis" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext
                        onClick={() => handlePagination(1)}
                        data-testid="pagination-next"
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}

export default PaginationElement;
