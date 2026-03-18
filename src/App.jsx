// App.jsx
import Background from './layout/Background'
import Present from './components/Present'
import './index.css'
import Contents from './components/Contents'
import { ParticlesBg } from './layout/PresentBg'
import Start from './components/Start'
import Footer from './layout/Footer'
import About from './components/About'
import Header from './layout/Header'
import { useMemo, useState } from 'react'
import List from './components/List'

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const MemoizedLayout = useMemo(() => (
    <>
      <div className="w-full flex justify-center relative z-10">
        <Present />
        <Background />
        <ParticlesBg />
      </div>
      <main className="relative z-10">
        <Contents />
        <About />
        <Start />
        <Footer />
      </main>
    </>
  ), []);

  return (
    <>
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className="relative min-h-screen bg-[#030308] overflow-x-hidden">
        <div
          className="fixed inset-0 z-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        <List isOpen={isOpen} setIsOpen={setIsOpen} />
        {MemoizedLayout}
      </div>
    </>
  );
}

export default App;