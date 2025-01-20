import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Flipbooks } from './components/Flipbooks';
import { Footer } from './components/Footer';
import { Faq } from './components/Faq';
import { PlusAndMinus } from './components/PlusAndMinus';
import { Regulations } from './components/Regulations';
import { QrCode } from './components/QrCode';

function App() {
  return (
    <Router>
      <div className="">
        <main className="   ">
          <Routes>
            <Route path="/regulations" element={<Regulations />} />
            <Route path="/" element={
              <>
               <Header /> 
                {/* <Hero /> */}
                {/* <Flipbooks /> */}
                <QrCode />
                
            
              </> 
            } />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;