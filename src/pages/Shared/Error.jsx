import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='text-center'>
            <img 
                className='w-full max-w-lg mx-auto' 
                src="https://i.ibb.co/5XnDyvhX/6325257.jpg" 
                alt="Error"
            />
            
            <Link to="/">
                <button className="mt-6 px-6 py-2 btn-custom text-white rounded-lg hover:bg-blue-700 transition">
                    Go to Home
                </button>
            </Link>
        </div>
    );
};

export default Error;