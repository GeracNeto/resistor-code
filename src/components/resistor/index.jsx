import React, { useEffect, useState } from "react";
import './style.css';


export function Resistor(){

    const [colorOne, setColorOne] = useState('box black');
    const [colorTwo, setColorTwo] = useState('box brown');
    const [colorThree, setColorThree] = useState('box red');
    const [colorFour, setColorFour] = useState('box gold');

    const [resOne, setResOne] = useState();
    const [resTwo, setResTwo] = useState();
    const [resThree, setResThree] = useState();
    const [resFour, setResFour] = useState();

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
                setResThree('0')                                
                break;

            case 'box brown':
                setResThree('0')                                
                break;

            case 'box red':
                setResThree('00')                                
                break;

            case 'box orange':
                setResThree('000')                                
                break;

            case 'box yellow':
                setResThree('0000')                                
                break;

            case 'box green':
                setResThree('00000')                                
                break;

            case 'box blue':
                setResThree('000000')                                
                break;
    
            case 'box violet':
                setResThree('0000000')                                
                break;

            case 'box gray':
                setResThree('00000000')                                
                break;
    
            case 'box white':
                setResThree('000000000')                                
                break;

            default:
                setResThree('0')
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
                setResFour(' ±0,5%')                                
                break;

            case 'box blue':
                setResFour(' ±0,25%')                                
                break;
    
            case 'box violet':
                setResFour(' ±0,1%')                                
                break;

            case 'box gray':
                setResFour(' ±0,05%')                                
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

            <h1>{resOne}{resTwo}{resThree}{resFour} OHM</h1>
            
            <div className="resistor">
                <div className={colorOne}></div>
                <div className={colorTwo}></div>
                <div className={colorThree}></div>
                <div className={colorFour}></div>
            </div>

            <div className="select-color">
                <select onChange={e => setColorOne(e.target.value)}>
                    <option value="box black">Black</option>
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

                <select onChange={e => setColorTwo(e.target.value)}>
                    <option value="box black">Black</option>
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
                    <option value="box red">Red</option>
                    <option value="box orange">Orange</option>
                    <option value="box yellow">Yellow</option>
                    <option value="box green">Green</option>
                    <option value="box blue">Blue</option>
                    <option value="box violet">Violet</option>
                    <option value="box gray">Gray</option>
                    <option value="box white">White</option>
                </select>

                <select onChange={e => setColorFour(e.target.value)}>
                    <option value="box brown">Brown</option>
                    <option value="box red">Red</option>
                    <option value="box green">Green</option>
                    <option value="box blue">Blue</option>
                    <option value="box violet">Violet</option>
                    <option value="box gray">Gray</option>
                    <option value="box gold">Gold</option>
                    <option value="box silver">Silver</option>
                    <option value="box no-color">No-color</option>
                </select>
            </div>
        </div>
    );
}