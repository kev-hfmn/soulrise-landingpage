import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Services />
    </div>
  )
}
