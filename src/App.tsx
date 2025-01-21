import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {  Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Flipbooks } from './components/Flipbooks';
import { Footer } from './components/Footer';
import { Faq } from './components/Faq';
import { PlusAndMinus } from './components/PlusAndMinus';
import { Regulations } from './components/Regulations';
import { QrCode } from './components/QrCode';
import { BanerFooter } from './components/BanerFooter';
import { Flipbooks2 } from './components/Flipbooks2';
import { Test } from './components/test';
import { Book } from './components/Book';
import { ShareQr } from './components/ShareQr';
import { ListArticle } from './components/ListArticle';

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
                <Hero /> 
                <div className=" bg-[#F2F2F2]">
                <Flipbooks2 />
                <Book />
                </div>
                <ShareQr />
                {/* <Test /> */}
              
                {/* <Flipbooks /> */}
                {/* <QrCode /> */}
                {/* <BanerFooter /> */}
                <div className=" bg-[#F2F2F2]">
                <ListArticle />
                </div>
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