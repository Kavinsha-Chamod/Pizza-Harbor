import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import OrdersScreen from "./screens/OrdersScreen";
import PrivateScreen from "./screens/PrivateScreen";
import UserLists from "./screens/UserLists";
import Orderslist from "./screens/Orderslist";
import PizzasList from "./screens/PizzasList";
import Addpizza from "./screens/Addpizza";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/orders" element={<OrdersScreen />} />
          <Route path="/admin" element={<PrivateScreen />} />

          <Route path="/admin/userslist" element={<UserLists />} />
          <Route path="/admin/orderslist" element={<Orderslist />} />
          <Route path="/admin/pizzaslist" element={<PizzasList />} />
          <Route path="/admin/addpizza" element={<Addpizza />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
