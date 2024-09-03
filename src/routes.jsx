import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './componentes/header';
import Footer from './componentes/footer'
import FaseGrupos from './pages/faseGrupos';
import Quartas from './pages/quartas';
import Semi from './pages/semi';
import Final from './pages/final'


function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<FaseGrupos />} />
                <Route path="/quartas" element={<Quartas />} />
                <Route path="/semi" element={<Semi />} />
                <Route path="/final" element={<Final />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
  }

  export default App