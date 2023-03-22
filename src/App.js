import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Pages
import { Home, Contact, Login, Register, Reset, Admin } from "./pages";
// Components
import { Header, Footer} from "./components";
import AdminOnlyRoute from "./components/adminOnlyRoute/adminOnlyRoute";
import ProductDetails from "./components/product/productDetails/ProductDetails";

//import CheckoutDetails from "./pages/checkout/CkeckoutDetails";
import Checkout from "./pages/checkout/Ckeckout";
import CheckoutSuccess from "./pages/checkout/CheckoutSucess";
import OrderHistory from "./pages/orderHistory/OrderHistory";
//import OrderDetails from "./pages/orderDetails/OrderDetails";
import ReviewProducts from "./components/reviewProducts/ReviewProducts";
import { WebsiteForm } from "./pages/cart/WebsiteForm";




function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/details/:name" element={<ProductDetails />} />

          <Route
            path="/admin/*"
            element={
              <AdminOnlyRoute>
                <Admin />
              </AdminOnlyRoute>
            }
          />


          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/WebsiteForm" element={<WebsiteForm />} />
          <Route path="add" element={<WebsiteForm />} />
          <Route path="edit/:id" element={<WebsiteForm />} />
          {/* <Route path="/checkout-details" element={<CheckoutDetails />} /> */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/order-history" element={<OrderHistory />} />
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