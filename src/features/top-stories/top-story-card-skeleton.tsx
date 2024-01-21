import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

function TopStoryCardSkeleton() {
    return (
        <Card>
            <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
                <Skeleton className="w-[100px] h-[20px] rounded-full" />
                <Skeleton className="w-[100px] h-[20px] rounded-full" />
            </CardHeader>
            <CardContent>
                <div className="flex justify-between text-sm text-muted-foreground">
                    <Skeleton className="w-[100px] h-[20px] rounded-full" />
                    <Skeleton className="w-[100px] h-[20px] rounded-full" />
                    <Skeleton className="w-[100px] h-[20px] rounded-full" />
                </div>
            </CardContent>
        </Card>
    );
}

export default TopStoryCardSkeleton;
