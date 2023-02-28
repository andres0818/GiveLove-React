import { BrowserRouter, Route, Routes } from "react-router-dom";
//Componentes
import { Header, Footer } from './components/index';
//Pages
import { Home, Contact } from './pages/index';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/contact" element={ <Contact /> } />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;