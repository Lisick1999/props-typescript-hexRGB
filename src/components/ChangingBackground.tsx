import React from "react";
import { useState } from "react";
import '../css/main.css';

export const ChangingBackground = () => {
  const [hex, setHex] = useState('');
  const [rgb, setRgb] = useState('rgb(255, 255, 255)');
  const [rgbTextColor, setRgbTextColor] = useState('rgb(0, 0, 0)');
  
  const inversionColorText = (r: number, g: number, b: number) => {
    const rInv = 255 - r;
    const gInv = 255 - g;
    const bInv = 255 - b;
    setRgbTextColor(`rgb(${rInv}, ${gInv}, ${bInv})`);
  };

  const hexToRgb = (hex: string) => {
    if (hex.startsWith("#")) {
      hex = hex.substring(1);
    };
    if (hex.length !== 3 && hex.length !== 6) {
      setRgb("Ошибка!");
      setRgbTextColor('rgb(255, 255, 255)');
      return;
    };
    if (hex.length === 3) {
      hex = hex.split("").map((char) => char + char).join("");
    };

    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);    
    setRgb(`rgb(${r}, ${g}, ${b})`);
    inversionColorText(r, g, b);
  };

  const handleHexChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setHex(value);
    hexToRgb(value);
  };

  return (
    <div className="App" style={rgb === 'Ошибка!'? {backgroundColor: 'red'} : {backgroundColor: rgb}}>
      <div className="content" id="content">
        <form className="converter">
          <input className="hex" type="text" id="hex" value={hex} placeholder="#ffffff" onChange={handleHexChange} />
          <div className="rgb" id="rgb" style={{color: rgbTextColor}}>{rgb}</div>
        </form>
      </div>    
    </div>
  );
};
