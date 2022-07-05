import React, { useEffect, useState } from "react";
import './style.css';


export function Resistor(){

    const [color, setColor] = useState("box-black");

    return(
        <div className="master-container">
            <div className="resistor">
                <div className='box'>{color}</div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>

            <div className="box-color">
                <select onChange={e => setColor(e.target.value)}>
                    <option value="one-black">Black</option>
                    <option>Brown</option>
                    <option>Red</option>
                    <option>Orange</option>
                    <option>Yellow</option>
                    <option>Green</option>
                    <option>Blue</option>
                    <option>Pink</option>
                    <option>Gray</option>
                    <option>White</option>
                </select>

                <select>
                    <option>Black</option>
                    <option>Brown</option>
                    <option>Red</option>
                    <option>Orange</option>
                    <option>Yellow</option>
                    <option>Green</option>
                    <option>Blue</option>
                    <option>Pink</option>
                    <option>Gray</option>
                    <option>White</option>
                </select>

                <select>
                    <option>Black</option>
                    <option>Brown</option>
                    <option>Red</option>
                    <option>Orange</option>
                    <option>Yellow</option>
                    <option>Green</option>
                    <option>Blue</option>
                    <option>Pink</option>
                    <option>Gray</option>
                    <option>White</option>
                </select>

                <select>
                    <option>Gold</option>
                    <option>Silver</option>
                    <option>No-color</option>
                </select>
            </div>
        </div>
    );
}