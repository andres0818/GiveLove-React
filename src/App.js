import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


//Componentes
import { Header, Footer } from './components/index';
//Pages
import { Home, Contact, Login, Register, Reset } from './pages/index';

import Create from "./components/firebasee/Create";
import Edit from "./components/firebasee/Edit";
import Show from './components/firebasee/Show';

function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show" element={<Show />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;