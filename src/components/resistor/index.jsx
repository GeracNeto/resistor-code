import React, { useEffect, useState } from "react";
import './style.css';


export function Resistor(){

    const [colorOne, setColorOne] = useState();
    const [colorTwo, setColorTwo] = useState();
    const [colorThree, setColorThree] = useState();
    const [colorFour, setColorFour] = useState();

    return(
        <div className="master-container">
            <div className="resistor">
                <div className='box'>{colorOne}</div>
                <div className="box">{colorTwo}</div>
                <div className="box">{colorThree}</div>
                <div className="box">{colorFour}</div>
            </div>

            <div className="select-color">
                <select onChange={e => setColorOne(e.target.value)}>
                    <option value="one-black">Black</option>
                    <option value="one-brown">Brown</option>
                    <option value="one-red">Red</option>
                    <option value="one-orange">Orange</option>
                    <option value="one-yellow">Yellow</option>
                    <option value="one-green">Green</option>
                    <option value="one-blue">Blue</option>
                    <option value="one-pink">Pink</option>
                    <option value="one-gray">Gray</option>
                    <option value="one-white">White</option>
                </select>

                <select onChange={e => setColorTwo(e.target.value)}>
                    <option value="two-black">Black</option>
                    <option value="two-brown">Brown</option>
                    <option value="two-red">Red</option>
                    <option value="two-orange">Orange</option>
                    <option value="two-yellow">Yellow</option>
                    <option value="two-green">Green</option>
                    <option value="two-blue">Blue</option>
                    <option value="two-pink">Pink</option>
                    <option value="two-gray">Gray</option>
                    <option value="two-white">White</option>
                </select>

                <select onChange={e => setColorThree(e.target.value)}>
                    <option value="three-black">Black</option>
                    <option value="three-brown">Brown</option>
                    <option value="three-red">Red</option>
                    <option value="three-orange">Orange</option>
                    <option value="three-yellow">Yellow</option>
                    <option value="three-green">Green</option>
                    <option value="three-blue">Blue</option>
                    <option value="three-pink">Pink</option>
                    <option value="three-gray">Gray</option>
                    <option value="three-white">White</option>
                </select>

                <select onChange={e => setColorFour(e.target.value)}>
                    <option value="four-gold">Gold</option>
                    <option value="four-silver">Silver</option>
                    <option value="four-no-color">No-color</option>
                </select>
            </div>
        </div>
    );
}