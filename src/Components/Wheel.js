import React, { useRef } from 'react';
import { Chart, Tooltip, Legend, ArcElement } from 'chart.js';
import './all.css';
import ColorWheel from './ColorWheel';

Chart.register(ArcElement, Tooltip, Legend);

function Wheel() {
 
   

    return (
        <div className="flex justify-center mt-5">
            <div className="border p-14 rounded-xl bg-[#f2f0f0] shadow-2xl relative">
            <ColorWheel />
            </div>

        </div>
    );
}

export default Wheel;

