// Resistor

import React, { useEffect, useState } from "react";
import './style.css';


export function Resistor(){

    // Estados para alterar as cores das faixas do resistor. O valor estado é a classe de cada faixa
    const [colorOne, setColorOne] = useState('box brown');
    const [colorTwo, setColorTwo] = useState('box black');
    const [colorThree, setColorThree] = useState('box red');
    const [colorFour, setColorFour] = useState('box gold');

    // Estados para aleterar os valores de cada faixa de acordo com a cor correspondende
    const [resOne, setResOne] = useState();
    const [resTwo, setResTwo] = useState();
    const [resThree, setResThree] = useState();
    const [resFour, setResFour] = useState();

    let textValues = resOne + resTwo;
    
    let resThreeNumber = parseFloat(resThree);

    let operation = textValues * resThreeNumber;

    let mult = operation.toFixed(2);

    let result = mult.toString() + resFour + ' Ω'; // result é a variável que contém a string na tela com o resultado final. 

    // As condições verificam o valor do resistor e faz a seguinte troca para ficar em notação ciêntífica:
    /*
    1000 = K
    1000000 = M
    1000000000 = G
    */
    if(mult >= 1000 && mult < 1000000){
        mult = mult / 1000
        result = mult.toString() + 'K' + resFour + ' Ω'
    }

    else if(mult >= 1000000 && mult < 1000000000){
        mult = mult / 1000000
        result = mult.toString() + 'M' + resFour + ' Ω'
    }

    else if(mult >= 1000000000){
        mult = mult / 1000000000
        result = mult.toString() + 'G' + resFour + ' Ω'
    }


    // Os useEffects abaixo identificam a mudança de cor de cada faixa e atualiza o valor do resistor de acordo com a faixa correspondende
    useEffect(() => {
        switch (colorOne) {

            case 'box black':
                setResOne('0')                                
                break;

            case 'box brown':
                setResOne('1')                                
                break;

            case 'box red':
                setResOne('2')                                
                break;

            case 'box orange':
                setResOne('3')                                
                break;

            case 'box yellow':
                setResOne('4')                                
                break;

            case 'box green':
                setResOne('5')                                
                break;

            case 'box blue':
                setResOne('6')                                
                break;
    
            case 'box violet':
                setResOne('7')                                
                break;

            case 'box gray':
                setResOne('8')                                
                break;
    
            case 'box white':
                setResOne('9')                                
                break;

            default:
                setResOne('0')
                break;
        }

    },[colorOne])

    useEffect(() => {
        switch (colorTwo) {

            case 'box black':
                setResTwo('0')                                
                break;

            case 'box brown':
                setResTwo('1')                                
                break;

            case 'box red':
                setResTwo('2')                                
                break;

            case 'box orange':
                setResTwo('3')                                
                break;

            case 'box yellow':
                setResTwo('4')                                
                break;

            case 'box green':
                setResTwo('5')                                
                break;

            case 'box blue':
                setResTwo('6')                                
                break;
    
            case 'box violet':
                setResTwo('7')                                
                break;

            case 'box gray':
                setResTwo('8')                                
                break;
    
            case 'box white':
                setResTwo('9')                                
                break;

            default:
                setResTwo('0')
                break;
        }

    },[colorTwo])

    useEffect(() => {
        switch (colorThree) {

            case 'box black':
                setResThree('1')                                
                break;

            case 'box brown':
                setResThree('10')                                
                break;

            case 'box red':
                setResThree('100')                                
                break;

            case 'box orange':
                setResThree('1000')                                
                break;

            case 'box yellow':
                setResThree('10000')                                
                break;

            case 'box green':
                setResThree('100000')                                
                break;

            case 'box blue':
                setResThree('1000000')                                
                break;
    
            case 'box violet':
                setResThree('10000000')                                
                break;

            case 'box gray':
                setResThree('100000000')                                
                break;
    
            case 'box white':
                setResThree('1000000000')                                
                break;

            case 'box gold':
                setResThree('0.1')                                
                break;
        
            case 'box silver':
                setResThree('0.01')                                
                break;

            default:
                setResThree('1')
                break;
        }

    },[colorThree])

    useEffect(() => {
        switch (colorFour) {

            case 'box brown':
                setResFour(' ±1%')                                
                break;

            case 'box red':
                setResFour(' ±2%')                                
                break;

            case 'box green':
                setResFour(' ±0.5%')                                
                break;

            case 'box blue':
                setResFour(' ±0.25%')                                
                break;
    
            case 'box violet':
                setResFour(' ±0.1%')                                
                break;

            case 'box gray':
                setResFour(' ±0.05%')                                
                break;

            case 'box gold':
                setResFour(' ±5%')                                
                break;

            case 'box silver':
                setResFour(' ±10%')                                
                break;

            case 'box no-color':
                setResFour(' ±20%')                                
                break;


            default:
                setResFour(' ±5%')
                break;
        }

    },[colorFour])


    return(
        <div className="master-container">

            <h1>{result}</h1>
            
            <div className="resistor">
                <div className={colorOne}></div>
                <div className={colorTwo}></div>
                <div className={colorThree}></div>
                <div className={colorFour}></div>
            </div>

            <div className="select-color">
                <select onChange={e => setColorOne(e.target.value)}>
                    <option value="box black">Black</option>
                    <option value="box brown" selected>Brown</option>
                    <option value="box red">Red</option>
                    <option value="box orange">Orange</option>
                    <option value="box yellow">Yellow</option>
                    <option value="box green">Green</option>
                    <option value="box blue">Blue</option>
                    <option value="box violet">Violet</option>
                    <option value="box gray">Gray</option>
                    <option value="box white">White</option>
                </select>

                <select onChange={e => setColorTwo(e.target.value)}>
                    <option value="box black" selected>Black</option>
                    <option value="box brown">Brown</option>
                    <option value="box red">Red</option>
                    <option value="box orange">Orange</option>
                    <option value="box yellow">Yellow</option>
                    <option value="box green">Green</option>
                    <option value="box blue">Blue</option>
                    <option value="box violet">Violet</option>
                    <option value="box gray">Gray</option>
                    <option value="box white">White</option>
                </select>

                <select onChange={e => setColorThree(e.target.value)}>
                    <option value="box black">Black</option>
                    <option value="box brown">Brown</option>
                    <option value="box red" selected>Red</option>
                    <option value="box orange">Orange</option>
                    <option value="box yellow">Yellow</option>
                    <option value="box green">Green</option>
                    <option value="box blue">Blue</option>
                    <option value="box violet">Violet</option>
                    <option value="box gray">Gray</option>
                    <option value="box white">White</option>
                    <option value="box gold">Gold</option>
                    <option value="box silver">Silver</option>
                </select>

                <select onChange={e => setColorFour(e.target.value)}>
                    <option value="box brown">Brown</option>
                    <option value="box red">Red</option>
                    <option value="box green">Green</option>
                    <option value="box blue">Blue</option>
                    <option value="box violet">Violet</option>
                    <option value="box gray">Gray</option>
                    <option value="box gold" selected>Gold</option>
                    <option value="box silver">Silver</option>
                    <option value="box no-color">No-color</option>
                </select>
            </div>
        </div>
    );
}