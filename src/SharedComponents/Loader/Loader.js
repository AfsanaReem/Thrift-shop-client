import React from 'react';

const Loader = () => {
    return (
        <div className='h-96 w-full flex justify-center items-center'>
            <progress className="progress w-1/2"></progress>
        </div>
    );
};

export default Loader;