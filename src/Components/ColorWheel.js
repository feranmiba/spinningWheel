import React, { useState, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { MdWavingHand } from "react-icons/md";

const ColorWheel = () => {
    const [selectedColor, setSelectedColor] = useState('#ffffff'); // Initial color
    const [spinning, setSpinning] = useState(false); // State to track spinning
    const [showModal, setShowModal] = useState(Boolean)
    const [showSpin, setShowSpin] = useState(true)
    const [thankYou, setThankYou] = useState(Boolean)


    const visibility = () => {
    setThankYou(!thankYou)
    }
 

    const colors =['Red', 'Blue', 'Purple', 'White', 'Black']; // Example colors

    const data = {
        labels: ['Red', 'Blue', 'Purple', 'White', 'Black'],
        datasets: [
            {
                data: [16, 16, 16, 16, 16],
                backgroundColor: ['red', 'blue', 'purple', 'white', 'black']
            }
        ]
    };

    const options = {
        responsive: true,
        animation: {
            duration: 2000, // Spin duration in milliseconds
            easing: 'easeInOutCubic' // Easing function for smooth animation
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false // Disables tooltips
            },
            datalabels: {
                color: '#fcd4d4',
                formatter: (_, context) => context.chart.data.labels[context.dataIndex],
                font: { size: 24 }
            }
        }
    };

    const wheelRef = useRef();

    const spinWheel = () => {
        if (!spinning) {
            setSpinning(true);
            const randomRotation = Math.floor(Math.random() * 360); // Get a random rotation angle
            const rotation = 360 * 5 + randomRotation; // Spin 5 times plus the random angle
    
            // Apply rotation animation to the chart
            if (wheelRef.current && wheelRef.current.chartInstance) {
                wheelRef.current.chartInstance.options.rotation = rotation;
                wheelRef.current.chartInstance.update();
            }
    
            // Set the winner after the wheel stops spinning
            setTimeout(() => {
                setSpinning(false);
                const winnerIndex = Math.floor(randomRotation / (360 / colors.length));
                setSelectedColor(colors[winnerIndex]);
        setShowModal(!showModal)
        setShowSpin(false)
            }, rotation);
        }
    };
    

    return (
        <div>
            <Pie ref={wheelRef} data={data} options={options} />
           {showSpin && ( <Button variant='contained' onClick={spinWheel} disabled={spinning}>
                {spinning ? 'Spinning...' : 'Spin'}
            </Button>)}
          {showModal && (  <div className='mt-5'>
                Selected Color: <span style={{ color: selectedColor, fontWeight: 800 }}>{selectedColor}</span>
                <p>Your colour for the Day is <b style={{ color: selectedColor}}>{selectedColor}</b> </p>
              <Link onClick={visibility}> <Button variant='contained'>OK</Button></Link> 
            </div>)}

{thankYou && ( <section  className='fixed bg-[#eeffff] px-3 md:px-20 py-10  h-[50%] md:h-[70%] top-24 right-[15%] md:right-1/4 w-[80%] md:w-[50%] text-center shadow-2xl z-50 rounded-xl'>
    <p className='mt-3'>Thank you for participating in the spin</p>
    <p className='mt-3'>We hope to see you on Sunday 31st, March 2024. </p>
    <p className='mt-3'>Remember your colour for that day is <span style={{color: selectedColor, textTransform: "uppercase", fontWeight: 800}}>{selectedColor}</span></p>
    <p className='mt-3'>Don't forget to bring your gift for Ayomide.</p>
    <p className='mt-3 flex justify-center'>  <MdWavingHand /> See you on the 31st March.</p>
    </section> ) }
          
        </div>
    );
};

export default ColorWheel;



