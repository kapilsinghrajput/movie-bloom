// pages/404.js
import React, { Suspense } from 'react';

const Custom404 = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div  className=" flex flex-col items-center">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, this page does not exist.</p>
            </div>
        </Suspense>
    );
};

export default Custom404;
