import React from 'react';

interface Button {
    name: string;
    onClick?: () => void;
}

const Button: React.FC<Button> = ({ name, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-white text-[#001A40] font-semibold border-2 border-[#001A40] px-6 py-3 rounded-md 
                      hover:bg-[#0A285F] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset 
                      focus:ring-[#001A40] focus:bg-[#001A40] focus:text-white transition duration-300 ease-in-out"
        >
            {name}
        </button>
    );
};

export default Button;
