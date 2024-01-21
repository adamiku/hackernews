import { apiRoutes, createAPIUrl } from '@/shared/constants';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import TopStory from './top-story';
import TopStoryCardSkeleton from './top-story-card-skeleton';

function TopStories() {
    const [searchParams] = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    const { isPending, error, data } = useQuery<number[]>({
        queryKey: ['topstories'],
        queryFn: async () => {
            const path = apiRoutes.topStories;

            const response = await fetch(createAPIUrl(path));
            return response.json();
        },
    });

    if (isPending)
        return (
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                data-testid="top-story-card-skeleton"
            >
                {Array.from({ length: 10 }, (_, index) => index + 1).map(
                    (item) => (
                        <div key={item} className="max-w-xs">
                            <TopStoryCardSkeleton />
                        </div>
                    )
                )}
            </div>
        );

    if (error)
        return (
            <div data-testid="topstories-error">{`An error has occurred when loaded top stories ${error.message}`}</div>
        );

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.slice(0, currentPage * 10).map((id) => (
                <TopStory key={id} id={id} />
            ))}
        </div>
    );
}

export default TopStories;
