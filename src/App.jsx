import React, { lazy } from 'react';

import { BrowserRouter } from 'react-router-dom'

import { Analytics } from '@vercel/analytics/react';

const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Experience = lazy(() => import('./components/Experience'));
// const Feedbacks = lazy(() => import('./components/Feedbacks'));
const Hero = lazy(() => import('./components/Hero'));
const Navbar = lazy(() => import('./components/Navbar'));
const Tech = lazy(() => import('./components/Tech'));
// const Works = lazy(() => import('./components/Works'));
const StarsCanvas = lazy(() => import('./components/canvas/Stars'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
    return (
        <>
            <BrowserRouter>
                <div className="relative z-0 bg-primary">
                    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                        <Navbar />
                        <Hero />
                    </div>
                    <About />
                    <Experience />
                    <Tech />
                    {/* <Works /> */}
                    {/* <Feedbacks /> */}
                    <div className="relative z-0">
                        <Contact />
                        <StarsCanvas />
                    </div>
                    <Footer />
                </div>
            </BrowserRouter >
            <Analytics />
        </>
    )
}

export default App;
