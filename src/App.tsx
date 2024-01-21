import Footer from './shared/footer'
import TopBar from './shared/topbar'

function App() {
    return (
        <main className="h-screen w-screen flex flex-col p-5">
            <TopBar />
            <section className="flex-1">{/* <TopStories /> */}</section>
            <Footer />
        </main>
    )
}

export default App
