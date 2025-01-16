import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Download } from './components/Download';
import { Footer } from './components/Footer';
import { Faq } from './components/Faq';
import { PlusAndMinus } from './components/PlusAndMinus';
import { Regulations } from './components/Regulations';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow  ">
          <Routes>
            <Route path="/regulations" element={<Regulations />} />
            <Route path="/" element={
              <>
                <Header />
                <Hero />
                <Features />
                <Download />
                <PlusAndMinus />
                <Faq />
              </> 
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;