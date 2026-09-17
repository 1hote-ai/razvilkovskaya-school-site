import Header from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Cover, About, Space, Day, Achievements, Events, Gallery, FinalScreen } from './sections'

function App() {
  return (
    <>
      <Header />
      <main>
        <Cover />
        <About />
        <Space />
        <Day />
        <Achievements />
        <Events />
        <Gallery />
        <FinalScreen />
      </main>
      <Footer />
    </>
  )
}

export default App
