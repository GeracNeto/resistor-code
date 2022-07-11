// Aplicação que chama os componentes e páginas

import { useState } from "react";
import { Header } from "../components/header";
import { Resistor } from "../components/resistor";
import { Footer } from '../components/footer';

import './style.css'

export function App(){

    //Estado para mostrar o footer da página ao cliclar no botão "Obs"
    const [isToggled, setIsToggled] = useState(false);

    return(
        <div>
            <Header />
            <Resistor />
            <button onClick={() => setIsToggled(!isToggled)}>Obs</button>
            {isToggled && <Footer />} {/* Quando o botão é acionado o estado muda para true e então o componente Footer é mostrado */}
        </div>
    );
}