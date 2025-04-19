import React from 'react'
import { useState } from 'react';
const Cbutton = ({ initialCount = 0 }) => {
    const [count, setCount] = useState(initialCount);
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => Math.max(0, prev - 1));
    return (
        <>
            <div className="">
                <div className="flex items-center space-x-2 border rounded-full border-white"  >
                    <button
                        onClick={decrement}
                        className="w-8 h-8   border-r-2 border-white flex items-center justify-center"
                    >
                        -
                    </button>
                    <span className="text-lg font-medium w-8 text-center">
                        {count}
                    </span>
                    <button
                        onClick={increment}
                        className="w-8 h-8  flex items-center justify-center border-white border-l-2"
                    >
                        +
                    </button>
                </div>
            </div>
        </>
    )
}

export default Cbutton