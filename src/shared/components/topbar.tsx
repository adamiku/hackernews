import { Button } from '@/components/ui/button';

function TopBar() {
    return (
        <nav>
            <ul className="flex gap-1 md:gap-5">
                <li>
                    <Button variant={'link'}>Home</Button>
                </li>
                <li>
                    <Button variant={'link'}>New</Button>
                </li>
                <li>
                    <Button variant={'link'}>Best</Button>
                </li>
                <li>
                    <Button variant={'link'}>Comments</Button>
                </li>
                <li>
                    <Button variant={'link'}>Ask</Button>
                </li>
            </ul>
        </nav>
    );
}

export default TopBar;
