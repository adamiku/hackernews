import { Button } from '@/shared/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/shared/components/ui/card';
import { CircleIcon, StarIcon } from '@radix-ui/react-icons';
import ReactTimeago from 'react-timeago';
import { TopStory } from './models';

type Props = TopStory;

function TopStoryCard({ title, url, by, score, time }: Props) {
    return (
        <Card>
            <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
                <div className="space-y-1">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="">
                        <Button
                            variant={'link'}
                            className="-ml-4 text-ellipsis overflow-hidden"
                            onClick={() => window.open(url)}
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
                        {by}
                    </div>
                    <div className="flex items-center">
                        <StarIcon className="mr-1 h-3 w-3" />
                        {score}
                    </div>
                    <div>
                        <ReactTimeago date={new Date(time * 1000)} />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default TopStoryCard;
