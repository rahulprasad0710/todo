import { useState } from "react";
import "./App.css";
import CompA from "./components/CompA";
import CompB from "./components/CompB";
import Navbar from "./components/Navbar";
import ToDoApp from "./components/ToDoApp";
import TwaWay from "./components/TwaWay";
import ProductList from "./components/ProductList";

function App() {
    const [count, setCount] = useState(1);
    return (
        <div>
            {/* <CompA count={count} name='ram' />
            <CompB count={count} name='ram' setValue={setCount} /> */}
            <ProductList />
        </div>
    );
}

export default App;
