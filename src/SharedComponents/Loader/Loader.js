import React from 'react';

const Loader = () => {
    return (
        <div>
            <div className='h-96 flex justify-center items-center'><progress className="progress w-1/2"></progress></div>
        </div>
    );
};

export default Loader;