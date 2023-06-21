import React from 'react'

const HeroSection = () => {
    return (
        <div className='w-full h-[90vh]'>
            <img
                src='https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3433&q=80'
                alt='/'
                className='w-full h-full object-cover'
            />
            <div className='max-w-[1140px] m-auto'>
                <div className='absolute top-[40%] w-full md:[50%] flex flex-col text-white p-4'>
                    <h1>find your trip</h1>
                    <h2>with weekaway</h2>

                    <p>If you want ro travel over the world, weekaway can provide you suggestions on how you can plan your trips.It shows number of destinations where you want to travel across the world, It can provides all sources of images of destionations.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default HeroSection