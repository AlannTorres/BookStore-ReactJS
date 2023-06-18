import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AppContext } from "./store/AppContext";
import { NavBar } from "./templates/partials/NavBar/NavBar";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/Cart";

import './App.css'

const initialState = {
  type: null,
  cart: [],
  books: []
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppContext initialState={initialState} >
          <NavBar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/carrinho" element={<Cart/>}/>
          </Routes>
        </AppContext>
       </div>
    </BrowserRouter>
  );
}

export default App;
