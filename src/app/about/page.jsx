import React, { Suspense } from 'react';

const About = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className='max-w-6xl mx-auto p-3 space-y-4'>
                <h1>About</h1>
                {/* Your content here */}
            </div>
        </Suspense>
    );
};

export default About;
