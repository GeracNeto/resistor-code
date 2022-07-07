import { useState } from "react";
import { Header } from "./components/header";
import { Resistor } from "./components/resistor";
import { Footer } from './components/footer';

export function App(){

    const [isToggled, setIsToggled] = useState(false);

    return(
        <>
            <Header />
            <Resistor />
            <button onClick={() => setIsToggled(!isToggled)}>Obs</button>
            {isToggled && <Footer />}
        </>
    );
}