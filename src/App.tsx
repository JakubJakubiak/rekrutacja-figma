import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {  Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Regulations } from './components/Regulations';
import { BanerFooter } from './components/BanerFooter';
import { Flipbooks2 } from './components/Flipbooks2';
import { SvgHart } from './components/SvgHart';

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
                <SvgHart />
                {/* <Test /> */}
            
                
                {/* <QrCode /> */}
                {/* <BanerFooter /> */}
                <div className=" bg-[#F2F2F2]">
                <ListArticle />
                </div>
                <ShareQr />
                <BanerFooter /> 
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