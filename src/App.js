import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Pages
import { Home, Contact, Login, Register, Reset, Admin } from "./pages";
// Components
import { Header, Footer} from "./components";
import AdminOnlyRoute from "./components/adminOnlyRoute/adminOnlyRoute";
import ProductDetails from "./components/product/productDetails/ProductDetails";
import Cart from "./pages/cart/Cart";
//import CheckoutDetails from "./pages/checkout/CkeckoutDetails";
import Checkout from "./pages/checkout/Ckeckout";
import CheckoutSuccess from "./pages/checkout/CheckoutSucess";
import OrderHistory from "./pages/orderHistory/OrderHistory";
//import OrderDetails from "./pages/orderDetails/OrderDetails";
import React, {useState, useContext, useEffect} from 'react'
import ReviewProducts from "./components/reviewProducts/ReviewProducts";
import { getMonth } from "./util";
import CalendarHeader from "./components/calendarheader/CalendarHeader";
import Sidebar from "./components/sidebar/Sidebar";
import Month from "./components/month/Month";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/eventmodal/EventModal";
import moment from 'moment/min/moment-with-locales';
import 'moment/locale/es';


function App() {
  moment.locale('es'); 
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);


  return (
    
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/details/:name" element={<ProductDetails />} />
          <Route path='/calendar' element={
          <React.Fragment>
          {showEventModal && <EventModal />}
          <div className='=h-screen flex flex-col'>
          <CalendarHeader />
          <div className='flex flex-1'>
          <Sidebar />
          <Month month={currenMonth} />
          </div>
          </div>
          </React.Fragment>
          } />
          <Route
            path="/admin/*"
            element={
              <AdminOnlyRoute>
                <Admin />
              </AdminOnlyRoute>
            }
          />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/checkout-details" element={<CheckoutDetails />} /> */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/order-history" element={<OrderHistory />} />
          {/* <Route path="/order-details/:id" element={<OrderDetails />} /> */}
          <Route path="/review-product/:id" element={<ReviewProducts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
      
    </>
  );
}





export default App;