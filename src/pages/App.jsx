import { useState } from "react";
import { Header } from "../components/header";
import { Resistor } from "../components/resistor";
import { Footer } from '../components/footer';

import './style.css'

export function App(){

    const [isToggled, setIsToggled] = useState(false);

    return(
        <div>
            <Header />
            <Resistor />
            <button onClick={() => setIsToggled(!isToggled)}>Obs</button>
            {isToggled && <Footer />}
        </div>
    );
}