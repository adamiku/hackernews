import TopStories from './features/top-stories/top-stories';
import Footer from './shared/components/footer';
import PaginationElement from './shared/components/pagination';
import TopBar from './shared/components/topbar';

function App() {
    return (
        <main className="min-h-screen min-w-screen flex flex-col p-5 max-w-7xl m-auto gap-5">
            <TopBar />
            <section className="flex-1">
                <TopStories />
                <PaginationElement />
            </section>

            <Footer />
        </main>
    );
}

export default App;
