import { Button } from '@/shared/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/shared/components/ui/card';
import { apiRoutes, createAPIUrl } from '@/shared/constants';
import { pathToUrl } from '@/shared/utils';
import { CircleIcon, StarIcon } from '@radix-ui/react-icons';
import { useQuery } from '@tanstack/react-query';
import ReactTimeago from 'react-timeago';
import { TopStory } from './models';
import TopStoryCardSkeleton from './top-story-card-skeleton';

type Props = {
    readonly id: number;
};

function TopStory({ id }: Props) {
    const { isPending, error, data } = useQuery<TopStory>({
        queryKey: ['topstory', id],
        queryFn: async () => {
            const path = pathToUrl(apiRoutes.topStory, { id });
            const response = await fetch(createAPIUrl(path));
            return response.json();
        },
    });
    if (isPending) return <TopStoryCardSkeleton />;

    if (error)
        return `An error has occurred when loaded ${id} top story: ${error.message}`;

    return (
        <Card>
            <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
                <div className="space-y-1">
                    <CardTitle>{data.title}</CardTitle>
                    <CardDescription className="">
                        <Button
                            variant={'link'}
                            className="-ml-4 text-ellipsis overflow-hidden"
                            onClick={() => window.open(data.url)}
                        >
                            LINK
                        </Button>
                    </CardDescription>
                </div>
                <div className="flex justify-end items-center space-x-1 rounded-md">
                    <Button variant="default" className="px-3 shadow-none">
                        <StarIcon className="mr-2 h-4 w-4" />
                        Star
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                        <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                        {data.by}
                    </div>
                    <div className="flex items-center">
                        <StarIcon className="mr-1 h-3 w-3" />
                        {data.score}
                    </div>
                    <div>
                        <ReactTimeago date={new Date(data.time * 1000)} />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default TopStory;
