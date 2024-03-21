import Company from './components/administrator/Company';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './components/administrator2/AdminLogin';
import ProductList from './components/administrator2/ProductList';
import ListProduct from './components/administrator2/ListProduct';
import DashBoard from './components/administrator2/DashBoard';
import Home  from './components/userinterface/screens/Home';
import HomePagedrawer from './components/userinterface/usercomponents/HomePageDrawer';
import AllCategory from './components/userinterface/screens/AllCategory';
import Product from './components/userinterface/screens/Product';
import Cart from './components/userinterface/screens/Cart';
import MakePayment from './components/userinterface/screens/MakePayment';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route element={<Company />} path={"/company"} />
   
          <Route element={<AdminLogin />} path={"/adminlogin"} />
          <Route element={<ProductList />} path={"/productlist"} />
          <Route element={<ListProduct />} path={"/listproduct"} />
          <Route element={<DashBoard />} path={"dashboard/*"} />
          <Route element={<Home/>} path={"/home"} />
          <Route element={<HomePagedrawer/>} path={"/homepagedrawer"} />
          <Route element={<AllCategory/>} path={"/AllCategory"} />
          <Route element={<Product/>} path={"/exploreproduct"} />
          <Route element={<Cart/>} path={"/cart"} />
          <Route element={<MakePayment />} path={"/makepayment"}/>
    
          
          </Routes>
      </Router>

    </div>
  );
}

export default App;
