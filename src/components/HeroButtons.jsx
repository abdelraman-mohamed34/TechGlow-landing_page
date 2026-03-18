import React from 'react';
import { useScrollTo } from '../../customHooks/useScrollTo';

const btnList = [
    { name: 'Get Started', link: 'services', styles: 'bg-transparent border-white border-2 text-white' },
    { name: 'Learn More', link: 'footer', styles: 'bg-white text-black opacity-80' },
]

function HeroButtons() {
    return (
        <div className="sm:mt-8 mt-4 flex justify-center sm:gap-4 gap-2">
            {btnList.map(i => (
                <button key={i.name} onClick={() => useScrollTo(i.link)} className={`${i.styles} sm:px-6 sm:py-3 px-6 py-2 text-sm rounded-4xl shadow-md hover:scale-105 transform transition`}>
                    {i.name}
                </button>
            ))}
        </div>
    );
}

export default HeroButtons;
