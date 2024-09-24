"use client"

import React, { useEffect } from 'react';

export default function ErrorComponent({ error, reset }) {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div className='text-center mt-11'>
            <h2 className='text-red-600'>Something Went Wrong. Please Try Again</h2>
            <button className='hover:text-blue-500 hover:text-lg' onClick={() => reset()}>
                Try Again
            </button>
        </div>
    );
}
